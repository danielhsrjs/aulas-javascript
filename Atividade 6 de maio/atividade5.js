let idade = Number(prompt("Quantos anos você tem?"));

if (idade < 18) {
    alert("Você é menor de idade, o que você está fazendo aqui?");
} else if ((idade >= 18) && (idade < 60)) {
    alert("Você é adulto, meus pêsames.");
} else if (idade >= 60) {
    alert("Você é um idoso.");
}