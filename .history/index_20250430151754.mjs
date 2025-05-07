import { createServer, server } from 'http';

const server = createServerserver((request, response) => {});

server.listen(80, () => {
  console.log(
    'Server is listening at localhost http://localhost:${server.address().port}'
  );
});
