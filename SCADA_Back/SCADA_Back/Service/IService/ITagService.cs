using SCADA_Back.Model;
using SCADA_Back.Model.DTO;

namespace SCADA_Back.Service.IService
{
	public interface ITagService
	{
		//public void StartSimulation();
		public InputsDTO GetInputs();
		public List<Tag> GetOutputs();

		public void AddAnalogInput(AnalogInput input);
		public void AddAnalogOutput(AnalogOutput output);
		public void AddDigitalInput(DigitalInput input);
		public void AddDigitalOutput(DigitalOutput output);
		public Tag? GetByAddress(string address);
		public void ToggleScan(int id, bool on);

	}
}
