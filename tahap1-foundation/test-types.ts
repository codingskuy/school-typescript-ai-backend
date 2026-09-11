function tambah(a: number, b: number): number {
    return a + b
}

const a = 5
const b = 12
var hasil: number = tambah(a, b)
console.log(`${a} + ${b} = ${hasil}`)

type User = { name: String, age: number }

function createUser(name: String, age: number): User {
    return {name, age}
}

const user = createUser("Rois Khoiron", 28)
console.log(`Halo saya ${user.name} usia saya ${user.age} salam kenal`)