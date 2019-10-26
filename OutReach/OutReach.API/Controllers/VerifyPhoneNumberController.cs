using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using OutReach.API.Models;

namespace OutReach.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class VerifyPhoneNumber : ControllerBase
    {
		/// <summary>
		/// Validates phone number. The details are passed via the body of the message.
		/// </summary>
		/// <returns></returns>
		[HttpGet]
		public IActionResult validate()
		{
			//using (var reader = new StreamReader(Request.Body))
			//{
			//	var json = JsonSerializer.Create();
			//	var contactDetails = json.Deserialize(JsonReader(json.ReadToEnd());
			//}
			return Ok(true);
		}

		//[HttpGet()]
		//public IEnumerable<PatientProfile> GetPatients()
		//{
		//	return (
		//		new List<PatientProfile>()
		//		{
		//			new PatientProfile()
		//			{
		//				Patient = new Patient { Forename= "Alber", Surname = "Einstein", DateOfBirth = new DateTime(1950,1,1) }
		//			}
		//		}
		//	);
		//}
	}
}