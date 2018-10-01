describe('fizzBuzz', function() {
  var fizzbuzz;
  describe('knows when a number is', function(){
    it('divisible by 3', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 15', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByBoth(15)).toBe(true);
    });
  });

  describe('will return Fizz/Buzz/FizzBuzz', function() {
    it('will return FizzBuzz when number divisible by 3 and 5 (15) ', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.fizzbuzzNumber(15)).toEqual("FizzBuzz");
    });

    it('will return Fizz when number divisible by 3', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.fizzbuzzNumber(9)).toEqual("Fizz");
    });

    it('will return Buzz when number divisible by 5', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.fizzbuzzNumber(20)).toEqual("Buzz");
    });
    it('will return a the number when not divisible by 3 or 5 ', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.fizzbuzzNumber(4)).toEqual(4);
    });
  });
});
