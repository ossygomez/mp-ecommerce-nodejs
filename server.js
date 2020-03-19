var http = require('http');
http.createServer(function(req,res){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('/');
});
console.log('Server started on port 80; press Ctrl-C to terminate...!');
