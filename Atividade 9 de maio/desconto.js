let valor = 100;
let desconto = 0;

let code_ = prompt("Digite um código de desconto. (Códigos válidos: DESC1, DESC2, DESC3, DESC4, DESC5)");

switch (code_) {
    case "DESC1": {
        desconto = 0.05;
        valor = valor - (valor * desconto);
        break;
    }
    case "DESC2": {
        desconto = 0.1;
        valor = valor - (valor * desconto);
        break;
    }
    case "DESC3": {
        desconto = 0.15;
        valor = valor - (valor * desconto);
        break;
    }
    case "DESC4": {
        desconto = 0.2;
        valor = valor - (valor * desconto);
        break;
    }
    case "DESC5": {
        desconto = 0.25;
        valor = valor - (valor * desconto);
        break;
    }

    default: {
        alert("Por favor insira um valor válido.");
        break
    }
}

alert(`O preço agora é: RS$${valor}`)