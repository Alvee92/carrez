var //request = require('request'),
  cheerio = require('cheerio'),
  fs = require('fs'),
  json = require('../JSON/SchemeAgents'), //load the scheama
  //leboncoin = require('./resultLBC'),
  //url = 'https://www.meilleursagents.com/prix-immobilier/'+leboncoin.properties.town.toLowerCase()+'-'+leboncoin.properties.zip+'/#estimates'; //the url of the page;
  url = './arcueil.html';
  //console.log(url);

  //request(url, function (error, response, body) { //make the request to the web page
  //if (!error) {
  
    function compare(data,callback){ 
	var $ = cheerio.load(fs.readFileSync(url,'utf8')); //load the body of the html code
	var price_m2 = data.properties.price / data.properties.surface;
	
	var value = $('.small-4.medium-2.columns');
	console.log(value);
	value = value.slice(3);
	
	
	if (data.properties.type == "Appartement") {
			value = value.slice(0, 3);
			
		}
		else if (data.properties.type == "Maison") {
			value = value.slice(3, 6);
		}
		else {
			value = value.slice(6);
		}
		json.properties.zip = data.properties.zip;
		json.properties.type = data.properties.type;
		json.properties.town = data.properties.town;
		json.properties.surface = data.properties.surface;
		json.properties.ini_price = data.properties.price;
		
		
		json.properties.price.min = value[0].children[0].data.match(/[0-9,]/g).join("").replace(",", ".");
		json.properties.price.averrage = value[1].children[0].data.match(/[0-9,]/g).join("").replace(",", ".");
		json.properties.price.max = value[2].children[0].data.match(/[0-9,]/g).join("").replace(",", ".");
		
		json.properties.price_m2 = price_m2;
		
		if(price_m2<json.properties.price.averrage)
		{
			json.properties.deal = 1;
		}
		else { json.properties.deal = 0;}
	
	//fs.writeFile('FinalResult.json',JSON.stringify(json, null, 4), function(err){ });//write the result in a new JSON file, the schema is kept untouched}
	callback(null, json);
	
	}
	
	exports.compare = compare;
 



