const fizzbuzz = require('./fizzbuzz')
describe('fizzbuzz', () => {
    it('fizzbuzz 3', () => {
        expect(fizzbuzz(3)).toBe('Fizz');
    });
   it('fizzbuzz 5', () => {
       expect(fizzbuzz(5)).toBe('Buzz');
   })
   it('fizzbuzz 15', () => {
       expect(fizzbuzz(15)).toBe('FizzBuzz');
   })
   it('fizzbuzz 8', () => {
       expect(fizzbuzz(8)).toBe(8);
   })
});