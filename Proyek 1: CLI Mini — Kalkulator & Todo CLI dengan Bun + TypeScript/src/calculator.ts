// calculator.ts - Pure functions untuk kalkulator CLI
// Ini kayak kalkulator saku, cuma logic matematika aja - no side effect!

export type Operasi = "tambah" | "kurang" | "kali" | "bagi" | "pangkat"

/**
 * Tambah dua angka
 * @param a - angka pertama
 * @param b - angka kedua
 * @returns hasil penjumlahan
 */
export function tambah(a: number, b: number): number {
  return a + b
}

/**
 * Kurang dua angka
 */
export function kurang(a: number, b: number): number {
  return a - b
}

/**
 * Kali dua angka
 */
export function kali(a: number, b: number): number {
  return a * b
}

/**
 * Bagi dua angka
 * @throws Error kalau pembagi 0 (nggak boleh bagi 0!)
 */
export function bagi(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Tidak bisa bagi dengan 0!")
  }
  return a / b
}

/**
 * Pemangkatan
 * @param a sebagai nilai
 * @param b sebagai pangkat
 */
export function pangkat(a: number, b: number): number {
  return a ** b
}

/**
 * Fungsi utama kalkulator - pilih operasi berdasarkan string
 * @param operasi - "tambah" | "kurang" | "kali" | "bagi"
 * @param a - angka pertama
 * @param b - angka kedua
 */
export function kalkulator(operasi: Operasi, a: number, b: number): number {
  switch (operasi) {
    case "tambah":
      return tambah(a, b)
    case "kurang":
      return kurang(a, b)
    case "kali":
      return kali(a, b)
    case "bagi":
      return bagi(a, b)
    case "pangkat":
      return pangkat(a, b)
    default:
      // Ini untuk jaga-jaga kalau ada operasi aneh
      throw new Error(`Operasi tidak dikenal: ${operasi}`)
  }
}
