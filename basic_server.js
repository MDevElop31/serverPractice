var http = require("http");

// 
var portGood = 7000;
var portBad = 7500;

// 
function goodHandleRequest(request, response) {

  // 
  response.end("You're the best around, nothing's gonna ever bring you down!");
}

function badHandleRequest(request, response) {

  // 
  response.end("You have poor taste...buds!");
}

// 
var serverGood = http.createServer(goodHandleRequest);
var serverBad = http.createServer(badHandleRequest);

// 
serverGood.listen(portGood, function() {

	console.log(portGood + " is running");
  //
});

serverBad.listen(portBad, function() {

	console.log(portBad + " is running");

});