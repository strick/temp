const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

    var url = req.url;

    if(url ==='/hello') {
        res.write(' hello there'); 
        res.end(); 
    }
    else if(url ==='/world') {
        res.write(' the world'); 
        res.end(); 
    }
    else {
        res.end('Hello World');
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});