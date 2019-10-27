using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OutReach.Libary.Models
{
	public class VerifyContactNumberModel
	{
		[JsonProperty("forename")]
		public string Forename { get; set; }
		[JsonProperty("surname")]
		public string Surname { get; set; }
		[JsonProperty("phoneNumber")]
		public string PhoneNumber { get; set; }

	}
}
