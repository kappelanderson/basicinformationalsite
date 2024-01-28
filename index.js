/*let http = require('http');
let url = require("url")
let fs = require("fs");
http.createServer(function (req, res) {
  let q = url.parse(req.url, true);
  let filename = "";
  if(q.pathname == "/"){
    filename = "./index.html"
  }
  else if(q.pathname == "/about.html" || q.pathname == "/contact-me.html"){
    filename = '.' + q.pathname;

  }
  else{
    filename = './404.html'
  }

  fs.readFile(filename, function(err,data){
    if(err){
        console.log(err)
    }
    else{
        res.writeHead(200, {'Content-Type': 'text/html'});

        res.write(data)
        res.end()
    }

})

}).listen(8080);
*/

// EXPRESS ADDITIONS
var express = require('express')
var app = express()
const path = require('path');


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"))
})

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, "/about.html"))
})
app.get('/contact-me', function (req, res) {
  res.sendFile(path.join(__dirname, "/contact-me.html"))
})
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "/404.html"))

})

app.listen(8080)
