// const _ = require('lodash')

// console.log(_.upperFirst('instagram'));

var http = require('http')
var fs = require('fs')

const PORT = 2020

var html = fs.readFileSync('satu.html', 'utf8')

var server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(html)
})

server.listen(PORT)
console.log('Active on '+PORT);