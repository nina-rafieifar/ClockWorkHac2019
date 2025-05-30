﻿using System.IO;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using OutReach.API.Tools;
using OutReach.Libary.Models;
using OutReach.Library.Models;

namespace OutReach.API.Controllers {
	[Route("api/[controller]")]
	[ApiController]
	public class VerifyPhoneNumberController : ControllerBase {
		// https://www.jerriepelser.com/blog/deserialize-different-json-object-same-class/
		/// <summary>
		/// Validates phone number. The details are passed via the body of the message.
		/// </summary>
		/// <returns></returns>
		[HttpPost]
		public IActionResult validate() {
			var clockworkMessage = "";

			using(var reader = new StreamReader(Request.Body)) {
				var json = reader.ReadToEnd();
				var contactDetails = JsonConvert.DeserializeObject<VerifyContactNumberModel>(json);

				// create a full registration model then populate this with the inforation we have right now.
				RegistrationModel regModel = new RegistrationModel
				{
					Forename = contactDetails.Forename,
					Surname = contactDetails.Surname,
					MobileNumber = contactDetails.PhoneNumber
				};

				if (contactDetails != null) {
					var clockWorkUtility = new ClockWorkUtiliity();
					clockworkMessage = clockWorkUtility.sendMessage(contactDetails.PhoneNumber, "You have received this message to confirm your phone number. Please text MOBILE OK or MOBILE WRONG?");
					PatientFileUtility utility = new PatientFileUtility(regModel);
				}
			}
			return Ok(clockworkMessage);
		}
	}
}