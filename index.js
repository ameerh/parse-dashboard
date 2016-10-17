var express = require('express');
var ParseDashboard = require('parse-dashboard');

var dashboard = new ParseDashboard({
  "apps": [
    {
      "serverURL": "",
      "appId": "",
      "masterKey": "",
      "appName": ""
    }
  ],
  "users": [
    {
      "user":"",
      "pass":""
    }
  ]
}, true);

var app = express();

// make the Parse Dashboard available at /
app.use('/', dashboard);

var port = 80;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function(){
  console.log("Parse Dashboard running at "+port)
});