using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace OutReach.API.Controllers
{
    public class ReceivePatientConfirmationController : Controller
    {
		[HttpPost]
		public IActionResult receiveMessage(string id, string to, string from, string keyword, string content)
		{
			return Ok(id);
		}
	}
}