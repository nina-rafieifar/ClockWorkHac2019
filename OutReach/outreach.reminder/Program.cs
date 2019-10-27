using System;
using System.Net;
using OutReach.API.Tools;

class Reminder
{
    static void Main(string[] args)
    {
		try
        {
            var type = args[0];
            var mobileNumber = args[1];

            var patient = Patient.Get(mobileNumber);

            string message = "";
			switch(type.ToLower())
			{
				case "mood":
                    message = "How are you doing today " + patient.Forename + "? On a scale of 1-10, how are you feeling?";
					break;
				case "meds":
                    message = "Hi " + patient.Forename + ", here is your reminder to take " + patient.MedicationDosage + " x " + patient.MedicationName;
					break;
            }

            var cw = new ClockWorkUtiliity();
            cw.sendMessage(patient.MobileNumber, message);
        }
        catch (Exception ex)
        {
            // Something else went wrong, the error message should help
            Console.WriteLine("Unknown Exception: " + ex.Message);
        }
    }
}