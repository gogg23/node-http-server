export const createList = (guitars) => `
  <h2>My Guitars</h2>
  <ul>
    ${guitars.map(createListItem).join('\n')}
  </ul>
`;

const createListItem = ({ id, make, model }) =>
  `<li><a href="?id=${id}">${make} ${model}</a></li>`;

export function getGuitarContent(guitar) {
  if (guitar) {
    return `<h2>${guitar.make} ${guitar.model}</h2>
    <p><a href="/delete/${guitar.id}">Delete</a>`;
  } else {
    return '<p>Guitar does not exist</p>';
  }
}
