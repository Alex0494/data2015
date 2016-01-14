(function(){

var express = require('express');
var app = express();

var facebook = require('facebook-node-sdk');
//var fb = facebook({appID: '', secret: ''});
//var logged = true;

app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, resp){

// 	if(logged) {
// 		resp.redirect('/login');
// 	} else {
// 		resp.redirect('/home');
// 	}
// });

app.get('/', function(req, resp) {

	resp.sendFile(__dirname + '/public/index.html');
	console.log("welcome!!!")

});

app.listen(3000);
console.log("listening on port 3000");

})();