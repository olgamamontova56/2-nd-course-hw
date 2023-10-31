function rememberTheWords() {
  const word = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];
  words = word.sort(() => Math.random() - 0.5);

  alert (words);

  let userAnswer1 = prompt("Чему равнялся первый элемент массива?");
  let userAnswer2 = prompt("Чему равнялся последний элемент массива?");

  
  if (userAnswer1.toLowerCase() === words[0].toLowerCase() &&  userAnswer2.toLowerCase() === words[words.length-1].toLowerCase() ) {
    return  alert ('Вы угадали');

  } else if (userAnswer1.toLowerCase() === words[0].toLowerCase() ||  userAnswer2.toLowerCase() === words[words.length-1].toLowerCase() ) {
    return alert ('Вы были близки к победе!');

  } else {
    return alert ('Попробуйте еще раз');
  }

}
