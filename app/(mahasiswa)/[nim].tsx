import { View, Text, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { mahasiswaData } from '../../src/data/mahasiswa';
import React from 'react';

export default function DetailMahasiswaScreen() {
  const { nim } = useLocalSearchParams<{ nim: string }>();
  const mahasiswa = mahasiswaData.find((m) => m.nim === nim);

  if (!mahasiswa) {
    return (
      <View style={styles.container}>
        <Text>Error: Data untuk NIM "{nim}" tidak bisa ditemukan.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: mahasiswa.nama }} />
      <Image source={{ uri: mahasiswa.fotoUrl }} style={styles.foto} />
      <Text style={styles.nama}>{mahasiswa.nama}</Text>
      <Text style={styles.nimLabel}>NIM: {mahasiswa.nim}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  foto: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
  nama: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  nimLabel: { fontSize: 18, color: 'gray' },
});