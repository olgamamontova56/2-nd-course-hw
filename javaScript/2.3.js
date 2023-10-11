// // Задание 1
// let user = prompt ('введите пароль');
// let password = '123';
// if (password === user) {
//     alert ('пароль введен верно');
// } else {
//     alert ('пароль введен неправильно')
// }

// // Задание 2
// let c = 3;
//  console.log ((c >= 0 && c <= 10)? 'верно' : 'неверно');

// // // Задание 3
// let d=30;
// let e=560;
// console.log ((d > 100 || e > 100 )? 'верно' : 'неверно');

// // Задание 4
// let a = '2';
// let b = '3';
// alert (Number(a) + Number(b));

// Задание 5

let monthNumber = Number(prompt("введите число месяца для определения сезона"));
switch (monthNumber) {
  case 1:
  case 2:
  case 12:
    alert("зима");
    break;
  case 3:
  case 4:
  case 5:
    alert("весна");
    break;
  case 6:
  case 7:
  case 8:
    alert("лето");
    break;
  case 9:
  case 10:
  case 11:
    alert("осень");
    break;
   default : 
   alert ('такого месяца не существует '); 
   break; 
}
