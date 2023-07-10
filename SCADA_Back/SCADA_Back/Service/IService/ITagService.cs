using SCADA_Back.Model.DTO;
using SCADA_Back.Model.Tags;

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
		public void MoveTag(MoveTagDTO moveTagDTO);
		public void RemoveTag(int id);
		public void ToggleScan(int id, bool on);
		public void StartThreads();
	}
}
