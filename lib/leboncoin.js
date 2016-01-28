var request = require("request"),
  cheerio = require("cheerio"),
  url = "http://www.leboncoin.fr/ventes_immobilieres/915412170.htm?ca=12_s";
  
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      temperature = $("[itemprop='price']").text();
      
    console.log("It’s " + temperature + " degrees Fahrenheit.");
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});