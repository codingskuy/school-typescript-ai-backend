// Tipe dasar
const nama: string = "Rois Khoiron"
const umur: number = 28
const isBackendDev: boolean = true

console.log(`Nama ${nama}, Umur ${umur}, Backend? ${isBackendDev}`)

// Array & Object
const hobi: string[] = ["coding", "ngopi", "belajar backend"]
const user: { name: string; age: number; hobi: string[] } = {
    name: nama,
    age: umur,
    hobi: hobi
}

console.log("User:", user)
console.log(`Hobi pertama: ${hobi[0]}`)

// any & unknown
let bebas: any = "aku string"
console.log("any awal:", bebas)
bebas = 123
console.log("any terbaru:", bebas)

let amanUnknown: unknown = "iya string"
console.log("unknown:", amanUnknown)

if(typeof(amanUnknown) === "string") {
    console.log("unknown aman:", amanUnknown.toUpperCase())
} else {
    console.log("unknown bertipe:", typeof(amanUnknown))
}