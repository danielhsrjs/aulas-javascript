let jogos = ["Undertale", "Guilty Gear", "Devil May Cry", "Mega Man"];

console.log(jogos[1]);
console.log(jogos[3]);

let rpg = "Persona";
let luta = "Tekken";
let souls = "Demons' Souls";

const topJogos = [
    ["Undertale", "Deltarune", "Earthbound"],
    ["Guilty Gear", "Street Fighter", "Marvel vs. Capcom"],
    ["Dark Souls", "Elden Ring", "Bloodborne"]
];

let toprpg = topJogos[0][0];
console.log(toprpg);
let topsouls = topJogos[2][2];
console.log(topsouls);

topJogos[0][2] = rpg;
topJogos[1][2] = luta;
topJogos[2][0] = souls;

console.log(topJogos)