let students = [
    {
        name: "John",
        age: 20,
    },
    {
        name: "Jane",
        age: 25,
    },
    {
        name: "Mark",
        age: 22,
    },
]

let idade = students.map((objeto)=> {
    return objeto.age;
})

console.log(`As idades são: ${idade}`);