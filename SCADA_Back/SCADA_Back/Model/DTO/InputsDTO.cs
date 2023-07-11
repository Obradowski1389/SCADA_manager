using SCADA_Back.Model.Tags;

namespace SCADA_Back.Model.DTO
{
    public class InputsDTO
	{
		public List<AnalogInput> AnalogInputs { get; set; }
		public List<DigitalInput> DigitalInputs { get; set; }

		public InputsDTO() { }
	}
}
