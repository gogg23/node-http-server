import { createServer } from 'http';
import guitars from './data.js';

const createListItem = ({ id, make, model }) =>
  `<li><a href="?id=${id}">${make} ${model}</a></li>`;

const createList = () => `
<div>
  <h2>My Guitars</h2>
  <ul>
    ${guitars.map(createListItem).join('')}
  </ul>
</div>
`;

function getGuitarContent(id) {
  const guitar = guitars.find((g) => g.id == id);
  if (guitar) {
    return `<h2>${guitar.make} ${guitar.model}</h2>`;
  } else {
    return '<p>Guitar does not exist</p>';
  }
}

const server = createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  // /delete/id
  const parts = request.url.split('/');

  if (parts.includes('delete')) {
    handleDelete(parts[2]);
    redirect(response, '/');
  } else {
    const url = new URL(request.url, 'http://localhost');
    const id = url.searchParams.get('id');

    const content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Guitars</title>
</head>
<body style="font-size:1.3rem">
  ${id ? id : createList()}
</body>
</html>
`;

    response.end(content);
  }
});

function handleDelete(id) {}
server.listen(80, () => {
  console.log(
    `Server is listening at localhost http://localhost:${server.address().port}`
  );
});
