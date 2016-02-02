var //request = require('request'),
  cheerio = require('cheerio'),
  fs = require('fs'),
  json = require('../JSON/SchemeAgents'), //load the scheama
  //leboncoin = require('../output'),
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
	console.log(value[0].children[0].data);
	
	//fs.writeFile('index1.html', body, function(err){ //write the result in a new JSON file, the schema is kept untouched

//})
  //} else {
   // console.log("We’ve encountered an error: " + error);
	
  //}
 
//});