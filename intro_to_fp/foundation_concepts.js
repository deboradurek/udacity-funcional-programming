// Directions: Translate from normal function to pure function
const greetingHello = 'Hello';

const greet = (greeting, name) => {
  return `${greeting}, ${name}.`;
};

console.log(greet(greetingHello, 'Arthur'));
console.log(greet(greetingHello, 'Guinevere'));
