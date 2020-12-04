const fs = require('fs');
const records = [];
const input = fs.readFileSync('./day_2/input.txt', 'utf-8').split('\n');

input.forEach(line => {
  const policy = line.split(': ')[0];
  const password = line.split(': ')[1];
  const limits = policy.split(' ')[0].split('-').map(str => Number(str));
  const letter = policy.split(' ')[1]
  const record = {
    policy: { limits, letter },
    password
  }
  records.push(record);
});

function filterEmpty(record) {
  if (record.password && record.policy) {
    return true;
  }
  return false;
}

// Part 1
function validate(record) {
  const count = record.password.split('').filter(c => c === record.policy.letter).length;
  if (count >= record.policy.limits[0] && count <= record.policy.limits[1]) {
    return true;
  }
  return false;
}

console.log(records.filter(filterEmpty).filter(validate).length);

// Part 2
function strictValidate(record) {
  const positions = record.policy.limits;
  const validateOccurrence = (position) => record.password[position-1] === record.policy.letter;
  if (positions.filter(validateOccurrence).length === 1) {
    return true;
  }
  return false;
}

console.log(records.filter(filterEmpty).filter(strictValidate).length);
