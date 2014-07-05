// web.js
var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(function(req,res){
    res.sendfile(__dirname + '/public/error404.html');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});