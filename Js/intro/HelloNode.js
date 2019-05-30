var http = require('http');

http.createServer(function(request, response){
    
    response.writeHead(200);
    response.write("Hello, this is Node Js");
    response.end();
}).listen(8080);

console.log('Listening on Port 8080');
