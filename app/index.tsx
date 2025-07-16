import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// SEMUA ADA DI SINI. TIDAK ADA FILE LAIN.
// DATA NAMA (TOTAL 50)
const studentNameList = [
  "Nur Milani Hidayah", "Siti Marwa", "Alvian Syah burhani", "Hamdani", "Nur muhammad ashman", "SYAWALUDDIN", "Nabila ismail Matta", "Muliana", "Fajar Eka Alamsyah", "Nurmisba", "Ali sulton s palilati", "Andi citra ayu lestari", "A. Fajar Apriliawan", "Muhammad Adianto", "Yusri Ali", "Muhammad Faturrachman iswan", "Erick Yusuf kotte", "Ferdiansyah", "Arif Rahman", "ahmad fathir", "Majeri", "Budi Santoso", "Citra Lestari", "Dewi Anggraini", "Eka Prasetyo", "Fitri Handayani", "Gita Permata", "Hadi Wijaya", "Indah Sari", "Joko Susilo", "Kartika Putri", "Lutfi Hakim", "Mega Chandra", "Nanda Pratama", "Putra Wijaya", "Rina Amelia", "Sari Puspita", "Taufik Hidayat", "Utari Dewi", "Vino Bastian", "Wahyu Nugroho", "Yulia Rahman", "Zainal Abidin", "Rizki Ananda", "Bayu Aji", "Chandra Kirana", "Dian Lestari", "Elang Perkasa", "Farida Yani"
];

// REGISTRY FONT 
const FontAssets = {
  // 10 FONT STATIS DAN VARIABEL
  'Anton': require('./assets/fonts/statis/Anton-Regular.ttf'),
  'Merriweather': require('./assets/fonts/statis/Merriweather_24pt-Regular.ttf'),
  'Nunito': require('./assets/fonts/statis/Nunito-Light.ttf'),
  'Playfair': require('./assets/fonts/statis/PlayfairDisplay-Regular.ttf'),
  'SourceCode': require('./assets/fonts/statis/SourceCodePro-Regular.ttf'),
  
  'Recursive': require('./assets/fonts/variabel/Recursive-VariableFont_CASL,CRSV,MONO,slnt,wght.ttf'),
  'Epilogue': require('./assets/fonts/variabel/Epilogue-VariableFont_wght.ttf'),
  'Jost': require('./assets/fonts/variabel/Jost-VariableFont_wght.ttf'),
  'WorkSans': require('./assets/fonts/variabel/WorkSans-VariableFont_wght.ttf'),
  'Lexend': require('./assets/fonts/variabel/Lexend-VariableFont_wght.ttf'),
};

SplashScreen.preventAutoHideAsync();

export default function FinalSubmissionScreen() {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(FontAssets);
      } catch (e) {
        console.error("GAGAL MEMUAT FONT, PERIKSA NAMA FILE ANDA:", e);
      } finally {
        setReady(true);
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  if (!isReady) return null;

  // ================= LOGIKA EKSPLISIT  =================
  const myName = "Majeri";
  const stambukIndex = 20; // Dihitung manual: index dari "Majeri" adalah 20
  const totalNames = 50;

  // FITUR: PENGURUTAN 5 NAMA SEBELUM NOMOR STAMBUK (MANUAL)
  const nameBefore5 = studentNameList[(stambukIndex - 5 + totalNames) % totalNames]; // -> Muhammad Adianto
  const nameBefore4 = studentNameList[(stambukIndex - 4 + totalNames) % totalNames]; // -> Yusri Ali
  const nameBefore3 = studentNameList[(stambukIndex - 3 + totalNames) % totalNames]; // -> Muhammad Faturrachman iswan
  const nameBefore2 = studentNameList[(stambukIndex - 2 + totalNames) % totalNames]; // -> Erick Yusuf kotte
  const nameBefore1 = studentNameList[(stambukIndex - 1 + totalNames) % totalNames]; // -> Ferdiansyah

  // FITUR: PENGURUTAN 5 NAMA SETELAH NOMOR STAMBUK (MANUAL)
  const nameAfter1 = studentNameList[(stambukIndex + 1) % totalNames]; // -> Budi Santoso
  const nameAfter2 = studentNameList[(stambukIndex + 2) % totalNames]; // -> Citra Lestari
  const nameAfter3 = studentNameList[(stambukIndex + 3) % totalNames]; // -> Dewi Anggraini
  const nameAfter4 = studentNameList[(stambukIndex + 4) % totalNames]; // -> Eka Prasetyo
  const nameAfter5 = studentNameList[(stambukIndex + 5) % totalNames]; // -> Fitri Handayani
  // ====================================================================

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Final Submission - Tugas 4</Text>
        <Text style={styles.subHeader}>Stambuk Referensi: {myName}</Text>

        {/* FITUR: MENAMPILKAN 10 NAMA DENGAN 10 FONT BERBEDA */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>5 Nama Sebelum Stambuk (5 Font Statis)</Text>
          <Text style={[styles.nameItem, { fontFamily: 'Anton' }]}>1. {nameBefore5}</Text>
          <Text style={[styles.nameItem, { fontFamily: 'Merriweather' }]}>2. {nameBefore4}</Text>
          <Text style={[styles.nameItem, { fontFamily: 'Nunito' }]}>3. {nameBefore3}</Text>
          <Text style={[styles.nameItem, { fontFamily: 'Playfair' }]}>4. {nameBefore2}</Text>
          <Text style={[styles.nameItem, { fontFamily: 'SourceCode' }]}>5. {nameBefore1}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>5 Nama Sesudah Stambuk (5 Font Variabel)</Text>
          <Text style={[styles.nameItem, { fontFamily: 'Recursive', fontWeight: '300' }]}>6. {nameAfter1}</Text>
          <Text style={[styles.nameItem, { fontFamily: 'Epilogue', fontWeight: '500' }]}>7. {nameAfter2}</Text>
          <Text style={[styles.nameItem, { fontFamily: 'Jost', fontWeight: '700' }]}>8. {nameAfter3}</Text>
          <Text style={[styles.nameItem, { fontFamily: 'WorkSans', fontWeight: '900' }]}>9. {nameAfter4}</Text>
          <Text style={[styles.nameItem, { fontFamily: 'Lexend', fontWeight: '400' }]}>10. {nameAfter5}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', padding: 10, color: '#000' },
  subHeader: { fontSize: 16, textAlign: 'center', color: '#555', marginBottom: 15 },
  section: { marginHorizontal: 10, marginBottom: 20 },
  sectionHeader: { fontSize: 18, fontWeight: '600', color: '#333', marginBottom: 5 },
  nameItem: { fontSize: 22, padding: 10, borderWidth: 1, borderColor: '#eee', borderRadius: 5, marginBottom: 5 },
});