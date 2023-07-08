using SCADA_Back.Model;
using SCADA_Back.Model.DTO;
using SCADA_Back.Repository.IRepo;
using SCADA_Back.Service.IService;
using Driver = SimulationDriver.SimulationDriver;

namespace SCADA_Back.Service
{
	public class TagService : ITagService
	{
		private readonly ITagRepository _tagRepository;
		private readonly Dictionary<int, Timer> scanTimers;
		private readonly Driver Driver;

		public TagService(ITagRepository tagRepository)
		{
			_tagRepository = tagRepository;
			scanTimers = new Dictionary<int, Timer>();
			Driver = new Driver();
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
			inputsDTO.AnalogInputs = _tagRepository.GetAnalogInputs();
			inputsDTO.DigitalInputs = _tagRepository.GetDigitalInputs();
			return inputsDTO;
		}

		public List<Tag> GetOutputs()
		{
			throw new NotImplementedException();
		}

		public Tag? GetByAddress(string address) {
			return _tagRepository.GetAll().Find(a => a.IOAddress == address);
		}

		public void ToggleScan(int id, bool on)
		{
			Tag? tag = _tagRepository.GetById(id);
			if(tag == null)
			{
				throw new Exception("Tag with this id doesn't exist");
			}
			_tagRepository.ToggleScan(tag, on);
			if (on) { StartScanning(tag); }
			else { StopScanning(tag); }
		}

		private void _startTimerAnalog(AnalogInput analogInput)
		{
			Timer scanTimer = new Timer(state =>
			{
				double val;
				switch (analogInput.DriverFunction)
				{
					case "sin":
						val = Driver.Sin();
						break;
					case "cos":
						val = Driver.Cos();
						break;
					default:
						val = 0;
						break;
				}
				_sendValue(analogInput.Id, val);
			}, null, TimeSpan.Zero, TimeSpan.FromSeconds(analogInput.ScanTime));
			scanTimers[analogInput.Id] = scanTimer;
		}

		private void _startTimerDigital(DigitalInput digitalInput)
		{
			Timer scanTimer = new Timer(state =>
			{
				double val;
				switch (digitalInput.DriverFunction)
				{
					case "sin":
						val = Driver.Sin() >= 0 ? 1 : 0;
						break;
					case "cos":
						val = Driver.Cos() >= 0 ? 1 : 0;
						break;
					default:
						val = 0;
						break;
				}
				_sendValue(digitalInput.Id, val);
			}, null, TimeSpan.Zero, TimeSpan.FromSeconds(digitalInput.ScanTime));
			scanTimers[digitalInput.Id] = scanTimer;
		}

		private void _sendValue(int tagId, double val)
		{
			Console.WriteLine(tagId + " : " + val);
		}

		public void StartScanning(Tag tag)
		{
			if (scanTimers.ContainsKey(tag.Id)) { return; }
			if(tag is AnalogInput)
			{
				_startTimerAnalog((AnalogInput)tag);
			}else if(tag is DigitalInput)
			{
				_startTimerDigital((DigitalInput)tag);
			}
			
		}

		public void StopScanning(Tag tag) {
			if (scanTimers.TryGetValue(tag.Id, out Timer scanTimer))
			{
				scanTimer.Dispose();
				scanTimers.Remove(tag.Id);
			}
		}
	}
}
