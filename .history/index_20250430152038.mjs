import { createServer } from 'http';

const server = createServer((request, response) => {});

server.listen(80, () => {
  console.log(
    `Server is listening at localhost http://localhost:${server.address().port}`
  );
});
