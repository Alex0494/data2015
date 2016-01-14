(function(){

var express = require('express');
var app = express();



app.use(express.static(__dirname + '/public'));

app.get('/', function(req, resp) {
	resp.sendFile(__dirname + '/public/index.html');
	console.log("welcome!!!")
});

app.post('/pictures', function(req, resp){



});

app.listen(3000);
console.log("listening on port 3000");

})();