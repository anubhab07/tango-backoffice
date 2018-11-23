var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
	
	var topic = req.url.replace("/gk/", "");
	if(topic.length>0){
		res.writeHead(200, {'Content-Type': 'text/plain'});
		fs.createReadStream(__dirname + '/'+ topic + '.txt').pipe(res);
	} else {
		res.writeHead(404);
	}
});

server.listen(3000, '0.0.0.0');
console.log('server started');
