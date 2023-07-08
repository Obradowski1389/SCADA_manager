using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SCADA_Back.Model;
using SCADA_Back.Service.IService;

namespace SCADA_Back.Controllers
{
	[EnableCors]
	[Route("api/[controller]")]
	[ApiController]
	public class TagController : ControllerBase
	{
		private readonly ITagService _tagService;
		private readonly IAlarmService _alarmService;

		public TagController(ITagService tagService, IAlarmService alarmService)
		{
			_tagService = tagService;
			_alarmService = alarmService;
		}

		[HttpGet("input")]
		public IActionResult GetInputs()
		{
			return Ok(_tagService.GetInputs());
		}

		[HttpGet("output")]
		public IActionResult GetOutputs()
		{
			return Ok(_tagService.GetOutputs());
		}

		[IgnoreAntiforgeryToken]
		[HttpPost("analog-input")]
		public IActionResult AddAnalogInput([FromBody] AnalogInput input)
		{
			try
			{
				_tagService.AddAnalogInput(input);
				return Ok();

			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[IgnoreAntiforgeryToken]
		[HttpPost("analog-output")]
		public IActionResult AddAnalogOutput([FromBody] AnalogOutput output)
		{
			try
			{
				_tagService.AddAnalogOutput(output);
				return Ok();

			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[IgnoreAntiforgeryToken]
		[HttpPost("digital-input")]
		public IActionResult AddDigitalInput([FromBody] DigitalInput input)
		{
			try
			{
				_tagService.AddDigitalInput(input);
				return Ok();


			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[IgnoreAntiforgeryToken]
		[HttpPost("digital-output")]
		public IActionResult AddDigitalOutput([FromBody] DigitalOutput output)
		{
			try
			{
				_tagService.AddDigitalOutput(output);
				return Ok();

			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[IgnoreAntiforgeryToken]
		[HttpPut("on/{id}")]
		public IActionResult TurnScanOn(int id)
		{
			try
			{
				_tagService.ToggleScan(id, true);
				return Ok();
			}catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
			
		}

		[IgnoreAntiforgeryToken]
		[HttpPut("off/{id}")]
		public IActionResult TurnScanOff(int id)
		{
			try
			{
				_tagService.ToggleScan(id, false);
				return Ok();
			}catch(Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[IgnoreAntiforgeryToken]
		[HttpPost("alarm")]
		public IActionResult AddAlarm([FromBody]Alarm alarm)
		{
			try
			{
				_alarmService.AddAlarm(alarm);
				return Ok();
			}catch(Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[IgnoreAntiforgeryToken]
		[HttpPost("simulation")]
		public IActionResult StartSimulation()
		{
			_tagService.StartSimulation();
			return Ok();
		}

	}
}
