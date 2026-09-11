# backend typescript — Learning Notes

> _This handbook records each learning session with theory summaries and practice notes._

---

## 2026-09-11 14:32:18

**Topic:** 1.1 Kenapa TypeScript untuk Backend? (JS vs TS, type safety kayak Kotlin)

**Theory:**
- JS vs TS: JS tanpa type checking (bug diam-diam), TS menambah type safety seperti Kotlin - mencegah bug sebelum runtime. Contoh: tambah("5",10) menghasilkan "510" di JS tapi ditolak TS.
- Backend butuh type safety untuk menjaga integritas data sebelum masuk DB.
- Bun menjalankan TS native tanpa compile manual (bun run file.ts).

**Practice:**
- Berhasil membuat tahap1-foundation/test-types.ts
- function tambah(a:number,b:number):number dengan template literal `${a} + ${b} = ${hasil}` berhasil (5+12=17)
- Membuat type User dan function createUser(name:String, age:number) - perlu koreksi String -> string
- console.log halo dengan interpolasi berhasil
- Catatan: koreksi String (object) -> string (primitive) dan var -> const/let


**Progress:** 100% complete

---
## 2026-09-11 14:52:48

**Topic:** 1.2 Setup Project Bun Terbaru (bun init, tsconfig, bun --watch, Bun.env)

**Theory:**
- Bun adalah runtime all-in-one (runtime + package manager + bundler), lebih cepat dari Node.js. `bun init` membuat package.json, tsconfig.json, dan struktur project. `bun --watch` auto-restart saat file berubah. `Bun.env` untuk baca environment variables.

**Practice:**
- Berhasil menjalankan `bun --version` dan `bun upgrade` ke versi terbaru
- Menjalankan `bun init -y` di backend-typescript, membuat package.json dan tsconfig.json
- Menjalankan `bun --watch src/index.ts` berhasil - auto reload berjalan


**Progress:** 100% complete

---
