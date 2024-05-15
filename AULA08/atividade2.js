//Exercício 2
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Criando um array apenas com números pares
let numerosPares = [];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        numerosPares.push(numeros[i]);
    }
}
console.log(`Array com apenas números pares: ${numerosPares}.`);

//Criando um loop "do-while" que solicite que o usuário insira sua idade
let idade;
do {
    idade = parseInt(prompt("Por favor insira sua idade:"));
} while (idade <= 0);

alert(`Idade inserida: ${idade}`);