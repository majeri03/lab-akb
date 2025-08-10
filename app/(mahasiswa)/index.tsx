import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { mahasiswaData, Mahasiswa } from '../../src/data/mahasiswa';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export default function DaftarMahasiswaScreen() {
  const router = useRouter();

  const handlePress = (nim: string) => {
    router.push(`/(mahasiswa)/${nim}`);
  };

  const renderItem = ({ item }: { item: Mahasiswa }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handlePress(item.nim)}
    >
      <Ionicons name="person-circle-outline" size={24} color="#007AFF" />
      <Text style={styles.itemText}>{item.nama}</Text>
      <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mahasiswaData}
        renderItem={renderItem}
        keyExtractor={(item) => item.nim}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  itemContainer: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  itemText: { flex: 1, marginLeft: 15, fontSize: 17 },
});