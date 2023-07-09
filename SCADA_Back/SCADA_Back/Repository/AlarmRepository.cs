using SCADA_Back.Context;
using SCADA_Back.Model;
using SCADA_Back.Repository.IRepo;

namespace SCADA_Back.Repository
{
	public class AlarmRepository : IAlarmRepository
	{
		private readonly SCADA_Context _context;
		public AlarmRepository(SCADA_Context context) {
			_context = context;
		}

		public Alarm GetById(int id)
		{
			return _context.Alarms.First(a => a.Id == id);
		}

		public void AddAlarm(Alarm alarm)
		{
			_context.Alarms.Add(alarm);
			_context.Attach(alarm.AnalogInput);
			_context.SaveChanges();
		}

		public void AddAlarmValue(AlarmValue alarmValue)
		{
			_context.AlarmsValue.Add(alarmValue);
			_context.Attach(alarmValue.Alarm);
			_context.SaveChanges();
		}
	}
}
