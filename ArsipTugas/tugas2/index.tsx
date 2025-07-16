import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useGridManager } from '..../ArsipTugas/tugas2/components/InteractiveImageCellanager';
import InteractiveImageCell from './components/InteractiveImageCell';

/**
 * @description Layar utama yang menampilkan grid gambar interaktif.
 * Bertanggung jawab untuk menyusun layout grid dan menghubungkan logika dari hook.
 */

export default function ImageGridScreen() {
  const { gridState, handleCellInteraction } = useGridManager();

  return (
    <SafeAreaView style={screenStyles.safeArea}>
      <View style={screenStyles.gridContainer}>
        {gridState.map(cell => (
          <InteractiveImageCell
            key={cell.id}
            sourceUri={cell.currentSrc}
            scaleValue={cell.scale}
            onPress={() => handleCellInteraction(cell.id)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const screenStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212', 
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});