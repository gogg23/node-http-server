import { createServer } from 'http';

const server = createServer((request, response) => {
  let content = 'Hello, Node.js!';
  response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  response.end(content);
});

server.listen(80, () => {
  console.log(
    `Server is listening at localhost http://localhost:${server.address().port}`
  );
});
