let paragrafo = document.getElementById("paragrafitos");

paragrafo.innerText = "sans"

let paragrafo2 = document.querySelector("#jonas");

paragrafo2.innerText = "aaa"

let paragrafo3 = document.querySelectorAll(".joao");

paragrafo3.forEach(paragrafo1 => {
    paragrafo1.textContent = 'dudu';
})

// SelectorAll = Cria um array baseado na classe listando tudo que está dentro dela
// usa-se forEach e textContent para alterar determinados valores e strings 