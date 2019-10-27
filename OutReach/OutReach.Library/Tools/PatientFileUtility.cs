using System;
using System.IO;
using System.Threading.Tasks;
using System.Web;
using Newtonsoft.Json;

namespace OutReach.API.Tools {

	public class PatientFileUtility {
		string _phoneNumber;
		string _forename;
		string _surname;
		bool _mobileVerified;

		public PatientFileUtility(string phoneNumber, string forename, string surname, bool mobileVerified) {
			_phoneNumber = phoneNumber;
			_forename = forename;
			_surname = surname;
			_mobileVerified = mobileVerified;
			SavePatientConsent();
		}

		/// <summary>
		/// creates a json file with the patients mobile number.false Includes patien's name and optin values
		private void SavePatientConsent() {

			// var filePath = $"\\Data\\{_phoneNumber}.json";

			using(StreamWriter file = File.CreateText($"\\Data\\{_phoneNumber}.json")) {
				JsonSerializer serializer = new JsonSerializer();
				//serialize object directly into file stream
				serializer.Serialize(file, "{\"forename\":\"" + _forename + "\",\"surname\":\"" + _surname + "\",\"mobileNumber\": \"" + _phoneNumber + "\",}");
			}
			//using(var fs = new File(filePath, true))
			//{
			//	fs.Write()
			//}
		}
	}
}