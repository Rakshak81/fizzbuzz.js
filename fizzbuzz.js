const fizzbuzz = (number) => {
  if( number % 3 === 0) {
      return 'Fizz';
  } else if(number % 5 === 0) {
      return 'Buzz';
  }
}

module.exports = fizzbuzz;