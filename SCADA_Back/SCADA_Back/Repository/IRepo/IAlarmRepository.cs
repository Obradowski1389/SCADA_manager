using SCADA_Back.Model;

namespace SCADA_Back.Repository.IRepo
{
    public interface IAlarmRepository
    {
        public void AddAlarm(Alarm alarm);
    }
}
