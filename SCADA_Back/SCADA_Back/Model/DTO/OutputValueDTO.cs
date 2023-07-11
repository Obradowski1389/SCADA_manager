namespace SCADA_Back.Model.DTO
{
	public class OutputValueDTO
	{
		public string IOAddress { get; set; }
		public double Value { get; set; }

		public OutputValueDTO() { }
		public OutputValueDTO(string ioAddress, double value)
		{
			IOAddress = ioAddress;
			Value = value;
		}
	}
}
