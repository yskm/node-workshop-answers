const max = process.argv[2];

let FizzBuzz = function*(){
  let currentValue = 1;
  while (currentValue <= max) {
    var value = (currentValue%15)? (currentValue%5)? (currentValue%3)? currentValue: 'Fizz': 'Buzz' : 'FizzBuzz';
    currentValue++;
    yield value;
  }
}();

for (var n of FizzBuzz) {
  console.log(n);
}
