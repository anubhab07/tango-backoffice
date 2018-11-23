var fs = require('fs')
var express = require('express')
var app = express()
const port = 3000;

l = ""
c = 0
ans = "[";

fs.readdirSync('./').forEach(file => {
    if(file.indexOf('txt') >=0 ){
        c++;
        ans += "'" + file.substr(0, file.length-4) + "',";
    }
})

ans = ans.slice(0, ans.length-1) +  "]"
l = "{'count': " + c + ", 'topics': " + ans + "}"

// fs.readdir('./', (err, files) => {
//   files.forEach(file => {
//     l = l + file
//   });
// })

console.log(l)

app.get('/gk/:topic', function (req, res) {
    if(req.params.topic === 'list_all'){
        res.send(l);
    } else {
	    fs.readFile(req.params.topic+'.txt', 'utf8', function(err, contents) {
    	   res.send(contents);
	    })
    }
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

console.log('server started');
