const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((sum, num) => sum + num, 0)
};

const multiply = function(arr) {
	return arr.reduce((mul, num) => mul*num, 1)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(n) {
	ans = 1;
  for (let i = 1; i <= n; i++) {
    ans *= i;
  }
  return ans
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
