// @ts-check

const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url === '/posts' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('List of Post');
  } else if (req.url && /^\posts\/[a-zA-Z0-9-_]+$/.test(req.url)) {
    res.statusCode = 200;
    res.end('Some content of the post');
  } else if (req.url === '/posts' && req.method === 'POST') {
    res.statusCode = 200;
    res.end('Creating post');
  } else {
    res.statusCode = 404;
    res.end('Not found.');
  }
  res.statusCode = 200;
  res.end('Hello!');
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`The server is listening at port: ${PORT}`);
});
