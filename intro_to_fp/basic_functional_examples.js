// -----------------------------------------------------------------
// Exercise 1
// Directions: Write a pure function that prints "good afternoon" if
//       it's afternoon and "good morning" any other time of the day.
// Hint - this will help with time of day: new Date().getHours()
// -----------------------------------------------------------------
const dayGreeting = () => {
  const currentHour = new Date().getHours();

  if (currentHour >= 12 && currentHour < 17) {
    return 'Good Afternoon!';
  } else {
    return 'Good Morning!';
  }
};

// -----------------------------------------------------------------
// Exercise 2
// Directions: Write a pure function that takes in a number and
//       returns an array of items counting down from that number to
//       zero.
// -----------------------------------------------------------------
const countNumberDown = (number) => {
  let countArray = [];
  for (let i = 0; i <= number; i++) {
    countArray.push(number - i);
  }
  return countArray;
};
