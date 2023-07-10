using SCADA_Back.Model.DTO;
using SCADA_Back.Model.Tags;
using ValueType = SCADA_Back.Model.Tags.ValueType;

namespace SCADA_Back.Service.IService
{
    public interface ITagService
	{
		//public void StartSimulation();
		public InputsDTO GetInputs();
		public OutputsDTO GetOutputs();

		public void AddAnalogInput(AnalogInput input);
		public void AddAnalogOutput(AnalogOutput output);
		public void AddDigitalInput(DigitalInput input);
		public void AddDigitalOutput(DigitalOutput output);
		public void AddOutputValue(OutputValueDTO dto);
		public Tag? GetByAddress(string address);
		public void MoveTag(MoveTagDTO moveTagDTO);
		public void RemoveTag(int id);
		public void ToggleScan(int id, bool on);
		public void StartThreads();
		public List<InputsValue> GetLastValues(ValueType valueType);
		public List<object> GetValues(int id);
		public List<OutputsValue> GetOutputValues(DateTime start, DateTime end);
		public List<InputsValue> GetInputsValues(DateTime start, DateTime end);
	}
}
