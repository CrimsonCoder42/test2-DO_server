var http = require('http');
//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response
  res.end(); //end the response
}).listen(8080, function(){
 console.log("server start at port 8080"); //the server object listens on port 8080
});