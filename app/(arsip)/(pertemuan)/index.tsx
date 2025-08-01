import { View, Text, StyleSheet } from 'react-native';

export default function PertemuanIndex() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Halaman Pertemuan</Text>
      <Text style={styles.subText}>Pilih pertemuan dari tab untuk melihat detailnya</Text>
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
  },
});
