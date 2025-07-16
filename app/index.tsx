import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const daftarLengkapNama = [
  "Nur Milani Hidayah", "Siti Marwa", "Alvian Syah burhani", "Hamdani", "Nur muhammad ashman",
  "SYAWALUDDIN", "Nabila ismail Matta", "Muliana", "Fajar Eka Alamsyah", "Nurmisba",
  "Ali sulton s palilati", "Andi citra ayu lestari", "A. Fajar Apriliawan", "Muhammad Adianto",
  "Yusri Ali", "Muhammad Faturrachman iswan", "Erick Yusuf kotte", "Ferdiansyah",
  "Arif Rahman", "ahmad fathir", "Majeri", "Budi Santoso", "Citra Lestari", "Dewi Anggraini",
  "Eka Prasetyo", "Fitri Handayani", "Gita Permata", "Hadi Wijaya", "Indah Sari", "Joko Susilo",
  "Kartika Putri", "Lutfi Hakim", "Mega Chandra", "Nanda Pratama", "Putra Wijaya",
  "Rina Amelia", "Sari Puspita", "Taufik Hidayat", "Utari Dewi", "Vino Bastian",
  "Wahyu Nugroho", "Yulia Rahman", "Zainal Abidin", "Rizki Ananda", "Bayu Aji",
  "Chandra Kirana", "Dian Lestari", "Elang Perkasa", "Farida Yani"
];

const FontAssets = {
  // 5 Font Statis
  'Anton-Regular': require('./assets/fonts/statis/Anton-Regular.ttf'),
  'Merriweather-Regular': require('./assets/fonts/statis/Merriweather_24pt-Regular.ttf'),
  'Nunito-Light': require('./assets/fonts/statis/Nunito-Light.ttf'),
  'PlayfairDisplay-Regular': require('./assets/fonts/statis/PlayfairDisplay-Regular.ttf'),
  'SourceCodePro-Regular': require('./assets/fonts/statis/SourceCodePro-Regular.ttf'),
  // 5 Font Variabel
  'Recursive-Variable': require('./assets/fonts/variabel/Recursive-VariableFont_CASL,CRSV,MONO,slnt,wght.ttf'),
  'Epilogue-Variable': require('./assets/fonts/variabel/Epilogue-VariableFont_wght.ttf'),
  'Jost-Variable': require('./assets/fonts/variabel/Jost-VariableFont_wght.ttf'),
  'WorkSans-Variable': require('./assets/fonts/variabel/WorkSans-VariableFont_wght.ttf'),
  'Lexend-Variable': require('./assets/fonts/variabel/Lexend-VariableFont_wght.ttf'),
};

SplashScreen.preventAutoHideAsync();

export default function ExplicitFontShowcase() {
  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(FontAssets);
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  if (!isReady) {
    return null;
  }

  // LOGIKA PEMILIHAN NAMA SECARA EKSPLISIT
  const myName = "Majeri";
  const myIndex = daftarLengkapNama.indexOf(myName); // Harusnya 20
  const totalNames = daftarLengkapNama.length; // 50

  // 5 Nama Sebelum (dihitung manual untuk kejelasan)
  const before1 = daftarLengkapNama[(myIndex - 5 + totalNames) % totalNames];
  const before2 = daftarLengkapNama[(myIndex - 4 + totalNames) % totalNames];
  const before3 = daftarLengkapNama[(myIndex - 3 + totalNames) % totalNames];
  const before4 = daftarLengkapNama[(myIndex - 2 + totalNames) % totalNames];
  const before5 = daftarLengkapNama[(myIndex - 1 + totalNames) % totalNames];

  // 5 Nama Sesudah (dihitung manual untuk kejelasan)
  const after1 = daftarLengkapNama[(myIndex + 1) % totalNames];
  const after2 = daftarLengkapNama[(myIndex + 2) % totalNames];
  const after3 = daftarLengkapNama[(myIndex + 3) % totalNames];
  const after4 = daftarLengkapNama[(myIndex + 4) % totalNames];
  const after5 = daftarLengkapNama[(myIndex + 5) % totalNames];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>Final Task Showcase</Text>
        <Text style={styles.subtitle}>Reference Name: {myName} (Index: {myIndex})</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5 Nama Sebelum (5 Font Statis Berbeda)</Text>
          {/* TUGAS 4.1: Menampilkan 5 nama sebelum dengan 5 font statis berbeda secara eksplisit */}
          <Text style={[styles.name, { fontFamily: 'Anton-Regular' }]}>1. {before1}</Text>
          <Text style={[styles.name, { fontFamily: 'Merriweather-Regular' }]}>2. {before2}</Text>
          <Text style={[styles.name, { fontFamily: 'Nunito-Light' }]}>3. {before3}</Text>
          <Text style={[styles.name, { fontFamily: 'PlayfairDisplay-Regular' }]}>4. {before4}</Text>
          <Text style={[styles.name, { fontFamily: 'SourceCodePro-Regular' }]}>5. {before5}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5 Nama Sesudah (5 Font Variabel Berbeda)</Text>
          {/* TUGAS 4.2: Menampilkan 5 nama sesudah dengan 5 font variabel berbeda secara eksplisit */}
          {/* TUGAS 4.3: Bukti penggunaan font variabel dengan mengubah fontWeight */}
          <Text style={[styles.name, { fontFamily: 'Recursive-Variable', fontWeight: '300' }]}>6. {after1}</Text>
          <Text style={[styles.name, { fontFamily: 'Epilogue-Variable', fontWeight: '500' }]}>7. {after2}</Text>
          <Text style={[styles.name, { fontFamily: 'Jost-Variable', fontWeight: '700' }]}>8. {after3}</Text>
          <Text style={[styles.name, { fontFamily: 'WorkSans-Variable', fontWeight: '900' }]}>9. {after4}</Text>
          <Text style={[styles.name, { fontFamily: 'Lexend-Variable', fontWeight: 'normal' }]}>10. {after5}</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111827' },
  content: { padding: 20 },
  mainTitle: { fontSize: 36, fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center', fontFamily: 'Anton-Regular' },
  subtitle: { fontSize: 16, color: '#9CA3AF', textAlign: 'center', marginBottom: 30 },
  section: { marginBottom: 25, backgroundColor: '#1F2937', padding: 15, borderRadius: 10 },
  sectionTitle: { fontSize: 20, fontWeight: '600', color: '#F9FAFB', marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#4B5563', paddingBottom: 5 },
  name: { fontSize: 24, color: '#E5E7EB', paddingVertical: 8 },
});