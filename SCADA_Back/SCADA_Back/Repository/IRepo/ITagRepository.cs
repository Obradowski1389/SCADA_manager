using SCADA_Back.Model;
using SCADA_Back.Model.DTO;

namespace SCADA_Back.Repository.IRepo
{
    public interface ITagRepository
    {
		public List<Tag> GetAll();
		public Tag? GetById(int id);
		public List<AnalogInput> GetAnalogInputs();
		public List<AnalogOutput> GetAnalogOutputs();
		public List<DigitalInput> GetDigitalInputs();
		public List<DigitalOutput> GetDigitalOutputs();

		public List<Tag> GetInputs();
		//public List<Tag> GetOutputs();

		public void AddAnalogInput(AnalogInput analogInput);
		public void AddAnalogOutput(AnalogOutput analogOutput);
		public void AddDigitalInput(DigitalInput digitalInput);
		public void AddDigitalOutput(DigitalOutput digitalOutput);
		public void ToggleScan(Tag tag, bool on);
	}
}
