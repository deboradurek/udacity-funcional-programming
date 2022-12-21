// 1. Write a map function to reverse this array:
const start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reverseArray = (array) =>
  array.map((_, index) => array[array.length - 1 - index]);

console.log(reverseArray(start));
// [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

// ----------------------------------------------------------
// 2. Write a map function to print the Job: Name:
const shipMates = [
  ['Mal', 'Captain'],
  ['Wash', 'Pilot'],
  ['Zoey', '1st Mate'],
  ['Jayne', 'Public Relations'],
];

const JobName = shipMates.map((item) => `${item[1]}: ${item[0]}`);

console.log(JobName);
// [ 'Captain: Mal','Pilot: Wash','1st Mate: Zoey','Public Relations: Jayne' ]

// ----------------------------------------------------------
// 3. Write a map function that prints the name: even|odd
const awayTeam = ['Picard', 'Riker', 'Troy', 'Data'];

// your code
const evenOdd = awayTeam.map((name, index) => {
  if (index % 2 === 0) {
    return `${name}: even`;
  } else {
    return `${name}: odd`;
  }
});

console.log(evenOdd);
// [ 'Picard: even', 'Riker: odd', 'Troy: even', 'Data: odd' ]

// ----------------------------------------------------------
// 4. Create a multidimensional array of each item and its index in the original Array.

const sci_fi_shows = [
  'Manedlorian',
  'Enterprise',
  'Firefly',
  'Battlestar Galactica',
];

const sciFiWithIndex = sci_fi_shows.map((show, index) => [show, index]);

console.log(sciFiWithIndex);
// [ [ 'Manedlorian', 0 ],[ 'Enterprise', 1 ],[ 'Firefly', 2 ],[ 'Battlestar Galactica', 3 ] ]

// ----------------------------------------------------------
// 5. For each item in this array, create a multidimensional array containing the entire original array.

const numbers = [1, 2, 3, 4];

const allNumbers = numbers.map(() => numbers);

console.log(allNumbers);
// [ [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ] ]
