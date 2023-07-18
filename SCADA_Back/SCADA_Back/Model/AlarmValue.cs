using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace SCADA_Back.Model
{
	public class AlarmValue
	{
		[Key]
		public int Id { get; set; }
		public DateTime TimeStamp { get; set; }
		public Alarm Alarm { get; set; }
		public int AlarmId { get; set; }

		public AlarmValue() { }
		public AlarmValue(Alarm alarm)
		{
			TimeStamp = DateTime.Now;
			Alarm = alarm;
			AlarmId = alarm.Id;
		}
	}
}
