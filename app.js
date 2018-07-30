///////////////////////////////
/// Sayho 2018. 05. 15
/// middleware descriptions
/// *bodyParser : 
///////////////////////////////
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
/*
var logger = function(req, res, next) {
	console.log('logging...');
	next();
}
app.use(logger);
*/
// Body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
// make public folder able to access 
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'node_modules')));
app.get('/', function(req, res) {
	res.send('Hi');
});

app.listen(3000, function() {
	console.log('Server runs at port 3000');
});