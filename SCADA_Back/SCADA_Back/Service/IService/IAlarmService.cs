using SCADA_Back.Model;

namespace SCADA_Back.Service.IService
{
	public interface IAlarmService
	{
		public void AddAlarm(Alarm alarm);
	}
}
