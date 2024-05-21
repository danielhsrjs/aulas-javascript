// let frutas = ["Banana", "Abacaxi", "Melão", "Maracujá"];

// let newFrutas = frutas.map((fruta) => {
//     return fruta.toUpperCase();
// })
// console.log(newFrutas);

// let aluno = [
//     {
//         nome: "Ermeson",
//         curso: "Dev. Web",
//         matriculado: true,
//     },
//     {
//         nome: "Leslie",
//         curso: "Dev. Web",
//         matriculado: true,
//     },
//     {
//         nome: "César",
//         curso: "ADM",
//         matriculado: true,
//     },
// ];

// let nomeAlunos = aluno.map((objeto)=> {
//     return objeto.nome;
// })

// console.log(nomeAlunos);

let notas = [3, 5, 8, 7, 6];

let notasAprovadas = notas.filter((nota)=> {
    return nota >= 6
})

console.log(notasAprovadas)