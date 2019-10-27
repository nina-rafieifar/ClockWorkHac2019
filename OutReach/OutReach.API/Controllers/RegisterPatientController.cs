using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using OutReach.API.Models;
using OutReach.API.Tools;
using OutReach.Library.Models;

namespace OutReach.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterPatientController : ControllerBase
    {
		[HttpPost]
		public IActionResult registerPatient()
		{
			using (var reader = new StreamReader(Request.Body))
			{
				var json = reader.ReadToEnd();
				var registrationDetails = JsonConvert.DeserializeObject<RegistrationModel>(json);

				if (registrationDetails != null)
				{

					//var clockWorkUtility = new ClockWorkUtiliity();
					//clockWorkUtility.sendMessage(contactDetails.PhoneNumber, "You have received this message to confirm your phone number. Please text OPTIN or OPTOUT?");
				}
			}

			return Ok(true);
		}

		//[HttpGet("{phoneNumber}"]
		//public JsonResult getPatient(string phoneNumber)
		//{
		//	var registration = new RegistrationModel
		//	{
		//		Forename = "Conrad",
		//		Surname = "Hodge",
		//		MobileNumber = "44346346346",
		//		DateOfBirth = "2019-10-01",

		//	}

		//}
    }
}