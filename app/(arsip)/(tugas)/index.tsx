import { View, Text, StyleSheet} from 'react-native';
// Kita tidak butuh useRouter atau Href lagi untuk ini, cukup Link
import {  Stack } from 'expo-router';

export default function TugasIndex() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: "Daftar Tugas" }} />
      <Text style={styles.text}>Selamat Datang di Halaman Tugas</Text>
      <Text style={styles.subText}>Pilih tab di bawah untuk melihat tugas-tugas lainnya</Text>
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF3B30',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});