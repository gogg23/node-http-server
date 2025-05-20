let id = 1;

function newId() {
  return id++;
}

const guitars = [
  { newId, make: 'Fender', model: 'strat' },
  { newId, make: 'PRS', model: 'Starla' },
  { newId, make: 'Gibson', model: 'Les Paul' },
];

export const saveGuitar = () => guitars;
export function saveGuitar(guitar) {
  guitar.id = newid();
  guitars.push(guitar);
}
