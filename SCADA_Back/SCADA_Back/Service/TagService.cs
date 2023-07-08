using SCADA_Back.Model;
using SCADA_Back.Model.DTO;
using SCADA_Back.Repository.IRepo;
using SCADA_Back.Service.IService;

namespace SCADA_Back.Service
{
	public class TagService : ITagService
	{
		public readonly ITagRepository _tagRepository;

		public TagService(ITagRepository tagRepository)
		{
			_tagRepository = tagRepository;
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
		}
	}
}
