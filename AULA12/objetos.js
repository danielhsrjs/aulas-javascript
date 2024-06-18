let celular = {
    modelo: "A11",
    marca: "Samsung",
    preco: 700,
    memoria: "4GB"
};

class Celular {
    constructor (modelo, marca, memoria) {
        this.modelo = modelo;
        this.marca = marca;
        this.memoria = memoria;
    }
}

class CelularGamer extends Celular {
    constructor(modelo, marca, memoria, tela, rgb) {
        super(modelo, marca, memoria);
        this.tela = tela;
        this.rgb = rgb;
    }
}

class GamerPremium extends CelularGamer {
    constructor(modelo, marca, memoria, tela, rgb, cooler) {
        super(modelo, marca, memoria, tela, rgb, cooler)
        this.cooler = cooler;
    }
}

let cel1 = new CelularGamer("POCO 6Pro", "Xiaomi", "128gb", "120h", false);
let cel2 = new GamerPremium("RedMagicPro", "Nubia", "32GB", "240hz", true, true);

console.log(cel1)
console.log(cel2)