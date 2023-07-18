using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SCADA_Back.Model;
using SCADA_Back.Model.DTO;
using SCADA_Back.Service.IService;

namespace SCADA_Back.Controllers
{
    [EnableCors]
	[Route("api/[controller]")]
	[ApiController]
	public class UserController : ControllerBase
	{
		private readonly IUserService _userService;
		private readonly ITagService _tagService;

		public UserController(IUserService userService, ITagService tagService)
		{
			_userService = userService;
			_tagService = tagService;
		}

		[HttpGet("{id}")]
		public IActionResult GetUser(int id)
		{
			User user = _userService.GetUser(id);
			if(user == null)
			{
				return NotFound();
			}
			return Ok(user);
		}

		[IgnoreAntiforgeryToken] // TODO replace with actual anti-forgery token
		[HttpPost]
		public IActionResult AddUser([FromBody]User user)
		{
			try
			{
				_userService.AddUser(user);
				return Ok();
			}catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}


		[IgnoreAntiforgeryToken] // TODO replace with actual anti-forgery token
		[HttpPost("admin")]
		public IActionResult AddAdmin([FromBody] User user)
		{
			try
			{
				_userService.AddAdmin(user);
				return Ok();
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[IgnoreAntiforgeryToken]
		[HttpPost("login")]
		public IActionResult Login([FromBody] LoginDTO loginDTO)
		{
			Console.WriteLine(loginDTO);
			User? user = _userService.Login(loginDTO);
			if(user == null)
			{
				return BadRequest("Incorrect Username or Password");
			}
			_tagService.StartThreads();
			return Ok(user);
		}
	}
}
