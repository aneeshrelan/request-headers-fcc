// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.enable('trust proxy')
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  var ip = request.ip;
  var lang = request.headers["accept-language"];
  var os = request.headers['user-agent'].split(') ')[0].split(' (')[1];
  var obj = {"ipaddress" : ip, "language" : lang, "software" : os}
  
  response.json(obj)
  
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

