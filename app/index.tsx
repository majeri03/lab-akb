// app/index.tsx
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Selamat Datang!</Text>
        <Text style={styles.subtitle}>Pilih tujuan Anda:</Text>

        <Link href="/(mahasiswa)" asChild>
          <Pressable style={styles.button}>
            <Ionicons name="people-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Tugas 10 Daftar Mahasiswa</Text>
          </Pressable>
        </Link>

        <Link href="/(arsip)" asChild>
          <Pressable style={{...styles.button, ...styles.archiveButton}}>
            <Ionicons name="archive-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Lihat Arsip Tugas</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  content: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 8, color: '#212529' },
  subtitle: { fontSize: 18, textAlign: 'center', marginBottom: 40, color: '#6c757d' },
  button: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#007AFF', paddingVertical: 14, borderRadius: 10, marginBottom: 16 },
  archiveButton: { backgroundColor: '#6c757d' },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600', marginLeft: 10 },
});