using SCADA_Back.Model;
using SCADA_Back.Model.Tags;

namespace SCADA_Back.Service.IService
{
	public interface IAlarmService
	{
		public Alarm GetById(int id);
		public void AddAlarm(Alarm alarm);
		public void RemoveAlarm(int id);
		public void AddAlarmValue(AlarmValue alarmValue, AnalogInput input);
	}
}
