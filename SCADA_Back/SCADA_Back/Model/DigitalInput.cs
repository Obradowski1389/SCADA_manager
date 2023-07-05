using System.ComponentModel.DataAnnotations;

namespace SCADA_Back.Model
{
	public class DigitalInput
	{
		[Key]
		public int Id { get; set; }
		public string Name { get; set; }
		public string Driver { get; set; }
		public string IOAddress { get; set; }
		public double ScanTime { get; set; }
		public bool IsOn { get; set; }
	}
}
