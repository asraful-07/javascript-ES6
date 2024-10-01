const arr1 = [1, 3, 4 ];

const arr2 = [...arr1]
arr2.push(2);

arr1.push(1);
// console.log(arr2);
// console.log(arr1);

// Example:2
// const names = ['tom', 'jom', 'lom', 'gom'];
// const num1 = names[1];

const [,y] = ['tom', 'jom', 'lom', 'gom'];

console.log(y);