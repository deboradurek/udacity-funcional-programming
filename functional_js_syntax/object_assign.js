// Merge another character into this state. Keep at least one value and change at least one value

let state = {
  name: 'Wash',
  ship: {
    name: 'Serenity',
    class: 'Firefly',
  },
  role: 'Pilot',
  favoriteThing: {
    item: 'Toy',
    details: {
      type: 'Toy Tyrannosaurus Rex',
    },
  },
};

const incomingState = {
  name: 'Mal',
  role: 'Captain',
  favoriteThing: {
    item: 'Not complicated',
  },
  history: ['Browncoat sergeant'],
};

state = Object.assign(state, incomingState);

const anotherState = {
  name: 'Sterling',
  series: 'Amazon Prime',
};

state = Object.assign(state, anotherState);
// {
//  name: 'Sterling',
//  ship: { name: 'Serenity', class: 'Firefly' },
//  role: 'Captain',
//  favoriteThing: { item: 'Not complicated' },
//  history: [ 'Browncoat sergeant' ],
//  series: 'Amazon Prime'
// }
