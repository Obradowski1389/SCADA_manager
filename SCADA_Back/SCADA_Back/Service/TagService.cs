using Microsoft.AspNetCore.SignalR;
using SCADA_Back.Model;
using SCADA_Back.Model.DTO;
using SCADA_Back.Model.Tags;
using SCADA_Back.Repository.IRepo;
using SCADA_Back.Service.IService;
using SCADA_Back.Utility.Hubs;
using System.ComponentModel;
using ValueType = SCADA_Back.Model.Tags.ValueType;

namespace SCADA_Back.Service
{
    public class TagService : ITagService
	{
		private readonly ITagRepository _tagRepository;
		private readonly IHubContext<RTUHub, IRTUClient> _rtuHub;
		private readonly IServiceScopeFactory _serviceScope;
		private readonly IAlarmService _alarmService;


		public TagService(ITagRepository tagRepository, IHubContext<RTUHub, IRTUClient> hub, IServiceScopeFactory serviceScope, IAlarmService alarmService)
		{
			_tagRepository = tagRepository;
			_rtuHub = hub;
			_serviceScope = serviceScope;
			_alarmService = alarmService;
		}

		public void AddAnalogInput(AnalogInput input)
		{
			if(GetByAddress(input.IOAddress) != null)
			{
				throw new Exception("This Address is already taken");
			}
			List<Alarm> alarms = input.Alarms;
			input.Alarms = new List<Alarm>();
			var saved = _tagRepository.AddAnalogInput(input);

			foreach(Alarm alarm in alarms)
			{
				alarm.AnalogInputId = saved.Id;
				_alarmService.AddAlarm(alarm);
			}
		}

		public void AddAnalogOutput(AnalogOutput output)
		{
			if (GetByAddress(output.IOAddress) != null)
			{
				throw new Exception("This Address is already taken");
			}

			
			_tagRepository.AddAnalogOutput(output);
		}

		public void AddDigitalInput(DigitalInput input)
		{
			if (GetByAddress(input.IOAddress) != null)
			{
				throw new Exception("This Address is already taken");
			}
			_tagRepository.AddDigitalInput(input);
		}

		public void AddDigitalOutput(DigitalOutput output)
		{
			if (GetByAddress(output.IOAddress) != null)
			{
				throw new Exception("This Address is already taken");
			}
			_tagRepository.AddDigitalOutput(output);
		}

		public void AddOutputValue(OutputValueDTO outputValue)
		{
			Tag? tag = GetByAddress(outputValue.IOAddress);
			if(tag == null)
			{
				throw new Exception("No tag registered to this address");
			}
			if(tag is AnalogInput || tag is DigitalInput)
			{
				throw new Exception("Tag on this address is input!");
			}
			OutputsValue outputsValue;
			if(tag is DigitalOutput)
			{
				if (outputValue.Value < 0 || outputValue.Value > 1)
				{
					throw new Exception("Tag on this address is a digital output!");
				}

				outputsValue = new OutputsValue(outputValue.IOAddress,tag.Id, outputValue.Value, ValueType.DIGITAL);

			}else
			{
				var analog = (AnalogOutput)tag;
				if(analog.LowLimit > outputValue.Value || analog.HighLimit < outputValue.Value)
				{
					throw new Exception("Invalid value for this output");
				}
				outputsValue = new OutputsValue(outputValue.IOAddress, tag.Id, outputValue.Value, ValueType.ANALOG);
			}
			_tagRepository.AddOutputValue(outputsValue);

		}

		public InputsDTO GetInputs()
		{
			InputsDTO inputsDTO = new InputsDTO();
			inputsDTO.AnalogInputs = _tagRepository.GetAnalogInputs().OrderBy(x => int.Parse(x.IOAddress)).ToList();
			inputsDTO.DigitalInputs = _tagRepository.GetDigitalInputs().OrderBy(x => int.Parse(x.IOAddress)).ToList();
			return inputsDTO;
		}

		public OutputsDTO GetOutputs()
		{
			OutputsDTO outputsDTO = new OutputsDTO();
			outputsDTO.AnalogOutputs = _tagRepository.GetAnalogOutputs().OrderBy(x => int.Parse(x.IOAddress)).ToList();
			outputsDTO.DigitalOutputs = _tagRepository.GetDigitalOutputs().OrderBy(x => int.Parse(x.IOAddress)).ToList();
			return outputsDTO;
		}

		public Tag? GetByAddress(string address) {
			return _tagRepository.GetAll().Find(a => a.IOAddress == address);
		}

		public void MoveTag(MoveTagDTO tag)
		{
			Tag? newTag = _tagRepository.GetById(tag.Id);
			if (tag == null)
			{
				throw new Exception("Tag not found");
			}
			if (GetByAddress(tag.IOAddress) != null)
			{
				throw new Exception("Address is already in use");
			}
			newTag.IOAddress = tag.IOAddress;
			_tagRepository.MoveTag(newTag);
		}

		public void RemoveTag(int id)
		{
			Tag? tag = _tagRepository.GetById(id);
			if (tag == null)
			{
				throw new Exception("Tag not found");
			}
			_tagRepository.RemoveTag(tag);
		}

		public void ToggleScan(int id, bool on)
		{
			Tag? tag = _tagRepository.GetById(id);
			if(tag == null)
			{
				throw new Exception("Tag with this id doesn't exist");
			}
			_tagRepository.ToggleScan(tag, on);
			
		}

		public void StartThreads()
		{
			var inputs = _tagRepository.GetInputs();

			foreach (var input in inputs)
			{
				if (input is AnalogInput analog) { startAnalogThread(analog); }
				else if(input is DigitalInput digital) { startDigitalThread(digital); }
			}

		}

		private async void sendValue(InputsValue tagValue)
		{
			await _rtuHub.Clients.All.SendRTUData(tagValue);
		}

		private void startAnalogThread(AnalogInput analogInput)
		{
			new Thread(async () =>
			{
				Thread.CurrentThread.IsBackground = true;

				while (true)
				{
					using (var scope = _serviceScope.CreateScope())
					{
						if (analogInput.IsOn)
						{
							var repo = scope.ServiceProvider.GetRequiredService<ITagRepository>();
							InputsValue? value = await repo.GetTagValueByAddress(analogInput.IOAddress);
							if (value == null) { return; }
							sendValue(value);
							var alarmService = scope.ServiceProvider.GetRequiredService<IAlarmService>();
							checkAlarm(value, analogInput, alarmService);
						}
					}

					Thread.Sleep(TimeSpan.FromSeconds(analogInput.ScanTime));
				}
			}).Start();


		}

		private void checkAlarm(InputsValue tagValue, AnalogInput input, IAlarmService alarmService)
		{
			foreach(var alarm in input.Alarms)
			{
				Alarm a = alarmService.GetById(alarm.Id);
				if ((alarm.Type == AlarmType.LOW && alarm.Threshold >= tagValue.Value) || (alarm.Type == AlarmType.HIGH && alarm.Threshold <= tagValue.Value))
				{
					alarmService.AddAlarmValue(new AlarmValue(a), input);
				}
			}
		}

		private void startDigitalThread(DigitalInput digitalInput)
		{
			new Thread(async () =>
			{
				Thread.CurrentThread.IsBackground = true;
				while (true)
				{
					using (var scope = _serviceScope.CreateScope())
					{

						if (digitalInput.IsOn)
						{
							var repo = scope.ServiceProvider.GetRequiredService<ITagRepository>();
							InputsValue? value = await _tagRepository.GetTagValueByAddress(digitalInput.IOAddress);
							if (value == null) { return; }
							sendValue(value);

						}
					}
					Thread.Sleep(TimeSpan.FromSeconds(digitalInput.ScanTime));
				}
			}).Start();
		}

		public List<InputsValue> GetLastValues(ValueType v)
		{
			return _tagRepository.GetLastValues(v);
		}

		public List<object> GetValues(int id)
		{
			Tag? tag = _tagRepository.GetById(id);
			if(tag == null){
				return new List<object>();
			}
			if(tag is AnalogInput || tag is DigitalInput)
			{
				return _tagRepository.GetInputValues(id).Cast<object>().ToList();
				
			}return _tagRepository.GetOutputValues(id).Cast<object>().ToList();
		}

		public List<OutputsValue> GetOutputValues(DateTime start, DateTime end)
		{
			return _tagRepository.GetOutputValues(start, end);
		}

		public List<InputsValue> GetInputsValues(DateTime start, DateTime end)
		{
			return _tagRepository.GetInputsValues(start, end);
		}
	}
}
