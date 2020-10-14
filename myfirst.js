var http = require('http');
var url = require('url');

var dt = require('./myfirstmodule');



// This is a modified version to test GitHub...

http.createServer(function (req, res) {
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;

//  var thisProcessName =  process.cwd();

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<br>The date and time are currently: " + dt.myDateTime());
  res.write("<br>The URL  is " + req.url);
  //res.end("<br>" + txt);
 // res.end("<br>The name of this process is " + thisProcessName);


  res.end();
}).listen(8080);

