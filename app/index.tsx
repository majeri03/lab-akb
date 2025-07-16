import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const daftarLengkapNama = [
  "Nur Milani Hidayah", "Siti Marwa", "Alvian Syah burhani", "Hamdani", "Nur muhammad ashman", "SYAWALUDDIN", "Nabila ismail Matta", "Muliana", "Fajar Eka Alamsyah", "Nurmisba", "Ali sulton s palilati", "Andi citra ayu lestari", "A. Fajar Apriliawan", "Muhammad Adianto", "Yusri Ali", "Muhammad Faturrachman iswan", "Erick Yusuf kotte", "Ferdiansyah", "Arif Rahman", "ahmad fathir", "Majeri", "Budi Santoso", "Citra Lestari", "Dewi Anggraini", "Eka Prasetyo", "Fitri Handayani", "Gita Permata", "Hadi Wijaya", "Indah Sari", "Joko Susilo", "Kartika Putri", "Lutfi Hakim", "Mega Chandra", "Nanda Pratama", "Putra Wijaya", "Rina Amelia", "Sari Puspita", "Taufik Hidayat", "Utari Dewi", "Vino Bastian", "Wahyu Nugroho", "Yulia Rahman", "Zainal Abidin", "Rizki Ananda", "Bayu Aji", "Chandra Kirana", "Dian Lestari", "Elang Perkasa", "Farida Yani"
];

// ================= PERINGATAN PENTING =================
// PASTIKAN SETIAP NAMA FILE DI BAWAH INI SAMA PERSIS (TERMASUK BESAR KECIL HURUF)
// DENGAN NAMA FILE .ttf YANG ADA DI FOLDER assets/fonts/ ANDA.
// COPY-PASTE NAMA FILENYA UNTUK MENGHINDARI TYPO.
// ========================================================
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
        console.warn("Kesalahan Pemuatan Font:", e);
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

  const myName = "Majeri";
  const myIndex = daftarLengkapNama.indexOf(myName);
  const totalNames = daftarLengkapNama.length;

  const beforeNames = Array.from({ length: 5 }, (_, i) => daftarLengkapNama[(myIndex - (5 - i) + totalNames) % totalNames]);
  const afterNames = Array.from({ length: 5 }, (_, i) => daftarLengkapNama[(myIndex + 1 + i) % totalNames]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>Final Task Showcase</Text>
        <Text style={styles.subtitle}>Reference Name: {myName} (Urutan #{myIndex + 1})</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5 Nama Sebelum (5 Font Statis Berbeda)</Text>
          <Text style={[styles.name, { fontFamily: 'Anton-Regular' }]}>1. {beforeNames[0]}</Text>
          <Text style={[styles.name, { fontFamily: 'Merriweather-Regular' }]}>2. {beforeNames[1]}</Text>
          <Text style={[styles.name, { fontFamily: 'Nunito-Light' }]}>3. {beforeNames[2]}</Text>
          <Text style={[styles.name, { fontFamily: 'PlayfairDisplay-Regular' }]}>4. {beforeNames[3]}</Text>
          <Text style={[styles.name, { fontFamily: 'SourceCodePro-Regular' }]}>5. {beforeNames[4]}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5 Nama Sesudah (5 Font Variabel Berbeda)</Text>
          <Text style={[styles.name, { fontFamily: 'Recursive-Variable', fontWeight: '300' }]}>6. {afterNames[0]}</Text>
          <Text style={[styles.name, { fontFamily: 'Epilogue-Variable', fontWeight: '500' }]}>7. {afterNames[1]}</Text>
          <Text style={[styles.name, { fontFamily: 'Jost-Variable', fontWeight: '700' }]}>8. {afterNames[2]}</Text>
          <Text style={[styles.name, { fontFamily: 'WorkSans-Variable', fontWeight: '900' }]}>9. {afterNames[3]}</Text>
          <Text style={[styles.name, { fontFamily: 'Lexend-Variable', fontWeight: '400' }]}>10. {afterNames[4]}</Text>
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