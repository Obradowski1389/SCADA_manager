using SCADA_Back.Model;

namespace SCADA_Back.Repository.IRepo
{
    public interface IAlarmRepository
    {
        public Alarm GetById(int id);
        public void AddAlarm(Alarm alarm);
        public void AddAlarmValue(AlarmValue alarmValue);
    }
}
