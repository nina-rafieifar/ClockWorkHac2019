using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace OutReach.API.Tools
{
	public class PatientFileUtility
	{
		private void SavePatientConsent(string phoneNumber, string forename, string surname)
		{
			var filePath = $"\\Data\\{phoneNumber}.json";

			using(var fileStream = new StreamWriter(filePath, true))
			{

			}
		}
	}
}
