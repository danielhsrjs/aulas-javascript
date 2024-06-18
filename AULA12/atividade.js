class Carro {
    constructor(marca, cor, ano, preco){
        this.marca = marca;
        this.cor = cor;
        this.ano = ano;
        this.preco = preco;
    }

    mensagem() {
        return this.preco;
    }
}

let car1 = new Carro('Chevrolet', 'Preto', '1984', '10 mil reais');
let car2 = new Carro('Volkswagen', 'Azul', '1999', '5 mil reais');

console.log(`O preço do carro é de ${car1.mensagem()}`);
console.log(`O preço deste carro é ${car2.mensagem()}`);