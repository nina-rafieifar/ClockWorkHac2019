using System;
using System.IO;
using System.Net;
using OutReach.Library.Models;
using Newtonsoft.Json;

class Patient
{
    public static RegistrationModel Get(string mobileNumber)
    {
        RegistrationModel registrationDetails;

        WebRequest request = WebRequest.Create("https://938d2cae.ngrok.io/clockwork/api/PatientRegistration?mobilePhoneNumber=" + mobileNumber);
        WebResponse response = request.GetResponse();

        // Get the stream containing content returned by the server.
        // The using block ensures the stream is automatically closed.
        using (Stream dataStream = response.GetResponseStream())
        {
            // Open the stream using a StreamReader for easy access.
            StreamReader reader = new StreamReader(dataStream);
            // Read the content.
            string responseFromServer = reader.ReadToEnd();
            registrationDetails = JsonConvert.DeserializeObject<RegistrationModel>(responseFromServer);
        }

        // Close the response.
        response.Close();

        return registrationDetails;
    }
}
