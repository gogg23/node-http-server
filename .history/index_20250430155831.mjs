import { createServer } from 'http';

const server = createServer((request, response) => {
  response.write('Hello World');
});

server.listen(80, () => {
  console.log(
    `Server is listening at localhost http://localhost:${server.address().port}`
  );
});
