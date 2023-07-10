using SCADA_Back.Model.DTO;
using SCADA_Back.Model.Tags;

namespace SCADA_Back.Repository.IRepo
{
    public interface ITagRepository
    {
		public List<Tag> GetAll();
		public Task<List<Tag>> GetInputsAsync();
		public Tag? GetById(int id);
		public List<AnalogInput> GetAnalogInputs();
		public List<AnalogOutput> GetAnalogOutputs();
		public List<DigitalInput> GetDigitalInputs();
		public List<DigitalOutput> GetDigitalOutputs();

		public List<Tag> GetInputs();
		public Task<Tag?> GetInputByAddress(string address);

		public void AddAnalogInput(AnalogInput analogInput);
		public void AddAnalogOutput(AnalogOutput analogOutput);
		public void AddDigitalInput(DigitalInput digitalInput);
		public void AddDigitalOutput(DigitalOutput digitalOutput);
		public void MoveTag(Tag tag);
		public void RemoveTag(Tag tag);
		public void ToggleScan(Tag tag, bool on);

		public void AddTagValue(InputsValue tagValue);
		public Task<InputsValue?> GetTagValueByAddress(string address);

		public void AddOutputValue(OutputsValue outputValue);
	}
}
