const mediaAluno = (n1 = 0, n2 = 0, rep = 0) => {
    let media = (n1 + n2 + rep) / 3;
    return media;
}

console.log(mediaAluno(10,6, 4).toFixed(1))