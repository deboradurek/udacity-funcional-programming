// 1. Take this disjointed sentence and turn it into a single string
const text = [
  'The ships',
  'hung in the sky,',
  'much the way',
  'that bricks don`t',
];

const sentence = text.reduce((acc, words) => `${acc} ${words}`);

console.log(sentence);
// The ships hung in the sky, much the way that bricks don`t

// ----------------------------------------------------------

// 2. Return the winning team
const scores = [
  {
    team: 'A',
    score: 20,
  },
  {
    team: 'B',
    score: 17,
  },
  {
    team: 'C',
    score: 23,
  },
  {
    team: 'D',
    score: 13,
  },
];

const maxScore = scores.reduce((prev, curr) =>
  prev.score > curr.score ? prev : curr,
).team;

console.log(maxScore);
// C

// ----------------------------------------------------------
//    REAL LIFE EXAMPLE
// Reduce can sometimes save us a lot of time -- if we remember to use it.
// Instead of writing a complicated map or filter method and then calling the
// name of the ship out of the retuned array, Return the name of the fastest
// star ship

const ships = [
  {
    name: 'Serenity',
    speed: '4.2G',
  },
  {
    name: 'Cylon Raider',
    speed: '7.5G',
  },
  {
    name: 'Swordfish II',
    speed: '50G',
  },
  {
    name: 'Tie Fighters',
    speed: '4100G',
  },
];

const fastestStarShip = ships.reduce((prev, curr) => {
  const speedToNumber = Number(curr.speed.slice(0, -1));
  curr.speed = speedToNumber;
  return prev.speed > curr.speed ? prev : curr;
}).name;

console.log(fastestStarShip);
// Tie Fighters
