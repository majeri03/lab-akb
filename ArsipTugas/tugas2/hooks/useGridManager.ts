import { useState } from 'react';
import { gridImageAssetSet, ImageAsset } from '../data/imageAssets';

/**
 * @description Interface untuk state setiap sel dalam grid.
 */

export interface GridCellState {
  id: string;
  currentSrc: string;
  scale: number;
}

const INITIAL_SCALE = 1.0;
const SCALE_INCREMENT = 0.2;
const MAX_SCALE = 2.0;


export const useGridManager = () => {
  const [gridState, setGridState] = useState<GridCellState[]>(() =>
    gridImageAssetSet.map(asset => ({
      id: asset.id,
      currentSrc: asset.primarySrc,
      scale: INITIAL_SCALE,
    }))
  );

  const handleCellInteraction = (cellId: string) => {
    setGridState(currentState =>
      currentState.map(cell => {
        if (cell.id === cellId) {
          // Cari aset gambar yang sesuai
          const asset = gridImageAssetSet.find(a => a.id === cellId) as ImageAsset;
          
          // Logika untuk menukar gambar
          const nextSrc = cell.currentSrc === asset.primarySrc ? asset.alternativeSrc : asset.primarySrc;
          
          const nextScale = Math.min(cell.scale + SCALE_INCREMENT, MAX_SCALE);

          return { ...cell, currentSrc: nextSrc, scale: nextScale };
        }
        return cell;
      })
    );
  };

  return { gridState, handleCellInteraction };
};