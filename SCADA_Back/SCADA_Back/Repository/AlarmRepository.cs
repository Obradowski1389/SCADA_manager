using SCADA_Back.Context;
using SCADA_Back.Model;
using SCADA_Back.Model.Tags;
using SCADA_Back.Repository.IRepo;

namespace SCADA_Back.Repository
{
	public class AlarmRepository : IAlarmRepository
	{
		private readonly SCADA_Context _context;
		private readonly ITagRepository _tagRepository;
		public AlarmRepository(SCADA_Context context, ITagRepository tagRepository)
		{
			_context = context;
			_tagRepository = tagRepository;
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

		public void RemoveAlarm(Alarm alarm)
		{
			Tag? tag = _tagRepository.GetById(alarm.AnalogInputId);
			if(tag != null)
			{
				var analog = (AnalogInput)tag;
				analog.Alarms.Remove(alarm);
			}
			_context.Entry(alarm).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
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
