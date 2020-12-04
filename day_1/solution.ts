const fs = require('fs');
const numbers = [];
const input = fs.readFileSync('./day_1/input.txt', 'utf-8').split('\n');
input.forEach(s => numbers.push(Number(s)));


// Part 1
for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] + numbers[j] == 2020) {
      console.log('Found you!', numbers[i], numbers[j])
      console.log('Result: ', numbers[i] * numbers[j]);
    }
  }
}


// Part 2
for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    for (let k = j + 1; k < numbers.length; k++) {
      if (numbers[i] + numbers[j] + numbers[k] === 2020) {
        console.log('Found you!', numbers[i], numbers[j], numbers[k])
        console.log('Result: ', numbers[i] * numbers[j] * numbers[k]);
      }
    }
  }
}
