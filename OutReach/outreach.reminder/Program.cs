using System;
using System.Net;
using OutReach.API.Tools;

class Reminder
{
    static void Main(string[] args)
    {
		try
        {
            var patient = Patient.Get(args[0]);

            var cw = new ClockWorkUtiliity();
            var message = "Reminder: Take " + patient.MedicationDosage + " x " + patient.MedicationName;
            cw.sendMessage(patient.MobileNumber, message);
        }
        catch (Exception ex)
        {
            // Something else went wrong, the error message should help
            Console.WriteLine("Unknown Exception: " + ex.Message);
        }
    }
}