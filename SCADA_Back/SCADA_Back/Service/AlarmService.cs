using SCADA_Back.Model;
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
	}
}
