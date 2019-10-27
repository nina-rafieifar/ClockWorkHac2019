using System;

namespace OutReach.API.Models
{
	public class Person
	{
		public string Forename { get; set; }
		public string Surname { get; set; }
		public string MobilePhoneNumber { get; set; }
	}

	public class Patient : Person
	{
		public DateTime DateOfBirth { get; set; }
	}

	public class SupportNetworkContact : Person
	{
		public string Relationship { get; set; }
	}

	public class PatientProfile
	{
		public Patient Patient { get; set; }
	}

}
