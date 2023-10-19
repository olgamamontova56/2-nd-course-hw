// // Задание 1 

function number ( a, b) {
return a < b ? a : b ;
 }
  console.log( number (6,6));


// Задание 2

function number (x) {
    if ( x % 2 == 0) {
        return (`Число четное`);
    } else {
        return (`Число не четное`);
    }
} 
console.log( number (40));


// Задание 3
// задание3.1
function printSquare (a) {
    return a ** 2; 
}
console.log( printSquare (5));

// задание3.2
function returnSquare (a) { 
    return a ** 2; 
}
const square = returnSquare( 2)
console.log(square);

// Задание 4 

 function sayHello( ) {
let age = prompt (`Сколько вам лет?`)
    if (age < 0) {
       return (`Вы ввели неправильное значение`);
    } else if (age <= 12) {
            return (`Привет друг`)
        } else {
            return (`Добро пожаловать`)
        }
    }
alert (sayHello ())

// Задание 5
function number( a, b ) {
    if (isNaN(a) || isNaN (b)) {
        return (`Одно или оба значения не являются числом`); 
    } else {
        return a * b;
    }
}
 console.log(number ( 2, 's'));
 console.log(number ( 2, 7 ));

// Задание 6

function cubeNumber () {
    let number = prompt( 'Введите число: ', '' );
    if (isNaN(number)) {
        return ('Переданный параметр не является числом');
    } else {
        let result = number ** 3; 
        return ` ${number} в кубе равняется ${result}`;
    }
}
console.log(cubeNumber ());
  
// Задание 7

let circle1 = { 
    radius: 7, 
    getArea: function() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
}

let circle2 = { 
    radius: 5, 
    getArea: function() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());