


const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, './index.html');
const port = 5500;

http.createServer((req, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 - Internal Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

