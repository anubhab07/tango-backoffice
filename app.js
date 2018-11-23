var fs = require('fs')
var express = require('express')
var app = express()
const port = 3000;

app.get('/gk/:topic', function (req, res) {
	fs.readFile(req.params.topic+'.txt', 'utf8', function(err, contents) {
    	res.send(contents);
	})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

console.log('server started');
