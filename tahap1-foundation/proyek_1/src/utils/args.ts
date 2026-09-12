// args.ts - Helper untuk parse command line args
// process.argv itu array dari terminal: ["bun", "src/cli.ts", "calc", "tambah", "5", "10"]
// Kita ambil dari index 2 ke belakang

export function getArgs(): string[] {
  return process.argv.slice(2)
}

export function printHelp(): void {
  console.log(`
📖 CLI Mini - Kalkulator & Todo (Bun + TypeScript)

Cara pakai:

  Kalkulator:
    bun run src/cli.ts calc <operasi> <a> <b>
    operasi: tambah | kurang | kali | bagi | pangkat
    contoh: bun run src/cli.ts calc tambah 5 10
            bun run src/cli.ts calc pangkat 2 3

  Todo:
    bun run src/cli.ts todo add "belajar backend"
    bun run src/cli.ts todo list
    bun run src/cli.ts todo done 1
    bun run src/cli.ts todo delete 1
    bun run src/cli.ts todo edit 1 "belajar bun"

  Help:
    bun run src/cli.ts help
`)
}
