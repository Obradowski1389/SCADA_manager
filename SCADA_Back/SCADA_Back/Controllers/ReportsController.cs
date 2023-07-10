using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SCADA_Back.Service.IService;

namespace SCADA_Back.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ReportsController : ControllerBase
	{
		private readonly IReportService _reportService;

		public ReportsController(IReportService reportService) {
			_reportService = reportService;
		}

		// Svi alarmi koji su se desili u određenom vremenskom periodu
		[HttpGet("alarm/time")]
		public IActionResult GetTimeAlarmReport(DateTime start, DateTime end) 
		{
			try
			{
				var values = _reportService.GetAlarmsByDate(start, end);
				return Ok(values);
			}catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		// Svi alarmi određenog prioriteta
		[HttpGet("alarm/priority")]
		public IActionResult GetPriorityAlarmReport(int priority)
		{
			return Ok(_reportService.GetAlarmsByPriority(priority));
		}

		// Sve vrednosti tagova koje su dospele na servis u određenom vremenskom periodu
		[HttpGet]
		public IActionResult GetAll(DateTime start, DateTime end)
		{
			try
			{
				var result = _reportService.GetAll(start, end);
				return Ok(result);
			}catch(Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		// Poslednja vrednost svih AI tagova
		[HttpGet("analog")]
		public IActionResult GetLastAnalogValues()
		{
			return Ok(_reportService.GetLastValues(Model.Tags.ValueType.ANALOG));
		}

		//Poslednja vrednost svih DI tagova
		[HttpGet("digital")]
		public IActionResult GetLastDigitalValues()
		{
			return Ok(_reportService.GetLastValues(Model.Tags.ValueType.DIGITAL));
		}

		//Sve vrednosti taga sa određenim identifikatorom
		[HttpGet("{id}")]
		public IActionResult GetTagValues(int id) { 
			return Ok(_reportService.GetValues(id));
		}
	}
}
