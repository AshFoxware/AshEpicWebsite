const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '0.0.0.0';
const port = 3000;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml'
};

const server = http.createServer(async (req, res) => {
  if (req.url === '/portfolio' && req.method === 'GET') {
      fs.readFile('./public/portfolio.html', (err, content) => {
          if (err) {
              res.writeHead(404);
              res.end('404 Not Found');
              return;
          }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content, 'utf-8');
      });
      return;
  }

  if (req.url === '/projects' && req.method === 'GET') {
      fs.readFile('./public/projects.html', (err, content) => {
          if (err) {
              res.writeHead(404);
              res.end('404 Not Found');
              return;
          }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content, 'utf-8');
      });
      return;
  }

  if (req.url === '/about' && req.method === 'GET') {
      fs.readFile('./public/about.html', (err, content) => {
          if (err) {
              res.writeHead(404);
              res.end('404 Not Found');
              return;
          }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content, 'utf-8');
      });
      return;
  }

    // Default route
    let filePath = req.url === '/'
        ? './public/index.html'
        : './public' + req.url;

    const extname = path.extname(filePath);
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {

        if (err) {

            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('404 Not Found');
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }

        } else {

            res.writeHead(200, {
                'Content-Type': contentType
            });

            res.end(content, 'utf-8');
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
