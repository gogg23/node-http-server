import { createServer } from 'http';

const server = createServer((request, response) => {
  let content = 'Hello, World!';
  response.end('content!');
});

server.listen(80, () => {
  console.log(
    `Server is listening at localhost http://localhost:${server.address().port}`
  );
});
