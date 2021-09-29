function exercise6_5() {
  // Exercise 6.5
  //
  // Write a loop that will iterate from 0 to 10.
  // For each iteration, it should check whether a number is even or odd
  // and display that state along with the number.
  // e.g.
  // 0 is even
  // 1 is odd
  // 2 is even
  // ...
  // many other possibilities here.
  //
  // Use interpolation to build your output string
  // e.g. `${number} is odd`
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  let number = 0;
while (number <= 10){
  if (number % 2 === 0){
    console.log(`${number} is even.`);
    number += 1;
  } else{
    console.log(`${number} is odd`);
    number += 1;
  }
}
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}
exercise6_5();
// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-6.5

module.exports = exercise6_5;
