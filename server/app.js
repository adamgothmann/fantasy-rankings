var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set("port", (process.env.PORT || 8080));

app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});

app.use( express.static('public') );

app.get( '/', function( req, res ){
  res.sendFile(path.resolve('public/views/index.html'));
}); // end base url
