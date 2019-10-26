using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OutReach.API.Models;

namespace OutReach.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class PatientController : ControllerBase
    {
		[HttpGet]
        public ContentResult Index()
        {
            return Content("You've reached the OutReach API.");
        }

		[HttpGet("{phoneNumber}")]
		public IActionResult ValidatePhoneNumber(string phoneNumber)
		{
			return Ok(phoneNumber + " is valid");
		}
   }
}