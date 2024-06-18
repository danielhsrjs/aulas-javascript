let cliqueNum = document.createElement('p');
let valor = 0;
let tamanho = 20;
cliqueNum.innerHTML = 0;
document.body.appendChild(cliqueNum);

const imgTamanho = document.getElementById('biscoito');
let cookie = document.querySelector("#biscoito");

cookie.addEventListener("click", () => {
    tamanho += 0.1;
    imgTamanho.style.width = tamanho + '%';
    valor++;
    cliqueNum.innerHTML = valor;
})
