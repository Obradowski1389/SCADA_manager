using SCADA_Back.Model;
using SCADA_Back.Model.Tags;
using SCADA_Back.Repository;
using SCADA_Back.Repository.IRepo;
using SCADA_Back.Service.IService;

namespace SCADA_Back.Service
{
    public class AlarmService : IAlarmService
	{
		private readonly IAlarmRepository _alarmRepository;
		private readonly ITagRepository _tagRepository;

		public AlarmService(IAlarmRepository alarmRepository, ITagRepository tagRepository)
		{
			_alarmRepository = alarmRepository;
			_tagRepository = tagRepository;
		}

		public Alarm GetById(int id)
		{
			return _alarmRepository.GetById(id);
		}

		public void AddAlarm(Alarm alarm)
		{
			Tag? tag = _tagRepository.GetById(alarm.AnalogInputId);
			if (tag == null)
			{
				throw new Exception("Tag with this id doesn't exist");
			}
			alarm.AnalogInput = (AnalogInput)tag;
			_alarmRepository.AddAlarm(alarm);
		}

		public void AddAlarmValue(AlarmValue alarmValue, AnalogInput analogInput)
		{
			_alarmRepository.AddAlarmValue(alarmValue);
			LogAlarm(alarmValue, analogInput);
		}

		private void LogAlarm(AlarmValue alarmValue, AnalogInput analogInput)
		{
			string fName = "Logs/alarmLog.txt";
			using(StreamWriter writer = new StreamWriter(fName))
			{
				writer.WriteLine("{0}   Alarm for input: {1}    Priority: {2}    Type: {3} ", alarmValue.TimeStamp ,analogInput.Name, alarmValue.Alarm.Priority, alarmValue.Alarm.Type);
			}
		}
	}
}
