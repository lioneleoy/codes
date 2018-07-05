var http = require('http');

//creating a server

http.createServer(function(request,response){
  //send http header
  //send status code 200
  //content type: text/plain

  response.writeHead(200,{'Content-Type': 'text/plain'});

  //send response body "hello"

  response.end('Hello Node\n');

}).listen(8081);

//console will print the message

console.log("server running @http://127.0.0.1:8081");
