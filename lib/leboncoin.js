var request = require('request'),
  cheerio = require('cheerio'),
  fs = require('fs'),
  json = require('../JSON/SchemeLeBonCoin'), //load the scheama
  url = 'http://www.leboncoin.fr/ventes_immobilieres/918673134.htm?ca=12_s'; //the url of the page
  
request(url, function (error, response, body) { //make the request to the web page
  if (!error) {
    var $ = cheerio.load(body); //load the body of the html code
	
    json.properties.price = $("[itemprop='price']").text(); //find what we are interested in.
    json.properties.town = $("[itemprop='addressLocality']").text(); //find what we are interested in.
    json.properties.zip = $("[itemprop='postalCode']").text(); //find what we are interested in.
	
	var table = $("[class='lbcParams criterias']>table > tr >td");
    json.properties.type = table[0].children[0].data;
    json.properties.room = table[1].children[0].data;
    json.properties.surface = table[2].children[0].data;
	
	
	fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){ //write the result in a new JSON file, the schema is kept untouched


})
  } else {
    console.log("We’ve encountered an error: " + error);
	
  }
 
});


