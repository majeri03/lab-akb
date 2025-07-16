import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface NameListViewProps {
  names: string[];
  fontCollection: readonly string[];
}

/**
 * Komponen presentasi untuk menampilkan daftar nama.
 * Hanya menerima data melalui props dan merendernya tanpa logika tambahan.
 */

export const NameListView = ({ names, fontCollection }: NameListViewProps) => (
  <View style={viewStyles.listContainer}>
    {names.map((name, index) => (
      <Text
        key={`${name}-${index}`}
        style={[
          viewStyles.nameText,
          { fontFamily: fontCollection[index % fontCollection.length] },
        ]}
      >
        {/* Nomor urut sekarang didasarkan pada posisi di daftar 10 nama */}
        {`${index + 1}. ${name}`}
      </Text>
    ))}
  </View>
);

const viewStyles = StyleSheet.create({
  listContainer: {
    borderWidth: 1,
    borderColor: '#d4d4d8',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  nameText: {
    fontSize: 22,
    color: '#27272a',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e4e7',
  },
});