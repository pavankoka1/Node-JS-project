var connect = require('connect');
var http = require('http');

var app = connect();
/*

function doFirst(request, response, next){

    console.log("bacon");
    next();
}

function doSecond(request, response, next){

    console.log("pizza");

}

app.use(doFirst);
app.use(doSecond);
*/

function profile(request, response){
    console.log("User asked for profile");
}
app.use('/profile', profile);
http.createServer(app).listen(3128);
console.log("Server is working...");