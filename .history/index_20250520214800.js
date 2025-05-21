let id = 1;

function newId() {
  return id++;
}

const guitars = [
  { id: newId(), make: 'Fender', model: 'Strat' },
  { id: newId(), make: 'PRS', model: 'Starla' },
  { id: newId(), make: 'Gibson', model: 'Les Paul' },
];

function getGuitars() {
  return guitars;
}

function saveGuitar(guitar) {
  guitar.id = newId();
  guitars.push(guitar);
}

export { getGuitars, saveGuitar };
