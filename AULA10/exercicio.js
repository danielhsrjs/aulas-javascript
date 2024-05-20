let alunos = ["João", "Gustavo", "Diogo", "Miguel"];

console.log("-------------------------------------");

alunos.forEach((nome, numero, sala)=>{
    console.log(`Olá aluno, seu nome é ${nome}`)
    console.log(`Seu número na sala é ${numero}`)
    console.log(`Na sua sala há os seguintes alunos: ${sala}`)
    console.log("-------------------------------------")
})