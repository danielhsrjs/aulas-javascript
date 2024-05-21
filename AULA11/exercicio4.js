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

students.forEach((student => {
    console.log(`Nome: ${student.name}, Idade: ${student.age}`)
}))