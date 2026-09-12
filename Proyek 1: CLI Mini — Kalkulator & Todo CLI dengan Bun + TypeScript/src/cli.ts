// cli.ts - Controller CLI, kayak resepsionis yang arahkan tamu ke dapur yang benar
import { kalkulator, type Operasi } from "./calculator.js"
import { addTodo, listTodos, doneTodo, deleteTodo, editTodo, formatTodo, clear } from "./todo.js"
import { getArgs, printHelp } from "./utils/args.js"

export async function handleCalc(args: string[]) {
  const [operasi, aStr, bStr] = args
  if (!operasi || !aStr || !bStr) {
    console.log("❌ Usage: calc <operasi> <a> <b>")
    console.log("   operasi: tambah, kurang, kali, bagi, pangkat")
    return
  }

  const a = Number(aStr)
  const b = Number(bStr)

  if (isNaN(a) || isNaN(b)) {
    console.log(`❌ Angka tidak valid: a=${aStr}, b=${bStr}`)
    return
  }

  try {
    const hasil = kalkulator(operasi as Operasi, a, b)
    console.log(`✅ ${a} ${operasi} ${b} = ${hasil}`)
  } catch (error) {
    console.log(`❌ Error: ${(error as Error).message}`)
  }
}

export async function handleTodo(args: string[]) {
  const [command, ...rest] = args

  try {
    switch (command) {
      case "add": {
        const text = rest.join(" ")
        if (!text) {
          console.log('❌ Usage: todo add "isi todo"')
          return
        }
        const todo = await addTodo(text)
        console.log(`✅ Ditambah: ${formatTodo(todo)}`)
        break
      }
      case "list": {
        const todos = await listTodos()
        if (todos.length === 0) {
          console.log("📭 Belum ada todo")
        } else {
          console.log("📝 Daftar Todo:")
          todos.forEach((t) => console.log("  " + formatTodo(t)))
        }
        break
      }
      case "done": {
        const id = Number(rest[0])
        if (isNaN(id)) {
          console.log("❌ Usage: todo done <id>")
          return
        }
        const todo = await doneTodo(id)
        console.log(`✅ Selesai: ${formatTodo(todo)}`)
        break
      }
      case "delete": {
        const id = Number(rest[0])
        if (isNaN(id)) {
          console.log("❌ Usage: todo delete <id>")
          return
        }
        await deleteTodo(id)
        console.log(`🗑️  Hapus todo id ${id}`)
        break
      }
      case "edit": {
        const id = Number(rest[0])
        const newText = rest.slice(1).join(" ")
        if (isNaN(id) || !newText) {
          console.log('❌ Usage: todo edit <id> "teks baru"')
          return
        }
        const todos = await listTodos()
        const existing = todos.find((t) => t.id === id)
        if (!existing) {
          console.log(`❌ Todo id ${id} tidak ditemukan`)
          return
        }
        existing.text = newText
        await editTodo(existing)
        console.log(`✏️  Edit: ${formatTodo(existing)}`)
        break
      }
      case "clear": {
        await clear()
        const todos = await listTodos()
        if (todos.length === 0) {
          console.log("📭 todo kosong")
        }
        break
      }
      default:
        console.log(`❌ Command todo tidak dikenal: ${command}`)
        console.log('   add | list | done | delete | edit | clear')
    }
  } catch (error) {
    console.log(`❌ Error: ${(error as Error).message}`)
  }
}

export async function main() {
  const args = getArgs()

  if (args.length === 0 || args[0] === "help") {
    printHelp()
    return
  }

  const [command, ...rest] = args

  switch (command) {
    case "calc":
      await handleCalc(rest)
      break
    case "todo":
      await handleTodo(rest)
      break
    default:
      console.log(`❌ Command tidak dikenal: ${command}`)
      printHelp()
  }
}