function sumFor(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i];
  }
  return total;
}

function sumWhile(data) {
  let total = 0;
  let i = 0;
  while (data[i] != null) {
    total += data[i];
    i++;
  }
  return total;
}

function sumRecursion(data, index) {
  if (data[index] == null) {
    return 0;
  }
  return data[index] + sumRecursion(data, index + 1);
}

function sumTheSimpleWay(data) {
  return _.reduce(data, (function (memo, num) { return memo + num; }));
}

const test = [1, 2, 3, 4, 5];
console.log(sumFor(test));
console.log(sumWhile(test));
console.log(sumRecursion(test, 0));
console.log(sumTheSimpleWay(test));
