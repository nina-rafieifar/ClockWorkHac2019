using Newtonsoft.Json;

namespace OutReach.Library.Models
{
	public class RegistrationModel
	{
		[JsonProperty("forename")]
		public string Forename { get; set; }
		
		[JsonProperty("surname")]
		public string Surname { get; set; }
		
		[JsonProperty("mobileNumber")]
		public string MobileNumber { get; set; }
		
		[JsonProperty("dateOfBirth")]
		public string DateOfBirth { get; set; }
		
		[JsonProperty("supportPersonName")]
		public string SupportPersonName { get; set; }
		
		[JsonProperty("supportPersonMobileNumber")]
		public string SupportPersonMobileNumber { get; set; }
		
		[JsonProperty("supportPersonRelationship")]
		public string SupportPersonRelationship { get; set; }
		
		[JsonProperty("medicationName")]
		public string MedicationName { get; set; }
		
		[JsonProperty("medicationFrequency")]
		public string MedicationFrequency { get; set; }
		
		[JsonProperty("medicationDosage")]
		public string MedicationDosage { get; set; }
		
		[JsonProperty("medicationForm")]
		public string MedicationForm { get; set; }
		
		[JsonProperty("medicationNotes")]
		public string MedicationNotes { get; set; }
		
		[JsonProperty("mobileVerified")]
		public bool MobileVerified { get; set; }
	}
}
