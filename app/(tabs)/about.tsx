// app/(tugas_ai)/about.tsx
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
            <Text style={styles.title}>Tentang Aplikasi</Text>
            <Text style={styles.text}>
            Aplikasi ini dirancang dan dikembangkan sebagai bagian dari pemenuhan tugas mata kuliah pemrograman platform mobile.
            </Text>
            <View style={styles.section}>
            <Text style={styles.subtitle}>Fungsi Halaman:</Text>
            <Text style={styles.listItem}>• <Text style={styles.bold}>Home:</Text> Menampilkan informasi singkat tentang Unismuh Makassar.</Text>
            <Text style={styles.listItem}>• <Text style={styles.bold}>About:</Text> Memberikan penjelasan mengenai aplikasi dan navigasi.</Text>
            <Text style={styles.listItem}>• <Text style={styles.bold}>Profil:</Text> Menampilkan data diri pengembang aplikasi.</Text>
            </View>
        </View>

        {/* Tombol untuk kembali ke navigasi tab lama */}
        <Link href="/(arsip)" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Akses Tugas & Pertemuan Lama</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 24,
  },
  mainContent: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  section: {
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#343a40',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});