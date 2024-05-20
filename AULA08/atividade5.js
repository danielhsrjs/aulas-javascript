let pessoa = {
    nome: "Maria",
    idade: 25,
    cidade: "Rio de Janeiro"
};

while (pessoa.idade < 30) {
    console.log(`Essa pessoa tem ${pessoa.idade} anos.`);   
    pessoa.idade++;
}