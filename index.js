import { createServer } from 'http';
import guitars from './data.js';
import { createList, getGuitarContent } from './content.js';

const createListItem = ({ id, make, model }) =>
  `<li><a href="?id=${id}">${make} ${model}</a></li>`;

const server = createServer((request, response) => {
  const parts = request.url.split('/');

  if (parts.includes('delete')) {
    handleDelete(parts[2]);
    return redirect(response, '/');
  }

  response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });

  const url = new URL(request.url, 'http://localhost');
  const id = url.searchParams.get('id');

  let content;

  if (parts.includes('add')) {
    content = getForm();
  } else if (id) {
    content = getGuitarContent(id);
  } else {
    content = createList();
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Guitars</title>
</head>
<body style="font-size:1.3rem">
  ${content}
</body>
</html>`;

  response.end(html);
});

function handleDelete(id) {
  let index = guitars.findIndex((g) => g.id == id);
  guitars.splice(index, 1);
}

function redirect(response, to) {
  response.writeHead(302, { Location: to, 'Content-Type': 'text/plain' });
  response.end(`Redirecting to ${to}`);
}

server.listen(80, () => {
  console.log(
    `Server is listening at localhost http://localhost:${server.address().port}`
  );
});
