// // Задание 1 

// const num = [1, 5, 4, 10, 0, 3];
// for (let item of num) {
//   if (item === 10) {
//     console.log(item);
//     break;
//   }
//   console.log(item);
// }


// // // Задание 2
// const num = [1, 5, 4, 10, 0, 3];
// let index = num.indexOf (4);
// console.log(index);
// console.log( num[2]);


// // Задание 3
// const numb = [1, 3, 5, 10, 20];
// let item =  numb.join ('');
// console.log(item);


// // Задание 4
// const result = []; 
// for (let i = 0; i < 3; i++) {
//   result[i] = [];
//   for (let j = 0; j < 3; j++) {
//     result [i] [j] =1
//   }
// }
// console.log(result);


// // Задание 5
// const num = [ 1, 1, 1]
// num [num.length ] = 2;
// console.log(num);
// num [num.length ] = 2;
// num [num.length ] = 2;
// console.log(num);


// // Задание 6
// const num = [9, 8, 7, 'a', 6, 5];
// let number = num.sort();
// console.log( number);

// let index = num.indexOf ('a');
// num.splice (index, 5);
// console.log(num);


// // Задание 7 
// let number = Number( prompt ('Ведите число'));
// let num = [9, 8, 7, 6, 5];

// if (num.includes(number)) {
//     alert ('угадал');
// } else {
//     alert ('не угадал');
// }


// // // Задание 8 
// let row = ['abcdef'];
// let arrRow =  row.split('').reverse().join('');
// console.log(`'${arrStr}'`);


// // Задание 9
// const arr= [
//     [1, 2, 3],
//     [4, 5, 6]
// ];
// console.log(arr.flat());


// Задание 10
// let arr = [3, 5, 2, 10, 1];
// for ( let i = 0; i < arr.length -1; i++){
// console.log(arr [i] + arr [i+1] );
// }


// // Задание 11
// const number = [ 2, 4, 5, 1];
// let result = number.map (el => console.log(el ** 2));


// Задание 12
// const getLengthWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];
// let result = getLengthWords.map (el => console.log(el.length));


// Задание 13
// const  filterPositive = [-1, 0, 5, -10, 56]; 
// let result = filterPositive.filter (i => i < 0);
// console.log(result);

// const filterPositive1  = [-25, 25, 0, -1000, -2]; 
// let result1 = filterPositive1.filter (i => i < 0);
// console.log(result1); 
