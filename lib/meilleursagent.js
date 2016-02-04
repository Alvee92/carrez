var //request = require('request'),
  cheerio = require('cheerio'),
  fs = require('fs'),
  json = require('../JSON/SchemeAgents'), //load the scheama
  leboncoin = require('./resultLBC'),
  //url = 'https://www.meilleursagents.com/prix-immobilier/'+leboncoin.properties.town.toLowerCase()+'-'+leboncoin.properties.zip+'/#estimates'; //the url of the page;
  url = '../arcueil.html';
  //console.log(url);

  //request(url, function (error, response, body) { //make the request to the web page
  //if (!error) {
  
    var $ = cheerio.load(fs.readFileSync(url,'utf8')); //load the body of the html code
	//console.log($);
    //var table = $(".small-4 medium-2 columns prices-summary__cell--median");
    //console.log(table);
	
	var value = $('.small-4.medium-2.columns');
	value = value.slice(3);
	//console.log(value[0].children[0].data);
	
	if (leboncoin.properties.type == "Appartement") {
			value = value.slice(0, 3);
			
		}
		else if (data.property.type == "Maison") {
			value = value.slice(3, 6);
		}
		else {
			value = value.slice(6);
		}
		
		json.properties.price.min = value[0].children[0].data.match(/[0-9,]/g).join("").replace(",", ".");
		json.properties.price.averrage = value[1].children[0].data.match(/[0-9,]/g).join("").replace(",", ".");
		json.properties.price.max = value[2].children[0].data.match(/[0-9,]/g).join("").replace(",", ".");
	
	
	fs.writeFile('FinalResult.json',JSON.stringify(json, null, 4), function(err){ //write the result in a new JSON file, the schema is kept untouched

	
}
   
 
);