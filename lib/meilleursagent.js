var request = require('request'),
  cheerio = require('cheerio'),
  fs = require('fs'),
  json = require('../JSON/SchemeAgents'), //load the scheama
  leboncoin = require('../output')
  url = 'https://www.meilleursagents.com/prix-immobilier/'+leboncoin.properties.town+'-'+leboncoin.properties.zip+'/#estimates'; //the url of the page;
  

  request(url, function (error, response, body) { //make the request to the web page
  if (!error) {
    var $ = cheerio.load(body); //load the body of the html code
	
    var table = $(".small-4 medium-2 columns prices-summary__cell--muted"); //find what we are interested in.
    console.log(table.children);
	
	
	//fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){ //write the result in a new JSON file, the schema is kept untouched


//})
  } else {
    console.log("We’ve encountered an error: " + error);
	
  }
 
});