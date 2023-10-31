// // // Задание 1 

// let str = 'js'; 
// str = str.toUpperCase();
// console.log(str);

// // Задание 2
 
// function search (arr, str) {
//  const result = [];
//  for ( let i = 0; i < arr.length; i ++) {
//     const item = arr[i].toLowerCase();
//     if (item.startsWith(str.toLowerCase())){ 
// result.push (arr [i]); 
//     }
//  }
// return result;
//  }

// console.log(search(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
// console.log(search(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
// console.log(search(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));


// // Задание 3

// console.log(Math.ceil (32.58884)); 
// console.log(Math.floor (32.58884)); 
// console.log(Math.round (32.58884)); 


// // Задание 4

// console.log( Math.max (52, 53, 49, 77, 21, 32));
// console.log( Math.min (52, 53, 49, 77, 21, 32));

// // или 
// const num = [52, 53, 49, 77, 21, 32]; 
// const min = Math.min(...num)
// const max = Math.max(...num)
// console.log( `минимальное число: ${min} `);
// console.log( `максимальное число: ${max} `);


// // Задание 5

// function getRandom (min, max) {
//     return Math.floor (Math.random () * (max - min)) + min;
// }
// console.log(getRandom (1, 10));


// // Задание 6
// function getRandomArr (n) {
// const result = [];
// for ( let i = 0; i < n/2; i++){ 
//  result.push(Math.floor(Math.random() * (n)));
// }
// return result
// }
// console.log(getRandomArr (7));


// // Задание 7
// function getRandom (min, max) {
//     return Math.floor (Math.random () * (max - min + 1)) + min;
// }
// console.log(getRandom (100, 50));


// // Задание 8
// let currentDate = new Date();
// console.log(currentDate); 


// // Задание 9 
// let currentDate = new Date();
// let fullDate = 73;
// currentDate.setDate(currentDate.getDate() + fullDate);
// console.log(currentDate);


// // Задание 10

// function formatDate (date)  {
// const week = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
// const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
// 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

// const dayOfWeek = week [date.getDay()];
// const day = date.getDate();
// const month = months [date.getMonth()];
// const year = date.getFullYear();
// const hours = date.getHours().toString().padStart(2,'0');
// const minutes= date.getMinutes().toString().padStart(2,'0');
// const seconds = date.getSeconds().toString().padStart(2,'0');

// return `Дата: ${day} ${month} ${year}: ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`

// }

// const currentDate = new Date()
// console.log(formatDate(currentDate));

