using Microsoft.AspNetCore.SignalR;
using SCADA_Back.Model;
using SCADA_Back.Model.DTO;
using SCADA_Back.Model.Tags;
using SCADA_Back.Repository.IRepo;
using SCADA_Back.Service.IService;
using SCADA_Back.Utility.Hubs;
using System.ComponentModel;

namespace SCADA_Back.Service
{
    public class TagService : ITagService
	{
		private readonly ITagRepository _tagRepository;
		private readonly IHubContext<RTUHub, IRTUClient> _rtuHub;
		private readonly IServiceScopeFactory _serviceScope;


		public TagService(ITagRepository tagRepository, IHubContext<RTUHub, IRTUClient> hub, IServiceScopeFactory serviceScope)
		{
			_tagRepository = tagRepository;
			_rtuHub = hub;
			_serviceScope = serviceScope;
		}

		public void AddAnalogInput(AnalogInput input)
		{
			if(GetByAddress(input.IOAddress) != null)
			{
				throw new Exception("This Address is already taken");
			}
			_tagRepository.AddAnalogInput(input);
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

		public InputsDTO GetInputs()
		{
			InputsDTO inputsDTO = new InputsDTO();
			inputsDTO.AnalogInputs = _tagRepository.GetAnalogInputs().OrderBy(x => int.Parse(x.IOAddress)).ToList();
			inputsDTO.DigitalInputs = _tagRepository.GetDigitalInputs().OrderBy(x => int.Parse(x.IOAddress)).ToList();
			return inputsDTO;
		}

		public List<Tag> GetOutputs()
		{
			throw new NotImplementedException();
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

		private async void sendValue(TagValue tagValue)
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
							TagValue? value = await repo.GetTagValueByAddress(analogInput.IOAddress);
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

		private void checkAlarm(TagValue tagValue, AnalogInput input, IAlarmService alarmService)
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
							TagValue? value = await _tagRepository.GetTagValueByAddress(digitalInput.IOAddress);
							if (value == null) { return; }
							sendValue(value);

						}
					}
					Thread.Sleep(TimeSpan.FromSeconds(digitalInput.ScanTime));
				}
			}).Start();
		}
	}
}
