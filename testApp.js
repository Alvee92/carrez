var express = require('express');
var leboncoin = require('./lib/leboncoin');
//var agents = require('./lib/meilleursagent');
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

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
  // The form's action is '/' and its method is 'POST',
  // so the `app.post('/', ...` route will receive the
  // result of our form
  var html = app.use(express.static(__dirname + '/public'));/*'<form action="/" method="post">' +
               'Enter your name:' +
               '<input type="text" name="userName" placeholder="..." />' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';*/
               
  //res.send(html);
  
  });
  
  app.post('/', function(req, res){
  var userName = req.body.userName;
  test = userName;
  var html =  'Hello: ' + userName + '.<br>' +
             '<a href="/">Try again.</a>';
  console.log('html est'+ html + '\n'); 
  res.send(html);
});

app.listen(8080,function () {;

  console.log(app.use(express.static(__dirname + '/public')));
  console.log('teste est '+test);
});