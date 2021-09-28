function exercise8() {
  // Exercise 8
  //
  // Write a program that will output the sum of all of the multiples of four
  // between 0 and 5000
  //
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  let count = 0;
  while(count !== 5000){
    let total = count * 4;
    console.log(total);
    count += 1;
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
exercise8();
// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-8

module.exports = exercise8;
