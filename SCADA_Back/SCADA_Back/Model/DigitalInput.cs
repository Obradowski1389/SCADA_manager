using System.ComponentModel.DataAnnotations;

namespace SCADA_Back.Model
{
	public class DigitalInput : Tag
	{
		public string DriverFunction { get; set; }
		public double ScanTime { get; set; }
		public bool IsOn { get; set; }
	}
}
