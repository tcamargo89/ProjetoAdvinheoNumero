"use strict";
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Número Correto';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 9;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let hisghscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); //document.querySelector('.guess').value pega o valor do input, como esse valor é retornado como uma string temos que transformar em número, por isso usamos o Number() e armazenamos na variável guess
  console.log(guess, typeof guess);

  //quando nao tem valor no input
  if (!guess || guess < 0) {
    //ira retornar um valor zero, como é sabido zero é um valor falso, entao usamos a negativa ! para que esse valor false seja verdadeiro e entre no if, sacou a jogada!!!
    // document.querySelector(".message").textContent = "Insira um número válido".
    displayMessage("Insira um número válido");

    //quando o jogador ganha
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Valor CORRETO!";
    displayMessage("Valor CORRETO!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > hisghscore) {
      hisghscore = score;
      document.querySelector(".highscore").textContent = hisghscore;
    }
    // Quando o valor for diferente do correto - esse campo foi refatorado
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? "Muito Baixo" : "Muito alto");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Fim de Jogo");
      document.querySelector(".score").textContent = 0;
    }
  }

  //quando o valor é muito baixo
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Muito Baixo";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "Fim de Jogo";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   //quando o valor é muito alto
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Muito Alto";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "Fim de Jogo";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

//botao reset
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = ""; //dessa forma consigo atribuir um valor vazio
  document.querySelector(".message").textContent = "Chute um Número...";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
});
