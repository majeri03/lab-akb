/**
 * Menghitung daftar nama terdekat berdasarkan posisi saat ini, 
 * termasuk penanganan wrap-around di ujung daftar.
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