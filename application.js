var express = require('express');
var leboncoin = require('./lib/leboncoin');
//var agents = require('./lib/meilleursagent');
var http = require('http');
var fs = require('fs');

var host = '127.0.0.1';
var port = '8080';

/*var server = http.createServer(function(request, response){
		
		
		fs.readFile('./views/index.html','utf8', function(error, data){
		
				if(error){
					response.writeHead(404,{'Content-type':'text/plain'});
					response.end('Sorry an error occured');
					}
				else{
					response.writeHead(200,{'Content-type':'text/html'});
					response.end(data);
					}
		
		});
		
		
			
			});
			
			server.listen(port,host, function(){
			console.log('Listenning ' + host + ':' + port);});*/
			
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var tonreup;


var port = 8080;
var test;
/*server.listen(port, function() {
    console.log('server listening on port ' + port);
	
	/*server.use(bodyParser.urlencoded({ extended: true }));
	server.get('/', function (req, res) {
	res.render('index');
});
server.post('/', function(req, res) {
    res.send('Username: ' + req.body.url);
});*/
/*console.log(tonreup);
server.use(express.static(__dirname + '/public'));
server.use(express.bodyParser());

server.post('/', function(request, response){
    console.log(request.body.user.name);
    console.log(request.body.user.email);
});
 
});*/
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req, res){
  // The form's action is '/' and its method is 'POST',
  // so the `app.post('/', ...` route will receive the
  // result of our form
  var html = '<form action="/" method="post">' +
               'Enter your name:' +
               '<input type="text" name="userName" placeholder="..." />' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';
               
  res.send(html);
});

// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements
app.post('/', function(req, res){
  var userName = req.body.userName;
  test = userName;
  var html = 'Hello: ' + userName + '.<br>' +
             '<a href="/">Try again.</a>';
  res.send(html);
});

/*app.post('/', function (req, res) {
	// var url = "http://www.leboncoin.fr/ventes_immobilieres/915700197.htm?ca=12_s"
	var url = req.body.url;
	
	test = req.body;
	
	leboncoin.scrape(url, function (err, data) {
	
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
		});
});*/
app.listen(8080,function () {;

  console.log('Litstenning');
  console.log(test);
});
//leboncoin.scrape(url);