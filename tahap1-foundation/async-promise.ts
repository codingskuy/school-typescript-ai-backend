// Function biasa
function sapa(name: string): string {
    return `hello ${name}🫰🏻`
}

console.log(sapa("Dian Sastro"))

// Promise function 
function ambilDataDariAPI(id: number): Promise<string> {
    return new Promise(
        (resolve, reject) => {
            console.log(`Data user ${id} dicari..`)
            if (id == 0) {
                setTimeout(() => reject(`Data user ${id} tidak ketemu!`), 1000)
            } else {
                setTimeout(() => resolve(`Data user ${id} ketemu!`), 1000)
            }
        },
    )
}

async function main() {
    const result = await ambilDataDariAPI(1)
    console.log(result)

    try {
        const result2 = await Promise.all([ambilDataDariAPI(10), ambilDataDariAPI(0)])
        console.log(result2)
    } catch(err) {
        console.log("Oops error ketangkep:", err)
    }

    const hasilSettled = await Promise.allSettled([ambilDataDariAPI(0), ambilDataDariAPI(30)])
    console.log(hasilSettled)
}

main().catch(console.error)
