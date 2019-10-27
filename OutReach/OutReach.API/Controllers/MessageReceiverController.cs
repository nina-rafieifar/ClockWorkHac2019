using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OutReach.API.Tools;

namespace OutReach.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class MessageReceiverController : Controller
    {
		[HttpGet]
        public IActionResult Receiver(string id, string to, string from, string keyword, string content)
        {
			// Receipts are comming from Mobile confirmation number and patient consent.

			var result = new StringBuilder(255);
			result.Append("Id : " + id + "; ");
			result.Append("to : " + to + "; ");
			result.Append("from : " + from + "; ");
			result.Append("content : " + content + "; ");

			var parsedKeyword = getKeyword(content);

			var clockWorkUtility = new ClockWorkUtiliity();
			var resultMessage = clockWorkUtility.sendMessage(from, $"Echo {result.ToString()} and the keyword is : {parsedKeyword}");

			switch(parsedKeyword)
			{
				case "CONSENT":
					// todo: add interaction here
					resultMessage = clockWorkUtility.sendMessage(from, $"Thank you your message of CONSENT has been received.");

					break;
				case "FEELING":
					// todo: add interaction here
					break;
			}

			return Ok(resultMessage);
		}

		private string getKeyword(string message)
		{
			var parseWords = message.Split(" ");
			
			if(parseWords.Length > 0)
			{
				return parseWords[0].ToUpper();
			} else
			{
				return "";
			}
		}
    }
}