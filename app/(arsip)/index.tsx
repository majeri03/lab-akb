import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const TugasButton = ({ href, title }: { href: any, title: string }) => (
  <Link href={href} asChild>
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  </Link>
);

export default function TugasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Arsip Tugas</Text>
      <TugasButton href="/(arsip)/(tugas)/tugas4" title="Tugas 4" />
      <TugasButton href="/(arsip)/(tugas)/tugas5" title="Tugas 5" />
      <TugasButton href="/(arsip)/(tugas)/tugas6" title="Tugas 6" />
      
      <TugasButton href="/(arsip)/(tugas)/(tugas8)" title="Tugas 8 (Aplikasi Unismuh)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f4f4f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  // Style untuk tombol yang konsisten
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});