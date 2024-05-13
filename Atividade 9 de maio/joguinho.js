var numerocerto = Math.floor(Math.random() * 10);
var numeroseu = parseInt(prompt(`Digite um número de 0 a 10. (Dica: é maior que ${numerocerto - 1})`));

if (numeroseu == numerocerto) {
    alert("Parabéns! Você acertou!");
} else alert("Errou!");

