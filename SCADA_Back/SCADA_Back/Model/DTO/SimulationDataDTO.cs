namespace SCADA_Back.Model.DTO
{
	public class SimulationDataDTO
	{
		public int Id { get; set; }
		public double Value { get; set; }

		public SimulationDataDTO(int id, double value)
		{
			Id = id;
			Value = value;
		}
	}
}
