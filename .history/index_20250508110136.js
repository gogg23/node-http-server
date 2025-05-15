import { createServer } from 'http';
import guitars from './data.js';
import { url } from 'inspector';

const server = createServer((request, response) => {
  // Removed redundant declaration of content

  response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });

  const url = new URL(request.url, 'http://localhost');

  console.log(url.searchParams.get('id'));

  let content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Guitars</title>
</head>
<body style="font-size:1.3rem">
<h2>My Guitars</h2>
<ul>
${guitars.map(createListItem).join('')}
</ul>
</body>
</html>
`;

  response.end(content);
});

const createListItem = ({ id, make, model }) =>
  `<li><a href="?id=${id}">${make} ${model}</a></li>`;

server.listen(80, () => {
  console.log(
    `Server is listening at localhost http://localhost:${server.address().port}`
  );
});
