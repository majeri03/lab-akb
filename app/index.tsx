import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter,Href } from 'expo-router';

export default function Home() {
  const router = useRouter();
  const navigateTo = (path: Href) => {
    router.push(path);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo('/(tabs)/(tugas)')}
      >
        <Text style={styles.buttonText}>Buka Tab Tugas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#FF3B30' }]}
        onPress={() => navigateTo('/(tabs)/(pertemuan)')}
      >
        <Text style={styles.buttonText}>Buka Tab Pertemuan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    backgroundColor: '#007AFF',
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
