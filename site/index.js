const findSeason = (a) => {
    if (isNaN(a) || a <= 0 || a >= 13 ) {
        do {
            alert (' вы ввели не коректное значение');
            a = Number( prompt('введите номер месяца'))
        } while (isNaN(a) || a <= 0 || a >= 13);
    }
    if (a === 1 || a === 2 || a === 12) {
        return 'Зима'; 
    } else if ( a >= 3 && a <= 5) {
        return 'Весна';
    } else if ( a >= 6 && a <= 8) {
        return 'Лето'; 
    } else {
        return 'Осень'
    }
}
const firstPlayGame = () => {
    alert ('Начнем?');
    let monthNumber = Number(prompt ('Введите номер месяца'));
    alert (findSeason( monthNumber))
}