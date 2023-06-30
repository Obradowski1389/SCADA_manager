using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SCADA_Back.Model;
using SCADA_Back.Model.DTO;
using SCADA_Back.Service;

namespace SCADA_Back.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class UserController : ControllerBase
	{
		private readonly IUserService _userService;

		public UserController(IUserService userService)
		{
			_userService = userService;
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

		//[HttpPost]
		//public IActionResult Login([FromBody]LoginDTO loginDTO)
		//{

		//}
	}
}
