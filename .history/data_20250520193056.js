const guitars = [
  { id: 1, make: 'Fender', model: 'strat' },
  { id: 2, make: 'PRS', model: 'Starla' },
  { id: 3, make: 'Gibson', model: 'Les Paul' },
];

export const saveGuitar = () => guitars;
export function saveGuitar(guitar) {
  guitar.id = newid();
  guitars.push(guitar);
}
