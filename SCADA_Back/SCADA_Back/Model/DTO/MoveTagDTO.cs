namespace SCADA_Back.Model.DTO
{
	public class MoveTagDTO
	{
		public int Id { get; set; }
		public string IOAddress { get; set; }

		public MoveTagDTO() { }
		public MoveTagDTO(int id, string ioAddress)
		{
			Id = id;
			IOAddress = ioAddress;
		}
	}
}
