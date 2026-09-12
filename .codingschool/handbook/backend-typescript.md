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
## 2026-09-11 15:18:19

**Topic:** 1.3 Tipe Dasar & Type System (string, number, boolean, array, object, any vs unknown)

**Theory:**
- Tipe dasar: string, number, boolean (primitive), array (string[]), object ({name, age}). 
- any = bebas tanpa cek (bahaya, bug runtime), unknown = harus typeof guard dulu (aman). Analogi: any = toples tanpa label, unknown = toples terkunci harus cek dulu.

**Practice:**
- Berhasil membuat tahap1-foundation/type-basic.ts
- const nama:string, umur:number, isBackendDev:boolean + template literal
- Array hobi: string[] dan object user dengan type inline
- Demo any: bebas:any dari string jadi number lolos tanpa error
- Demo unknown: amanUnknown:unknown dengan typeof === "string" guard + else branch, lalu toUpperCase aman
- Output berhasil, paham perbedaan any vs unknown


**Progress:** 100% complete

---
## 2026-09-11 15:36:57

**Topic:** 1.4 Interface vs Type, Enum, Union & Intersection

**Theory:**
- Interface vs Type: keduanya bikin cetakan object, interface bisa extends, type lebih fleksibel untuk union/intersection. Enum: daftar konstanta terbatas (Role). Union (A|B): boleh salah satu. Intersection (A&B): harus keduanya.

**Practice:**
- Berhasil membuat tahap1-foundation/interface-type.ts
- interface UserI dan type UserT dengan name:string age:number, membuat u1 (Rois) dan u2 (Khoiron, age 28.5 - demo number bisa float)
- enum Role {ADMIN="admin"...} dan people1=Role.ADMIN dengan template literal
- Union id: number|string dari 123 ke "ABC-123"
- Intersection HasName & HasAge menjadi Person dengan name+age
- Semua run sukses, paham konsep cetakan object


**Progress:** 100% complete

---
## 2026-09-11 16:11:16

**Topic:** 1.5 Function, Async/Await & Promise di Bun

**Theory:**
- Function sync vs Promise (struk antrian) vs async/await (nunggu elegan tanpa block). Analogi dapur: goreng telur sync, janji kopi Promise, await = tunggu tanpa macet. Mirip Kotlin suspend/coroutine.
- Promise.all = all-or-nothing (fails fast jika satu reject), Promise.allSettled = tunggu semua selesai (fulfilled+rejected) dan return status.

**Practice:**
- Membuat tahap1-foundation/async-promise.ts dengan sapa(), ambilDataDariAPI(id) yang resolve jika id!=0 dan reject jika id==0 (1 detik delay)
- main() dengan await dan Promise.all([0,12]) yang trigger reject, memahami unhandled rejection
- Diskusi: settled = proses tetap ditunggu sampai semua promise settled (fulfilled atau rejected), tidak short-circuit seperti Promise.all
- Fix dengan try/catch dan allSettled untuk handle partial failure


**Progress:** 100% complete

---
## 2026-09-11 16:27:00

**Topic:** 1.6 Modul, Import/Export & Struktur Folder Backend (Clean Architecture intro)

**Theory:**
- Modul = ruangan terpisah biar code rapi, import/export untuk hubungkan file. Named export vs default export, ESM butuh .js extension di import. Struktur Clean Architecture: controllers (terima request), services/domain (logic), repositories (DB), utils (helper) - mirip Android.

**Practice:**
- Berhasil membuat tahap1-foundation/tahap1_6.../utils/math.ts dengan export tambah & kali
- Membuat domain/user_use_case.service.ts dengan type User, buatUser, sapaUser yang import dari math.js (sudah pakai .js extension benar)
- Membuat index.ts yang import dari domain dan utils, membuat user Rois 28, console.log sapa dan kali
- Struktur modular berhasil, paham Clean Architecture intro


**Progress:** 100% complete

---
