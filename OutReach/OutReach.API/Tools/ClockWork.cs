using System;
using System.Net;
using Clockwork;

namespace OutReach.API.Tools
{
	public class ClockWorkUtiliity
	{
		public void sendMessage(string phoneNumber, string message)
		{
			var key = "68c08ff8190e755bf4cc76e08f1ab7f71bf275b4";
			var fromPhoneNumber = "+44 7860 033 387";
			try
			{
				Clockwork.API api = new Clockwork.API(key);
				SMSResult result = api.Send(
					new SMS
					{
						To = phoneNumber,
						Message = message,
						From = fromPhoneNumber
					});

				if (result.Success)
				{
					Console.WriteLine("SMS Sent to {0}, Clockwork ID: {1}",
						result.SMS.To, result.ID);
				}
				else
				{
					Console.WriteLine("SMS to {0} failed, Clockwork Error: {1} {2}",
						result.SMS.To, result.ErrorCode, result.ErrorMessage);
				}
			}
			catch (APIException ex)
			{
				// You will get an API exception for errors
				// such as wrong username or password
				Console.WriteLine("API Exception: " + ex.Message);
			}
			catch (WebException ex)
			{
				// Web exceptions mean you couldn’t reach the Clockwork server
				Console.WriteLine("Web Exception: " + ex.Message);
			}
			catch (ArgumentException ex)
			{
				// Argument exceptions are thrown for missing parameters,
				// such as forgetting to set the username
				Console.WriteLine("Argument Exception: " + ex.Message);
			}
			catch (Exception ex)
			{
				// Something else went wrong, the error message should help
				Console.WriteLine("Unknown Exception: " + ex.Message);
			}
		}
	}
}
