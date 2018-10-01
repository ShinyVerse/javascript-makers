describe('fizzBuzz', function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe('knows when a number is', function(){
    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByBoth(15)).toBe(true);
    });
  });

  describe('will return Fizz/Buzz/FizzBuzz', function() {
    it('will return FizzBuzz when number divisible by 3 and 5 (15) ', function() {
      expect(fizzbuzz.fizzbuzzNumber(15)).toEqual("FizzBuzz");
    });

    it('will return Fizz when number divisible by 3', function() {
      expect(fizzbuzz.fizzbuzzNumber(9)).toEqual("Fizz");
    });

    it('will return Buzz when number divisible by 5', function() {
      expect(fizzbuzz.fizzbuzzNumber(20)).toEqual("Buzz");
    });
    it('will return a the number when not divisible by 3 or 5 ', function() {
      expect(fizzbuzz.fizzbuzzNumber(4)).toEqual(4);
    });
  });

  describe('will return an Array based implementation number', function() {
    it('will return number, number, fizz ', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.playFizzBuzz(15)).toEqual([1,2,"Fizz",4,"Buzz", "Fizz",
       7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
    });
  });
});
