const numbers = [1, 5, 6, 4, 15];

const result = numbers.reduce((prevValue, curValue) => prevValue + curValue, 0);
console.log(result);