var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
	//console.log(req.url);
	res.writeHead(200, {'Content-Type': 'text/plain'});
	if(req.url==1){
		var content = fs.readFileSync('Bhubaneswar.txt', 'utf8');
	}
	res.end(content);
});

//var topic = 'Bhubaneswar';
//var content = fs.readFileSync(topic+'.txt', 'utf8');

//console.log(content);


server.listen(3000, '0.0.0.0');
console.log('server started');
