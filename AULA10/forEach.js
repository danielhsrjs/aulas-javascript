let emails = [ //Tamanho do array = 5 
    "email1@gmail.com", //0
    "email2@gmail.com", //1
    "email3@gmail.com", //2
    "email4@gmail.com", //3
    "email5@gmail.com", //4
    "email6@gmail.com"  //5
];

// for (let elemento = 0; elemento < emails.length; elemento++) {
//     console.log(`E-mail enviado para: ${emails[elemento]}`)
// }
console.log("-------------------------------------")

emails.forEach((email, cadastro, listaDaSala)=>{
    console.log(`E-mail enviado para: ${email}`)
    console.log(`Seu número de cadastro é: ${cadastro}`)
    console.log(`Lista da sala completa: ${listaDaSala}`)
    console.log("-------------------------------------")
})