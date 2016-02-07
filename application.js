var express = require('express');
var leboncoin = require('./lib/leboncoin');
var agents = require('./lib/meilleursagent');
var http = require('http');
var fs = require('fs');

var host = '127.0.0.1';
var port = '8080';


var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var tonreup;


var port = 8080;
var test;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	res.render('index');
});


app.post('/url', function(req, res){
  var url = req.body.url;
  
  leboncoin.scrape(url, function (err, data) {
		if(err != null) {
			data = {
				status: "error",
				error: ""
			}
			if(err.code == "ETIMEDOUT") {
				data.error = "Connect timed out. Is your URL correct?"
			}
			else {
				data.error = "Something goes wrong."
			}
			res.json(data);
		}
		else {
			agents.compare(data, function (err, data) {
				if(err == null && data.type != "") {
					var result = {
						status: "success",
						result: data
					}
					res.json(result);
				}
				else {
					res.json({
						status: "error", 
						error: "URL invalid, please check your URL."
					})
				}
				
				res.json(data);
			});
		}
});
});

app.listen(8080,function () {;

  console.log('Litstenning');
  console.log(test);
});
