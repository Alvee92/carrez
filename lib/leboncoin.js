var request = require('request'),
  cheerio = require('cheerio'),
  fs = require('fs'),
  json = require('../JSON/SchemeLeBonCoin'), //load the scheama
  url ='http://www.leboncoin.fr/locations/919289291.htm?ca=12_s'; //the url of the page

 function scrape(url,callback){  
request(url, function (error, response, body) { //make the request to the web page
  if (!error) {
    var $ = cheerio.load(body); //load the body of the html code
	
    json.properties.price = parseInt($("[itemprop='price']").text().toString().replace(' ' ,'')); //find what we are interested in.
    json.properties.town = $("[itemprop='addressLocality']").text(); //find what we are interested in.
    json.properties.zip = $("[itemprop='postalCode']").text(); //find what we are interested in.
	
	var attribute = $("[class='lbcParams criterias']>table > tr >th");
	var table = $("[class='lbcParams criterias']>table > tr >td");
    
    
    
	
	for(var i =0;i<table.length; i++){
	
		if(attribute[i].children[0].data.indexOf('Surface')>-1)
		{
			json.properties.surface = parseInt(table[i].children[0].data);
		}
		else if(attribute[i].children[0].data.indexOf('Pi')>-1)
		{
			json.properties.room = table[i].children[0].data;
		}
		else if(attribute[i].children[0].data.indexOf('Type')>-1)
		{
			json.properties.type = table[i].children[0].data;
		}
	}
	
	//fs.writeFile('resultLBC.json', JSON.stringify(json, null, 4), function(err){ });
callback(null, json);

  } 
  else {
			callback({error: error}, null);
			console.log(error);
			console.log(error.error);
		}
 
});

}

//scrape('http://www.leboncoin.fr/ventes_immobilieres/9214054vbn29.htm?ca=12_s',function(){});
exports.scrape = scrape;