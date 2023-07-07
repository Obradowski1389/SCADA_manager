namespace SCADA_Back.Model
{
	public abstract class Tag
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string IOAddress { get; set; }

	}
}
