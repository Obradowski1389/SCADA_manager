using System.ComponentModel.DataAnnotations;

namespace SCADA_Back.Model
{
	public class DigitalOutput
	{
		[Key]
		public int Id { get; set; }
		public string Name { get; set; }
		public string IOAddress { get; set; }
		public int InitialValue { get; set; }
	}
}
