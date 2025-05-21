let id = 1;

function newId() {
  return id++;
}

const guitars = [
  { id: newId(), make: 'Fender', model: 'strat' },
  { id: newId(), make: 'PRS', model: 'Starla' },
  { id: newId(), make: 'Gibson', model: 'Les Paul' },
];

export const getGuitars = () => guitars;
export function saveGuitar(guitar) {
  guitar.id = newId();
  guitars.push(guitar);
}
