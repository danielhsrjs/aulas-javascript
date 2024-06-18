document.title = "Atividade";

let heading = document.createElement('h1');
heading.innerHTML = "Daniel Henrique";
document.body.appendChild(heading);
heading.style.borderTop = 'solid 5px red';
heading.style.color = 'blue';

let nome = prompt("Diga seu nome");
let novoNome = document.createElement('h1');
novoNome.innerHTML = nome;
document.body.appendChild(novoNome);