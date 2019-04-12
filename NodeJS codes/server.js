var http = require('http');
var fs = require('fs');

function send404error(response){

    response.writeHead(404, {"Context-type": "text/plain"});
    response.write("Oops! 404 ERROR");
    response.end();

}

function onRequest(request, response) {
    console.log("A user made a request" + request.url);

    if(request.method == 'GET' && request.url == '/'){
        response.writeHead(200, {"Context-type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }else{
        send404error(response);
    }
}

http.createServer(onRequest).listen(3128);
console.log("Server is now running...")