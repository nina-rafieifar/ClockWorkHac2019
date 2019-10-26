using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OutReach.API.Tools;

namespace OutReach.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class PhoneNumberConfirmedController : Controller
    {
		[HttpGet]
		public IActionResult receiveMessage(string id, string to, string from, string keyword, string content)
		{
			var message = "";

			switch(keyword.ToLower())
			{
				case "optin":
					message = "Welcome - you have made the right choice!";
					break;
				case "optout":
					message = "You have opted out! GOOD BYE!";
					break;
			}

			return Ok(message);
		}
	}
}