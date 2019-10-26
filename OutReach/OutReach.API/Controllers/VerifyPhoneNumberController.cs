using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using OutReach.API.Models;

namespace OutReach.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class VerifyPhoneNumber : ControllerBase
    {
		// https://www.jerriepelser.com/blog/deserialize-different-json-object-same-class/
		/// <summary>
		/// Validates phone number. The details are passed via the body of the message.
		/// </summary>
		/// <returns></returns>
		[HttpGet]
		public IActionResult validate()
		{
			using (var reader = new StreamReader(Request.Body))
			{
				var json = reader.ReadToEnd();
				var contactDetails = (JObject)JsonConvert.DeserializeObject(json);

				if(contactDetails != null)
				{
					var details = contactDetails.GetEnumerator();

					//do
					//{
					//	details.Current.Value;
					//}
				}
			}
			return Ok(true);
		}
	}
}