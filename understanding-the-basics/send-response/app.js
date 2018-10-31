const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>My first response</title></head><body><p1>This is my first response!</p1></body></html>')
})

server.listen(3000);