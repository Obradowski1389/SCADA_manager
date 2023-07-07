using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SCADA_Back.Service.IService;

namespace SCADA_Back.Controllers
{
	[EnableCors]
	[Route("api/[controller]")]
	[ApiController]
	public class TagController : ControllerBase
	{
		private readonly ITagService _tagService;

		public TagController(ITagService tagService)
		{
			_tagService = tagService;
		}

		public IActionResult GetAnalogInputs()
		{

		}
	}
}
