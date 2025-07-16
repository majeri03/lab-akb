import { useCallback } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { studentNames } from './data/studentList';
import { useFontLoader } from './hooks/useFontLoader';
import { getSurroundingNames } from './services/nameSelector';

/**
 * @description Layar utama aplikasi yang menampilkan daftar nama dengan font kustom.
 * Komponen ini bertanggung jawab untuk:
 * 1. Memanggil hook pemuat font.
 * 2. Memanggil layanan untuk mendapatkan daftar nama yang benar.
 * 3. Merender daftar nama tersebut dengan menerapkan font yang berbeda-beda.
 * 4. Menangani state loading dan error.
 */
export default function FontShowcaseScreen() {
  // 1. Panggil hook kita untuk memuat font dan mendapatkan statusnya.
  const { fontsLoaded, fontError } = useFontLoader();

  // 2. Tentukan nama target dan dapatkan indeksnya dari data.
  const YOUR_NAME = "MAJERI";
  const myIndex = studentNames.findIndex(name => name === YOUR_NAME);

  // 3. Panggil service kita untuk mendapatkan 5 nama sebelum dan sesudah.
  const { beforeNames, afterNames } = getSurroundingNames(myIndex, studentNames);

  // 4. Gabungkan semua nama menjadi satu daftar untuk ditampilkan.
  const namesToDisplay = [...beforeNames, YOUR_NAME, ...afterNames];

  // 5. Buat daftar nama font yang akan kita gunakan secara bergiliran.
  // Nama ini HARUS SAMA PERSIS dengan yang ada di useFontLoader.ts
  const fontFamilies = [
    'PlayfairDisplay-Regular', 'SourceCodePro-Regular', 'Nunito-Light', 'Anton-Regular', 'Merriweather-Regular',
    'Recursive-Variable', 'Epilogue-Variable', 'Jost-Variable', 'WorkSans-Variable', 'Lexend-Variable',
    'PlayfairDisplay-Black', 'SourceCodePro-Bold', 'Nunito-Bold', 'Merriweather-Italic'
  ];

  // Fungsi callback untuk menyembunyikan splash screen setelah layout selesai.
  // Ini mencegah "flicker" dan memastikan transisi yang mulus.
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      // Logika ini ada di dalam hook, di sini kita hanya memanggilnya
    }
  }, [fontsLoaded, fontError]);

  // Tampilkan pesan error jika font gagal dimuat.
  if (fontError) {
    return <Text style={styles.errorText}>Error memuat font: {fontError.message}</Text>;
  }

  // Jangan tampilkan apa-apa (atau tampilkan loading indicator) jika font belum siap.
  if (!fontsLoaded) {
    return null;
  }

  // Jika semua sudah siap, tampilkan UI utama.
  return (
    <SafeAreaView style={styles.safeArea} onLayout={onLayoutRootView}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerTitle}>Daftar Nama Dengan Font Kustom</Text>
        <View style={styles.listContainer}>
          {namesToDisplay.map((name, index) => (
            <Text
              key={index}
              // Terapkan font secara dinamis dan bergiliran menggunakan modulo
              style={[
                styles.nameText,
                { fontFamily: fontFamilies[index % fontFamilies.length] },
                // Beri gaya khusus untuk nama Anda sendiri
                name === YOUR_NAME && styles.myNameText,
              ]}
            >
              {name}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f4f5', // Latar belakang abu-abu terang yang bersih
  },
  container: {
    padding: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#18181b', // Hitam pekat
    marginBottom: 24,
    textAlign: 'center',
  },
  listContainer: {
    borderWidth: 1,
    borderColor: '#d4d4d8',
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  nameText: {
    fontSize: 22,
    color: '#27272a',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e4e7',
  },
  myNameText: {
    color: '#16a34a', // Warna hijau untuk menandai nama Anda
    fontWeight: 'bold',
  },
  errorText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'red',
    fontSize: 16,
  }
});