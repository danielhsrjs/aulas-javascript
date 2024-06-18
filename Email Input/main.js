let botaoValidar = document.querySelector("#botaoValidar");

botaoValidar.addEventListener("click", () => {
        // expressão que define que um email seja formatado como email@email.com
        let regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let email = document.querySelector("#emailInput").value;
    
        // se passar no teste de comparação
        if (regExEmail.test(email)) {
            document.querySelector("#resultado").innerText = "E-mail válido!";
            document.querySelector("#resultado").style.color = "green";
        } else {
            document.querySelector("#resultado").innerText = "E-mail inválido!";
            document.querySelector("#resultado").style.color = "red"
        }
})
let nomeValidar = document.querySelector("#nomeValidar");

nomeValidar.addEventListener("click", () => {
        // expressão que define que um email seja formatado como email@email.com
        let regExNome = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi;
        let nome = document.querySelector("#nomeInput").value;
    
        // se passar no teste de comparação
        if (regExNome.test(nome)) {
            document.querySelector("#resultadoNome").innerText = "Nome válido!";
            document.querySelector("#resultadoNome").style.color = "green";
        } else {
            document.querySelector("#resultadoNome").innerText = "Nome inválido!";
            document.querySelector("#resultadoNome").style.color = "red"
        }
})

let senhaValidar = document.querySelector("#senhaValidar");

senhaValidar.addEventListener("click", () => {
        // expressão que define que um email seja formatado como email@email.com
        let regExSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
        let senha = document.querySelector("#senhaInput").value;
    
        // se passar no teste de comparação
        if (regExSenha.test(senha)) {
            document.querySelector("#resultadoSenha").innerText = "Senha forte!";
            document.querySelector("#resultadoSenha").style.color = "green";
        } else {
            document.querySelector("#resultadoSenha").innerText = "Senha fraca!";
            document.querySelector("#resultadoSenha").style.color = "red"
        }
})

let celularValidar = document.querySelector("#celularValidar");

celularValidar.addEventListener("click", () => {
        // expressão que define que um email seja formatado como email@email.com
        let regExCelular = /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/;
        let celular = document.querySelector("#celularInput").value;
    
        // se passar no teste de comparação
        if (regExCelular.test(celular)) {
            document.querySelector("#celularSenha").innerText = "Número válido!";
            document.querySelector("#celularSenha").style.color = "green";
        } else {
            document.querySelector("#celularSenha").innerText = "Número inválido!";
            document.querySelector("#celularSenha").style.color = "red"
        }
})