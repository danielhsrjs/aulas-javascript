let listaDeClientes = [];
let continuar = 1;

while(continuar == 1) {
    let clientes = prompt("Insira um cliente para sua empresa");
    listaDeClientes.push(clientes);
    let terminado = parseInt(prompt("Deseja continuar? (0 para não, 1 para sim)"));
    continuar = terminado;
}

alert(`Certo! Então na sua empresa os clientes são: ${listaDeClientes}`)