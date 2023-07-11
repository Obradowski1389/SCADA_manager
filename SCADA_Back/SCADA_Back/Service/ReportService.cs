using SCADA_Back.Model;
using SCADA_Back.Model.DTO;
using SCADA_Back.Model.Tags;
using SCADA_Back.Service.IService;

namespace SCADA_Back.Service
{
	public class ReportService : IReportService
	{
		private readonly IAlarmService _alarmService;
		private readonly ITagService _tagService;

		public ReportService(IAlarmService alarmService, ITagService tagService) {
			_alarmService = alarmService;
			_tagService = tagService;
		}

		public List<AlarmValue> GetAlarmsByDate(DateTime start, DateTime end)
		{
			if(start >= end)
			{
				throw new Exception("Start date cannot be after end date");
			}
			return _alarmService.GetAlarmValuesByDate(start, end);
		}

		public List<AlarmValue> GetAlarmsByPriority(int priority)
		{
			return _alarmService.GetAlarmsByPriority(priority);
		}

		public ReportDTO GetAll(DateTime start, DateTime end)
		{
			if (start >= end)
			{
				throw new Exception("Start date cannot be after end date");
			}
			var dto = new ReportDTO();
			dto.InputsValues = _tagService.GetInputsValues(start, end);
			dto.OutputsValues = _tagService.GetOutputValues(start, end);

			return dto;
		}

		public List<InputsValue> GetLastValues(Model.Tags.ValueType valueType)
		{
			return _tagService.GetLastValues(valueType);
		}

		public List<object> GetValues(int id)
		{
			return _tagService.GetValues(id);
		}
	}
}
