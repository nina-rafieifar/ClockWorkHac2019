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
    public class PatientRegistrationController : ControllerBase
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

					var patientRecord = PatientFileUtility.GetPatient(registrationDetails.MobileNumber);

					// update the patient details...
					patientRecord.DateOfBirth = registrationDetails.DateOfBirth;
					patientRecord.SupportPersonName = registrationDetails.SupportPersonName;
					patientRecord.SupportPersonRelationship = registrationDetails.SupportPersonRelationship;
					patientRecord.SupportPersonMobileNumber = registrationDetails.SupportPersonMobileNumber;
					patientRecord.MedicationName = registrationDetails.MedicationName;
					patientRecord.MedicationDosage = registrationDetails.MedicationDosage;
					patientRecord.MedicationForm = registrationDetails.MedicationForm;
					patientRecord.MedicationFrequency = registrationDetails.MedicationFrequency;
					patientRecord.MedicationNotes = registrationDetails.MedicationNotes;
					
					PatientFileUtility.SavePatientConsent(patientRecord);

					var clockWorkUtility = new ClockWorkUtiliity();
					var resultMessage = clockWorkUtility.sendMessage(registrationDetails.MobileNumber, "You have agreed an OutReach care plan. To confirm you consent, please reply to this message with either CONSENT Yes or CONSENT No.");
				}
			}

			return Ok(true);
		}

		[HttpGet]
		public IActionResult getPatient(string mobilePhoneNumber)
		{
			//var registration = new RegistrationModel
			//{
			//	Forename = "Conrad",
			//	Surname = "Hodge",
			//	MobileNumber = "447971670708",
			//	DateOfBirth = "2019-10-01",
			//	SupportPersonName = "Bob",
			//	SupportPersonRelationship = "Relative",
			//	SupportPersonMobileNumber = "441257233456",
			//	MedicationName = "Paracetamol",
			//	MedicationFrequency = "Daily",
			//	MedicationForm = "Tablet",
			//	MedicationDosage = "500mg",
			//	MedicationNotes = "Take when required"
			//};
			//var registrationJson = JsonConvert.SerializeObject(registration);

			//if(mobilePhoneNumber == registration.MobileNumber)
			//{
			//	return Ok(registrationJson);
			//} else
			//{
			//	return NotFound();
			//}
			var patientInfo = PatientFileUtility.GetPatient(mobilePhoneNumber);

			if (patientInfo != null)
			{
				return Ok(patientInfo);

			} else
			{
				return NotFound();
			}
		}
	}
}