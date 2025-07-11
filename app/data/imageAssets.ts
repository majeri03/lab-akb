/**
 * @description Menyediakan data aset gambar untuk grid.
 * Setiap objek merepresentasikan satu sel di dalam grid, berisi gambar utama dan alternatif.
 * Menggunakan ID unik untuk seed gambar memastikan setiap gambar berbeda.
 */

export interface ImageAsset {
  id: string;
  primarySrc: string;
  alternativeSrc: string;
}

export const gridImageAssetSet: ImageAsset[] = Array.from({ length: 9 }, (_, index) => {
  const primaryId = 100 + index;
  const alternativeId = 200 + index;
  return {
    id: `cell-${index}`,
    primarySrc: `https://picsum.photos/id/${primaryId}/200/200`,
    alternativeSrc: `https://picsum.photos/id/${alternativeId}/200/200`,
  };
});