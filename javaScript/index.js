// Задание 1
let a = 10;
alert (a);

let a = 20;
alert (a);

// Задание 2
const year = 2007;
alert (year);

// Задание 3
const nameJavaScript = 'Brendan Eich';
alert (nameJavaScript);

// Задание 4
let a = 10;
let b = 2;
alert (a+b);
alert (a-b);
alert (a*b);
alert (a/b);

// Задание 5
let a = 2;
let result (2**5);
alert (result);

// Задание 6
let a = 9;
let b = 2;
alert (a%b);

// Задание 7
let num = 1;
alert (num+=5);
alert (num-=3);
alert (num*=7);
alert (num/=3);
alert (num+=1);
alert (num-=1)


// Задание 8
let age = Number (prompt('Сколько вам лет?'));
alert (age);

// Задание 9
const user = {
    name: 'Olga',
    age: 30,
    isAdmin: true
}

// Задание 9.1

user.cityOfResidence = 'Novokuznetsk';

// Задание 9.2
user.age =34;

// Задание 9.3
delete cityOfResidence;  

// Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?" );
console.log (user[info]);
alert (info);

// Задание 10
let name = prompt (`ваше имя`);
alert (`привет ${name} !`)