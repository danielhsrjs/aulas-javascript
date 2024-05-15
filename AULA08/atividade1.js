//Exercício 1
console.log("Somando todos os elementos de um array")
let numeros = [1, 2, 3, 4, 5];

let soma = 0;
for (let i = 0; i < numeros.length; i++) { //Até que o valor "i" se torne igual o número de casas no array, ele vai subir em valor
    soma += numeros[i]; //A soma usará o valor de "i" como um guia para obter os números necessários para fazer a soma
}

console.log(`A soma de todos os elementos resulta em ${soma}.`);
console.log("-------------------------------------------------")
console.log("Calculando números pares")

let num = 2;
console.log("Números pares de 2 a 10:");
while (num <= 10) {
    console.log(num);
    num += 2;
}