import { createServer } from 'http';
import guitars from './data.js';

const server = createServer((request, response) => {
  let content = 'Hello, Node.js!';

  response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });

  const content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Guitars</title>
</head>
<body>
<h2>My Guitars</h2>
<ul>
${guitars.map(createListItem)}.join('\n')}
</ul>
</body>
</html>
`;

  response.end(content);
});

server.listen(80, () => {
  console.log(
    `Server is listening at localhost http://localhost:${server.address().port}`
  );
});
