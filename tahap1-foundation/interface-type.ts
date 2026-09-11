// Interface vs Type
interface UserI {
    name: string;
    age: number
}

type UserT = {
    name: string;
    age: number
}

const u1: UserI = {
    name: "Rois",
    age: 28
}

const u2: UserT = {
    name: "Khoiron",
    age: 28.5
}

console.log(u1, u2)

// Enum
enum Role { ADMIN = "admin", USER = "user", GUEST = "guest"}
const people1 = Role.ADMIN
console.log(`Role ane ${people1}`)

// Union
let id: number | string = 123
console.log("id number:", id)
id = "ABC-123"
console.log("id string:", id)

// intersection 
type HasName = { name: string }
type HasAge = { age: number }
type Person = HasName & HasAge
const person: Person = {
    name: "Rois",
    age: 28
}

console.log("person:", person)