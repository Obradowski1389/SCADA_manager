using SCADA_Back.Model.Tags;

namespace SCADA_Back.Model.DTO
{
	public class ReportDTO
	{
		public List<InputsValue> InputsValues { get; set; } = new List<InputsValue>();
		public List<OutputsValue> OutputsValues { get; set; } = new List<OutputsValue>();

		public ReportDTO() { }
	}
}
