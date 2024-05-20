let repetir = parseInt(prompt("Diga um número de 1 a 15: "));

let primeiro = 0;
let segundo = 1;
let proximo = 0;
let contador = 0;

let resultado = [];
while (contador < repetir) {
    console.log(primeiro);
    resultado.push(primeiro);
    proximo = primeiro + segundo;
    primeiro = segundo;
    segundo = proximo;
    contador++;

}

alert(`Parabéns, a sequência é: ${resultado}`)
console.log(resultado)