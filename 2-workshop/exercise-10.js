function exercise10() {
  // Exercise 10
  //
  // Write a loop that makes seven calls to console.log to
  // output the following triangle:
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  let count = 1;
  let str = "#";
  while (count <= 7){
    console.log(str.repeat(count));
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
exercise10();
// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-10

module.exports = exercise10;
