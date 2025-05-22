export const createList = (guitars) => ` 
<h2>My Guitars <a href="/add">Add new guitar</a></h2>
  <ul>
    ${guitars.map(createListItem).join('\n')}
  </ul>
`;

const createListItem = ({ id, make, model }) =>
  `<li><a href="?id=${id}">${make} ${model}</a></li>`;

export const getForm = () => `
<form method="post" action="/save">
<div>
     Make: <input type="text" name="guitar_make" />
</div>
<div>
     Model: <input type="text" name="guitar_model" />
</div>
<div>
     <button type="submit">Save</button>
</div>
</form>`;

export function getGuitarContent(guitar) {
  if (guitar) {
    return `<h2>${guitar.make} ${guitar.model}</h2>
    <p><a href="/delete/${guitar.id}">Delete</a>`;
  } else {
    return '<p>Guitar does not exist</p>';
  }
}

export const view = (content) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Guitars</title>
</head>
<body>
  ${content}
</body>
</html>`;
