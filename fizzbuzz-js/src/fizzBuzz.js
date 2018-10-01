// function fizzbuzz(num) {
//
//   for (i = 1; i <= num; i++){
//     if (i % 3 == 0  &&  i % 5 == 0){
//
//     }
//     else if ( i % 3 == 0 ){
//       console.log("Fizz");
//     }
//     else if (i % 5 == 0 ) {
//       console.log("Buzz");
//     }
//     else {
//       console.log(i);
//     }
//   }
// }

// fizzbuzz(100)
function FizzBuzz() {
  this.isDivisibleByThree = function(num) {
    return num % 3 === 0
  };
  this.isDivisibleByFive = function(num) {
    return num % 5 === 0
  };
  this.isDivisibleByBoth = function(num) {
    return num % 15 === 0
  };
  this.fizzbuzzNumber = function(num) {
    if (this.isDivisibleByBoth(num) == true){
      return "FizzBuzz";
    } else if (this.isDivisibleByThree(num) == true) {
      return "Fizz";
    } else if (this.isDivisibleByFive(num) == true) {
      return "Buzz";
    } else {
      return num;
    }
  }
  this.playFizzBuzz = function(num) {
    let fizzbuzzResult = [];
    for (i = 1; i <= num; i++){
      fizzbuzzResult.push(this.fizzbuzzNumber(i));
    }
    return fizzbuzzResult;
  }
}
