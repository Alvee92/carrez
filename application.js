var express = require('express');
var leboncoin = require('./lib/leboncoin');
var agents = require('./lib/meilleursagent');
var host = '127.0.0.1';
var port = '8080';
var bodyParser = require('body-parser');
var app = express();


var port = 8080;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	res.render('index');
});


app.post('/url', function(req, res){
  var url = req.body.url;
 
  leboncoin.scrape(url, function (err, data) {
		
		
		agents.compare(data, function (err, data) {
			if(err == null)
			{
				var finalres = {
						finalres: data
								}
					res.json(finalres);
			}
			else {
				res.json({message: 'An error occured!'})
				}
				
				
			});
		});
});


app.listen(8080,function () {;

  console.log('Litstenning');
});
