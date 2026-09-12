
// todo.ts - Logic Todo CLI dengan file persistence
// Ini kayak buku catatan: simpan di memory, tapi juga tulis ke file biar nggak hilang!

export type Todo = {
  id: number
  text: string
  done: boolean
}

// Path file JSON untuk simpan todo (relatif dari root proyek_1)
const DATA_FILE = "./data/todos.json"

// Helper: load todos dari file
export async function loadTodos(): Promise<Todo[]> {
  try {
    const file = Bun.file(DATA_FILE)
    const exists = await file.exists()
    if (!exists) {
      return []
    }
    const text = await file.text()
    if (!text.trim()) return []
    const data = JSON.parse(text) as Todo[]
    return data
  } catch (error) {
    console.error("Gagal load todos:", error)
    return []
  }
}

// Helper: save todos ke file
export async function saveTodos(todos: Todo[]): Promise<void> {
  await Bun.write(DATA_FILE, JSON.stringify(todos, null, 2))
}

// Tambah todo baru
export async function addTodo(text: string): Promise<Todo> {
  if (!text.trim()) {
    throw new Error("Todo text tidak boleh kosong!")
  }
  const todos = await loadTodos()
  const newId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1
  const newTodo: Todo = {
    id: newId,
    text: text.trim(),
    done: false,
  }
  todos.push(newTodo)
  await saveTodos(todos)
  return newTodo
}

// List semua todos
export async function listTodos(): Promise<Todo[]> {
  const todos = await loadTodos()
  return todos
}

// Tandai todo sebagai done
export async function doneTodo(id: number): Promise<Todo> {
  const todos = await loadTodos()
  const todo = todos.find((t) => t.id === id)
  if (!todo) {
    throw new Error(`Todo dengan id ${id} tidak ditemukan!`)
  }
  todo.done = true
  await saveTodos(todos)
  return todo
}

// Hapus todo
export async function deleteTodo(id: number): Promise<void> {
  const todos = await loadTodos()
  const index = todos.findIndex((t) => t.id === id)
  if (index === -1) {
    throw new Error(`Todo dengan id ${id} tidak ditemukan!`)
  }
  todos.splice(index, 1)
  await saveTodos(todos)
}

// Edit/Update data todo
export async function editTodo(todoEdited: Todo): Promise<void> {
  const todos = await loadTodos()
  const index = todos.findIndex((item) => todoEdited.id === item.id)
  if(index === -1) {
    throw new Error(`Todo dengan id ${todoEdited.id} tidak ditemukan!`);
  }

  // replace at index to update data
  todos[index] = todoEdited
  await saveTodos(todos)  
}

// Format todo untuk ditampilkan cantik
export function formatTodo(todo: Todo): string {
  const status = todo.done ? "✅" : "⬜"
  return `${status} [${todo.id}] ${todo.text}`
}

// Clear can Reset datum to zero
export async function clear(): Promise<void> {
  await saveTodos([])
  const result = await loadTodos()
  if(result.length != 0) {
    throw new Error("Pembersihan data gagal");
  }
} 
