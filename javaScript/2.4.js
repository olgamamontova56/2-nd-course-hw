//Задание 1

let n = 0;
while ( n < 2) {
    console.log('Привет');
    n++
}

//Задание 2
 let n = 1; 
 while ( n <= 5 ) {
    console.log(n);
    n++;
 }

//Задание 3
let n = 7;
while (n<=22) {
    console.log(n);
    n++
}

//Задание 4

const obj = { 
Коля: '200',
Вася: '300',
Петя: '400'
}
for ( let key in obj ) {
    console.log(`${key} - зарплата ${obj [key]} долларов` );
}

// // //Задание 5
let n = 1000;
let num = 0;
 while ( n >= 50 ) { 
   n /= 2; 
   num++
 }
 console.log(n);
 console.log(num);
 

//Задание 6
 let friday = 5;
 for (let i = friday; i <= 31; i+=7 ) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет`);
 }