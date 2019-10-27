using System;
using System.Net;
using Clockwork;

namespace OutReach.API.Tools
{
	public class ClockWorkUtiliity
	{
		public string sendMessage(string phoneNumber, string message)
		{
			var key = "68c08ff8190e755bf4cc76e08f1ab7f71bf275b4";
			var fromPhoneNumber = "447860033387";
			var clockworkMessageReponse = "";
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
					clockworkMessageReponse = $"SMS Sent to {result.SMS.To}, Clockwork ID: {result.ID}";
				}
				else
				{
					clockworkMessageReponse = $"SMS to {result.SMS.To} failed, Clockwork Error: {result.ErrorCode} {result.ErrorMessage}";
				}
			}
			catch (APIException ex)
			{
				// You will get an API exception for errors
				// such as wrong username or password
				clockworkMessageReponse = $"API Exception: {ex.Message}";

			}
			catch (WebException ex)
			{
				// Web exceptions mean you couldn’t reach the Clockwork server
				clockworkMessageReponse = $"Web Exception: {ex.Message}";

			}
			catch (ArgumentException ex)
			{
				// Argument exceptions are thrown for missing parameters,
				// such as forgetting to set the username
				clockworkMessageReponse = $"Argument Exception: {ex.Message}";

			}
			catch (Exception ex)
			{
				// Something else went wrong, the error message should help
				Console.WriteLine($"Argument Exception: {ex.Message}");
			}

			return clockworkMessageReponse;
		}
	}
}
