import { tambah } from "../utils/math.js"

export type User = { name: string; age: number }

export function buatUser(name: string, age: number): User {
  return { name, age: age + tambah(0, 0) } // pakai tambah biar kepake
}

export function sapaUser(user: User): string {
  return `Halo ${user.name} umur ${user.age}`
}