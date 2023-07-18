using SCADA_Back.Model;
using SCADA_Back.Model.DTO;
using SCADA_Back.Model.Tags;
using ValueType = SCADA_Back.Model.Tags.ValueType;

namespace SCADA_Back.Service.IService
{
	public interface IReportService
	{
		public List<AlarmValue> GetAlarmsByDate(DateTime start, DateTime end);
		public List<AlarmValue> GetAlarmsByPriority(int priority);
		public List<InputsValue> GetLastValues(ValueType v);
		public List<object> GetValues(int id);
		public ReportDTO GetAll(DateTime start, DateTime end);

	}
}
