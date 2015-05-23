const max = process.argv[2];

let FizzBuzz = {
	[Symbol.iterator]() {
		let currentValue = 1;

		return {
			next() {
				if (currentValue > max) {
					return {done: true};
				}
				var value = (currentValue%15)? (currentValue%3)? (currentValue%5)? currentValue: 'Buzz': 'Fizz' : 'FizzBuzz';
				currentValue++;
				return {
					done: false,
					value: value
				}
			}
		}
	}
}

for (var n of FizzBuzz) {
	console.log(n);
}