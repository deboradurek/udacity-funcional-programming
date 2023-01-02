const characters = [
  {
    name: 'Marvin the Paranoid Android',
    role: 'First Mate',
    universe: 'Hitchhikers Guide to the Galaxy',
    weapon: 'severe depression',
    power_level: 1000,
  },
  {
    name: 'Jabba the Hut',
    role: 'villain',
    universe: 'Star Wars',
    weapon: 'henchmen',
    power_level: 200,
  },
  {
    name: 'Zoë Alleyne Washburne',
    role: 'First Mate',
    universe: 'Firefly',
    weapon: 'Winchester Model 1892 rifle',
    power_level: 160,
  },
  {
    name: 'Peter Venkman',
    role: 'Ghostbuster',
    universe: 'Ghostbusters',
    weapon: 'proton pack',
    power_level: 120,
  },
  {
    name: 'Kathryn Janeway',
    role: 'Captain',
    universe: 'Star Trek',
    weapon: 'Wit',
    power_level: 140,
  },
  {
    name: 'Dr. Daniel Jackson',
    role: 'Archeologist',
    universe: 'Stargate',
    weapon: 'Zat gun',
    power_level: 120,
  },
  {
    name: 'Q',
    role: 'God/Eternal',
    universe: 'Star Trek',
    weapon: 'Whatever he wants',
    power_level: 1000,
  },
  {
    name: 'Boba Fett',
    role: 'Bounty Hunter',
    universe: 'Star Wars',
    weapon: 'EE-3 carbine rifle',
    power_level: 400,
  },
  {
    name: 'Yoda',
    role: 'Jedi Master',
    universe: 'Star Wars',
    weapon: 'The Force',
    power_level: 900,
  },
  {
    name: 'Mal Reynolds',
    role: 'Captain',
    universe: 'Firefly',
    weapon: 'pistol',
    power_level: 160,
  },
  {
    name: 'Spock',
    role: 'First Mate',
    universe: 'Star Trek',
    weapon: 'Logic',
    power_level: 170,
  },
  {
    name: 'R2-D2',
    role: 'Ship`s Robot',
    universe: 'Star Wars',
    weapon: 'Data Probe',
    power_level: 250,
  },
  {
    name: 'Lore',
    role: 'Villain',
    universe: 'Star Trek',
    weapon: 'Intellect',
    power_level: 800,
  },
];

// ----------------------------------------------------------

// COMBINED PRACTICE 1

// Create an array containing only the names of Captains from all universes.

const charactersNames = characters.map((char) => char.name);

console.log(charactersNames);
// [
//  'Marvin the Paranoid Android',
//  'Jabba the Hut',
//  'Zoë Alleyne Washburne',
//  'Peter Venkman',
//  'Kathryn Janeway',
//  'Dr. Daniel Jackson',
//  'Q',
//  'Boba Fett',
//  'Yoda',
//  'Mal Reynolds',
//  'Spock',
//  'R2-D2',
//  'Lore'
// ]

// ----------------------------------------------------------

// COMBINED PRACTICE 2

// Group all characters by universe in a multidimensional array

const charactersByUniverseObject = characters.reduce((acc, curr) => {
  const universeValue = acc[curr.universe];
  if (universeValue) {
    universeValue.push(curr);
  } else {
    acc[curr.universe] = [curr];
  }
  return acc;
}, {});

const charactersByUniverse = Object.values(charactersByUniverseObject);

console.log(charactersByUniverse);
// [ [ { name: 'Marvin the Paranoid Android',
//       role: 'First Mate',
//       universe: 'Hitchhikers Guide to the Galaxy',
//       weapon: 'severe depression',
//       power_level: 1000 } ],
//   [ { name: 'Jabba the Hut',
//       role: 'villain',
//       universe: 'Star Wars',
//       weapon: 'henchmen',
//       power_level: 200 },
//     { name: 'Boba Fett',
//       role: 'Bounty Hunter',
//       universe: 'Star Wars',
//       weapon: 'EE-3 carbine rifle',
//       power_level: 400 },
//     { name: 'Yoda',
//       role: 'Jedi Master',
//       universe: 'Star Wars',
//       weapon: 'The Force',
//       power_level: 900 },
//     { name: 'R2-D2',
//       role: 'Ship`s Robot',
//       universe: 'Star Wars',
//       weapon: 'Data Probe',
//       power_level: 250 } ],
//   [ { name: 'Zoë Alleyne Washburne',
//       role: 'First Mate',
//       universe: 'Firefly',
//       weapon: 'Winchester Model 1892 rifle',
//       power_level: 160 },
//     { name: 'Mal Reynolds',
//       role: 'Captain',
//       universe: 'Firefly',
//       weapon: 'pistol',
//       power_level: 160 } ],
//   [ { name: 'Peter Venkman',
//       role: 'Ghostbuster',
//       universe: 'Ghostbusters',
//       weapon: 'proton pack',
//       power_level: 120 } ],
//   [ { name: 'Kathryn Janeway',
//       role: 'Captain',
//       universe: 'Star Trek',
//       weapon: 'Wit',
//       power_level: 140 },
//     { name: 'Q',
//       role: 'God/Eternal',
//       universe: 'Star Trek',
//       weapon: 'Whatever he wants',
//       power_level: 1000 },
//     { name: 'Spock',
//       role: 'First Mate',
//       universe: 'Star Trek',
//       weapon: 'Logic',
//       power_level: 170 },
//     { name: 'Lore',
//       role: 'Villain',
//       universe: 'Star Trek',
//       weapon: 'Intellect',
//       power_level: 800 } ],
//   [ { name: 'Dr. Daniel Jackson',
//       role: 'Archeologist',
//       universe: 'Stargate',
//       weapon: 'Zat gun',
//       power_level: 120 } ] ]

// ----------------------------------------------------------

// COMBINED PRACTICE 3

// Create an array containing characters' names who are the only character listed in their universe.

const uniqueValues = charactersByUniverse
  .filter((array) => array.length === 1)
  .map(([value]) => value.name);

console.log(uniqueValues);
// [ 'Marvin the Paranoid Android',
//   'Peter Venkman',
//   'Dr. Daniel Jackson'
// ]

// ----------------------------------------------------------

// COMBINED PRACTICE 4

// What is the average power level across all characters?

const sumPower = characters.reduce((acc, curr) => acc + curr.power_level, 0);

const averagePower = sumPower / characters.length;

console.log(averagePower);
// 416.9230769230769
