using System.ComponentModel.DataAnnotations;

namespace SCADA_Back.Model
{
	public enum AlarmType
	{
		LOW, MEDIUM, HIGH
	}

	public class Alarm
	{
		[Key]
		public int Id { get; set; }
		public double Threshold { get; set; }
		public AlarmType Type { get; set; }
		public int Priority { get; set; }
		public DateTime TimeStamp { get; set; }
		public AnalogInput AnalogInput { get; set; }
		public int AnalogInputId { get; set; }

	}
}
