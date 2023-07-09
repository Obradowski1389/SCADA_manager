namespace SCADA_Back.Model.DTO
{
	public class SimulationDataDTO
	{
		public string Address { get; set; }
		public double Value { get; set; }

		public SimulationDataDTO(string address, double value)
		{
			Address = address;
			Value = value;
		}
	}
}
