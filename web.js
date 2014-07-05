// web.js
var express = require("express");
var app = express();


app.all('*', function(req, res, next) {
  var agent;
  agent = req.headers['user-agent'];
  if (agent.indexOf('Safari') > -1 && agent.indexOf('Chrome') === -1 && agent.indexOf('OPR') === -1) {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', 0);
  }
  return next();
});


app.use(express.static(__dirname + '/public'));

app.use(function(req,res){
    res.sendfile(__dirname + '/public/error404.html');
});
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});