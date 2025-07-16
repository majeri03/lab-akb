/**
 * @description Layanan untuk memproses logika bisnis terkait daftar nama.
 * Memisahkan logika ini dari komponen UI adalah praktik arsitektur yang bersih.
 */

/**
 * Mengambil 5 nama sebelum dan 5 nama sesudah dari indeks target dalam sebuah array.
 * Menerapkan logika "wrap-around" jika indeks berada di dekat awal atau akhir array.
 * @param targetIndex Indeks dari nama utama (stambuk).
 * @param names Array lengkap berisi semua nama.
 * @returns Objek yang berisi array `beforeNames` dan `afterNames`.
 */
export const getSurroundingNames = (targetIndex: number, names: string[]) => {
  const totalNames = names.length;
  const beforeNames: string[] = [];
  const afterNames: string[] = [];

  if (targetIndex < 0 || targetIndex >= totalNames) {
    // Penanganan kasus jika indeks target tidak valid
    return { beforeNames: [], afterNames: [] };
  }

  // Loop untuk mendapatkan 5 nama SEBELUMNYA dengan logika wrap-around
  for (let i = 1; i <= 5; i++) {
    // Modulo (%) adalah kunci untuk wrap-around.
    // Penambahan `totalNames` sebelum modulo memastikan hasilnya tidak pernah negatif.
    const prevIndex = (targetIndex - i + totalNames) % totalNames;
    beforeNames.unshift(names[prevIndex]); // unshift untuk membalik urutan secara benar
  }

  // Loop untuk mendapatkan 5 nama SESUDAHNYA dengan logika wrap-around
  for (let i = 1; i <= 5; i++) {
    const nextIndex = (targetIndex + i) % totalNames;
    afterNames.push(names[nextIndex]);
  }

  return { beforeNames, afterNames };
};