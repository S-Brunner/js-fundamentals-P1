function exercise9() {
  // Exercise 9
  //
  // Write a program that goes through every number from 1 to 100, and follows the following rules:
  //   - If the number is divisible by 3 (eg. 6), print "Fizz"
  //   - If the number is divisible by 5 (eg. 10), print "Buzz"
  //   - If the number is divisible by 3 AND 5 (eg. 15), print "FizzBuzz"
  //   - For all other numbers, print the number itself.
  // e.g.
  //
  // 1
  // 2
  // Fizz
  // 4
  // Buzz
  // Fizz
  // 7
  // 8
  // Fizz
  // Buzz
  // 11
  // Fizz
  // 13
  // 14
  // FizzBuzz
  // 16
  // ...
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  let count = 1;
while (count !== 101) {
  if (count % 3 === 0 && count % 5 === 0) {
    console.log("FizzBuzz");
    count += 1;
  } if (count % 5 === 0) {
    console.log("Buzz");
    count += 1;
  }
    else if(count % 3 === 0) {
    console.log("Fizz");
    count += 1;
    } 
  else {
    console.log(count);
    count += 1;
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

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-9
exercise9();
module.exports = exercise9;
