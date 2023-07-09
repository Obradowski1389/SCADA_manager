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
	}
}
