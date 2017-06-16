// require is a part of node that helps me import node_modules folder
// require also pulls from another javascript file with an export
var express = require('express');
var app = express();
var http = require('http').Server(app);

//this is express
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

//this is nodes http from line 5
http.listen(process.env.PORT||3000, function(){
	console.log('listening on port 3000');
});