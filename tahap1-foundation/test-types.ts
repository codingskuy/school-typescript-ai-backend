function tambah(a: number, b: number): number {
    return a + b
}

const a = 5
const b = 12
let hasil: number = tambah(a, b)
console.log(`${a} + ${b} = ${hasil}`)

type User = { name: string, age: number }

function createUser(name: string, age: number): User {
    return {name, age}
}

const user1 = createUser("Rois Khoiron", 28)
console.log(`Halo saya ${user.name} usia saya ${user.age} salam kenal`)