using System;
using System.IO;
using System.Threading.Tasks;
using System.Web;
using Newtonsoft.Json;
using OutReach.Library.Models;

namespace OutReach.API.Tools {

	public class PatientFileUtility {
		string _phoneNumber;
		string _forename;
		string _surname;
		bool _mobileVerified;
		RegistrationModel _registrationModel; 

		public PatientFileUtility(RegistrationModel regModel) {
			_registrationModel = regModel;
			SavePatientConsent(_registrationModel);
		}

		/// <summary>
		/// creates a json file with the patients mobile number.false Includes patien's name and optin values
		public static void SavePatientConsent(RegistrationModel registrationModel) {

			// var filePath = $"\\Data\\{_phoneNumber}.json";

			using(StreamWriter file = File.CreateText($"\\Data\\{registrationModel.MobileNumber}.json")) {
				JsonSerializer serializer = new JsonSerializer();
				//serialize object directly into file stream

				serializer.Serialize(file, registrationModel);

				//serializer.Serialize(file, "{\"forename\":\"" + _forename + "\",\"surname\":\"" + _surname + "\",\"mobileNumber\": \"" + _phoneNumber + "\",}");
			}
			//using(var fs = new File(filePath, true))
			//{
			//	fs.Write()
			//}
		}

		/// <summary>
		/// creates a json file with the patients mobile number.false Includes patien's name and optin values
		public static RegistrationModel GetPatient(string mobilePhoneNumber)
		{
			var filePath = $"\\Data\\{mobilePhoneNumber}.json";

			if(File.Exists(filePath)) { 
				using (StreamReader file = File.OpenText($"\\Data\\{mobilePhoneNumber}.json"))
				{
					return JsonConvert.DeserializeObject<RegistrationModel>(file.ReadToEnd());
				}
			}

			return null;
		}
	}
}