let animal1 = {
    especie: "Cachorro",
    cor: "branco",
    anosDeVida: 6,
    tipo: "mamifero",
    especificos: {
        corre: true,
        voa: false,
        tempoDeVida: 16,
    }
}

let animal2 = {
    especie: "Elefante",
    cor: "cinza",
    anosDeVida: 26,
    tipo: "mamifero",
    especificos: {
        corre: false,
        voa: false,
        tempoDeVida: 48,
    }
}

let animal3 = {
    especie: "Tucano",
    cor: "preta",
    anosDeVida: 10,
    tipo: "omnivoro",
    especificos: {
        corre: false,
        voa: true,
        tempoDeVida: 20,
    }
}

let {
    especie,
    anosDeVida,
    cor
} = animal3;

console.log(especie);
console.log(anosDeVida);
console.log(cor);

/*console.log(`Animal 1 - Tipo: ${animal1.tipo}`);
console.log(`Animal 1 - Corre: ${animal1.especificos.corre}`);
console.log(`Animal 1 - Voa: ${animal1.especificos.voa}`);

console.log(`Animal 2 - Tipo: ${animal2.tipo}`);
console.log(`Animal 2 - Corre: ${animal2.especificos.corre}`);
console.log(`Animal 2 - Voa: ${animal2.especificos.voa}`);

console.log(`Animal 3 - Tipo: ${animal3.tipo}`);
console.log(`Animal 3 - Corre: ${animal3.especificos.corre}`);
console.log(`Animal 3 - Voa: ${animal3.especificos.voa}`);*/