var http = require('http');

var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('Hello node.js!!')
});

server.listen(8888, function() {
    console.log('server is running...');
})