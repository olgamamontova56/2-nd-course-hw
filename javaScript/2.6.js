// // Задание 1 

// const numbs = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbs.length; i++) {
//   if ( numbs[i] == 10)
//   break;
// console.log(numbs [i]);
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
// num.push( 2, 2, 2);
// console.log(num);


// // Задание 6
// let num = [9, 8, 7, 'a', 6, 5];
// num.sort().pop()
// console.log(num);

// // Задание 7 
// let number = +prompt ('Ведите число');
// let num = [9, 8, 7, 6, 5];

// if (num.includes(number)) {
//     alert ('угадал');
// } else {
//     alert ('не угадал');
// }


// // // Задание 8 
// let row = 'abcdef';
// console.log([...row].reverse().join('') );

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
// let result = number.map (el => el ** 2);
// console.log(result);


// Задание 12
// const getLengthWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];
// let result = getLengthWords.map (el => el.length);
// console.log(result);


// Задание 13
// const  filterPositive = [-1, 0, 5, -10, 56]; 
// let result = filterPositive.filter (i => i < 0);
// console.log(result);

// 2 вариант
// function negativ (number) {
//   const result = [];
//   for( let i = 0; i < number.length; i++) {
//     if(number [i] < 0 ) {
//       result.push(number [i]);
//     }  
//   }
// return result;

// }
// const filterPositive  = [-25, 25, 0, -1000, -2]; 
// console.log(negativ(filterPositive));
