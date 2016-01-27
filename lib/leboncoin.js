var http = require('http');
var request = process.argv[2];


function test()
{ http.get(request, function(response){

	response.setEncoding('utf8');
	response.on("data", function(data){
		console.log(data);
})
}
)
}
exports.test = test;