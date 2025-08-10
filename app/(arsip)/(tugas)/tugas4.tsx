import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, StyleProp, TextStyle } from 'react-native';

type ItemData = {
  id: string;
  nama: string;
  nim: string;
  style: StyleProp<TextStyle>;
};

type ItemNamaProps = {
  nama: string;
  nim: string;
  style: StyleProp<TextStyle>;
};

const dataStatis: ItemData[] = [
  { id: '1', nama: 'Ali sulton s palilati', nim: '105841102222', style: { fontFamily: 'Anton-Regular' } },
  { id: '2', nama: 'ahmad fathir', nim: '105841102922', style: { fontFamily: 'Merriweather-Regular', fontSize: 20 } },
  { id: '3', nama: 'Muhammad Faturrachman iswan', nim: '105841103322', style: { fontFamily: 'Nunito-Light', color: '#333' } },
  { id: '4', nama: 'Nurmisba', nim: '105841103422', style: { fontFamily: 'PlayfairDisplay-Regular', fontStyle: 'italic' } },
  { id: '5', nama: 'Alvian Syah burhani', nim: '105841103522', style: { fontFamily: 'SourceCodePro-Regular' } },
];

const dataVariabel: ItemData[] = [
  { id: '6', nama: 'Hamdani', nim: '105841103722', style: { fontFamily: 'Recursive-VariableFont', fontWeight: '300' } },
  { id: '7', nama: 'Muliana', nim: '105841103822', style: { fontFamily: 'Epilogue-VariableFont', fontWeight: '400', fontSize: 20 } },
  { id: '8', nama: 'Yusri Ali', nim: '105841117222', style: { fontFamily: 'Jost-VariableFont', fontWeight: '500', color: '#333' } },
  { id: '9', nama: 'Nur muhammad ashman', nim: '105841103122', style: { fontFamily: 'WorkSans-VariableFont', fontWeight: '700', fontStyle: 'italic' } },
  { id: '10', nama: 'Arif Rahman', nim: '105841100921', style: { fontFamily: 'Lexend-VariableFont', fontWeight: '900' } },
];

const HeaderTugas = () => (
  <View style={styles.headerContainer}>
    <Text style={[styles.headerTitle, { fontFamily: 'Anton-Regular' }]}>
      Arsip Tugas 4 - Proyek Font
    </Text>
    <Text style={styles.headerSubtitle}>
      Oleh: Majeri (105841103622)
    </Text>
  </View>
);

const ItemNama = ({ nama, nim, style }: ItemNamaProps) => (
  <View style={styles.itemContainer}>
    <Text style={[styles.itemTextBase, style]}>{nama}</Text>
    <Text style={[styles.itemNim, style]}>({nim})</Text>
  </View>
);

// Komponen pemisah
const Separator = () => <View style={styles.separator} />;

export default function HalamanTugas4() {
  const renderItem = ({ item }: { item: ItemData }) => <ItemNama nama={item.nama} nim={item.nim} style={item.style} />;

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        ListHeaderComponent={<HeaderTugas />}
        data={[...dataStatis, ...dataVariabel]}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={Separator}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  listContainer: {
    padding: 20,
  },
  headerContainer: {
    marginBottom: 25,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
    color: '#1A1A1A',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#777',
    marginTop: 4,
  },
  itemContainer: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    alignItems: 'center',
  },
  itemTextBase: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
  },
  itemNim: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  separator: {
    height: 15,
  },
});