using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace OutReach.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
		[HttpPost]
		public IActionResult registerPatient()
		{
			//using (var reader = new StreamReader(Request.Body))
			//{
			//	var json = reader.ReadToEnd();
			//	var contactDetails = JsonConvert.DeserializeObject<VerifyContactNumberModel>(json);

			//	if (contactDetails != null)
			//	{
			//		var clockWorkUtility = new ClockWorkUtiliity();
			//		clockWorkUtility.sendMessage(contactDetails.PhoneNumber, "You have received this message to confirm your phone number. Please text OPTIN or OPTOUT?");
			//	}
			//}

			return Ok(true);
		}
    }
}