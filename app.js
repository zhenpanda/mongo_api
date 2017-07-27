var http = require ('http');	     // For serving a basic web page.
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var router = require('./router');

var mongoose = require ("mongoose"); // The reason for this demo.
var uristring = process.env.MONGODB_URI || 'mongodb://localhost/HelloMongoose';
mongoose.connect(uristring);

// The http server will listen to an appropriate port, or default to port 5000.
var theport = process.env.PORT || 5000;

// mongoose.connect(uristring, function (err, res) {
//   if (err) console.log ('ERROR connecting to: ' + uristring + '. ' + err);
//   else console.log ('Succeeded connected to: ' + uristring);
// });

// app setup
var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({type:'*/*'}));
router(app);

// create instance of express
var server = http.createServer(app);
server.listen(theport);
console.log('Server listening on:', theport, ' captain!');
