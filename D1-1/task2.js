var http = require('http');
var fs = require('fs');
var url = require('url');

function requestHandler (req, res) {
  
    let urlDetails = url.parse(req.url,true);
     if(urlDetails.pathname == "/"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile("views/reg.html",function(error,data){
            console.log(error);
            res.end(data);
        })       
    }
    else if(urlDetails.pathname == "/form"){
        if(urlDetails.query.psw.length < 8){
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end(`<h1>too short password</h1><br/>`);
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`<h1>Success registration</h1><br/>`);
        }
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.readFile("views/notfound.html",function(error,data){
            console.log(error);
            res.end(data);
        })
    }
}

http.createServer(requestHandler).listen(8080);
