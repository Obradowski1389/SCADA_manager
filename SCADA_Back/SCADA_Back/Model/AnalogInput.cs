using System.ComponentModel.DataAnnotations;

namespace SCADA_Back.Model
{
	public class AnalogInput
	{
		[Key]
		public int Id { get; set; }
		public string Name { get; set; }
		public string Driver { get; set; }
		public string IOAddress { get; set; }
		public double ScanTime { get; set; }
		public List<Alarm> Alarms { get; set; }
		public bool IsOn { get; set; }
		public double LowLimit { get; set; }
		public double HighLimit { get; set; }
		public string Units { get; set; }
	}
}
