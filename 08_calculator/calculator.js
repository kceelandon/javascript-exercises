const add = function(first, second) {
  return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0;
  }
	return arr.reduce((total, curr) => {
    return total + curr;
  });
};

const multiply = function(arr) {
  return arr.reduce((total, curr) => {
    return total * curr;
  })
};

const power = function(first, second) {
	return first ** second;
};

const factorial = function(num) {
  if (num <= 0) {
    return 1;
  }
  let total = num;
  num--;
	while (num > 0) {
    total *= num;
    num--;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
