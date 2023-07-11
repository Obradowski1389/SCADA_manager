using SCADA_Back.Model.Tags;

namespace SCADA_Back.Model.DTO
{
	public class OutputsDTO
	{
		public List<AnalogOutput> AnalogOutputs { get; set; }
		public List<DigitalOutput> DigitalOutputs { get; set; }

		public OutputsDTO() { }
	}
}
