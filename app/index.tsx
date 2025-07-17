import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Daftar nama dengan nomor stambuk (disesuaikan dengan kebutuhan pengurutan)
const daftarLengkapNama = [
  { nama: "A. Fajar Apriliawan", stambuk: "001" },
  { nama: "ahmad fathir", stambuk: "002" },
  { nama: "Ali sulton s palilati", stambuk: "003" },
  { nama: "Alvian Syah burhani", stambuk: "004" },
  { nama: "Andi citra ayu lestari", stambuk: "005" },
  { nama: "Arif Rahman", stambuk: "006" },
  { nama: "Bayu Aji", stambuk: "007" },
  { nama: "Budi Santoso", stambuk: "008" },
  { nama: "Chandra Kirana", stambuk: "009" },
  { nama: "Citra Lestari", stambuk: "010" },
  { nama: "Dewi Anggraini", stambuk: "011" },
  { nama: "Dian Lestari", stambuk: "012" },
  { nama: "Eka Prasetyo", stambuk: "013" },
  { nama: "Elang Perkasa", stambuk: "014" },
  { nama: "Erick Yusuf kotte", stambuk: "015" },
  { nama: "Fajar Eka Alamsyah", stambuk: "016" },
  { nama: "Farida Yani", stambuk: "017" },
  { nama: "Ferdiansyah", stambuk: "018" },
  { nama: "Fitri Handayani", stambuk: "019" },
  { nama: "Gita Permata", stambuk: "020" },
  { nama: "Hadi Wijaya", stambuk: "021" },
  { nama: "Hamdani", stambuk: "022" },
  { nama: "Indah Sari", stambuk: "023" },
  { nama: "Joko Susilo", stambuk: "024" },
  { nama: "Kartika Putri", stambuk: "025" },
  { nama: "Lutfi Hakim", stambuk: "026" },
  { nama: "Majeri", stambuk: "027" }, // Nama Anda
  { nama: "Mega Chandra", stambuk: "028" },
  { nama: "Muliana", stambuk: "029" },
  { nama: "Muhammad Adianto", stambuk: "030" },
  { nama: "Muhammad Faturrachman iswan", stambuk: "031" },
  { nama: "Nabila ismail Matta", stambuk: "032" },
  { nama: "Nanda Pratama", stambuk: "033" },
  { nama: "Nur Milani Hidayah", stambuk: "034" },
  { nama: "Nur muhammad ashman", stambuk: "035" },
  { nama: "Nurmisba", stambuk: "036" },
  { nama: "Putra Wijaya", stambuk: "037" },
  { nama: "Rina Amelia", stambuk: "038" },
  { nama: "Rizki Ananda", stambuk: "039" },
  { nama: "Sari Puspita", stambuk: "040" },
  { nama: "Siti Marwa", stambuk: "041" },
  { nama: "SYAWALUDDIN", stambuk: "042" },
  { nama: "Taufik Hidayat", stambuk: "043" },
  { nama: "Utari Dewi", stambuk: "044" },
  { nama: "Vino Bastian", stambuk: "045" },
  { nama: "Wahyu Nugroho", stambuk: "046" },
  { nama: "Yulia Rahman", stambuk: "047" },
  { nama: "Yusri Ali", stambuk: "048" },
  { nama: "Zainal Abidin", stambuk: "049" }
];

const FontAssets = {
  // 5 Font Statis
  'Anton-Regular': require('./assets/fonts/statis/Anton-Regular.ttf'),
  'Merriweather-Regular': require('./assets/fonts/statis/Merriweather_24pt-Regular.ttf'),
  'Nunito-Light': require('./assets/fonts/statis/Nunito-Light.ttf'),
  'PlayfairDisplay-Regular': require('./assets/fonts/statis/PlayfairDisplay-Regular.ttf'),
  'SourceCodePro-Regular': require('./assets/fonts/statis/SourceCodePro-Regular.ttf'),
  
  // 5 Font Variabel (nama lengkap, tidak terpotong)
  'Recursive-VariableFont': require('./assets/fonts/variabel/Recursive-VariableFont_CASL,CRSV,MONO,slnt,wght.ttf'),
  'Epilogue-VariableFont': require('./assets/fonts/variabel/Epilogue-VariableFont_wght.ttf'),
  'Jost-VariableFont': require('./assets/fonts/variabel/Jost-VariableFont_wght.ttf'),
  'WorkSans-VariableFont': require('./assets/fonts/variabel/WorkSans-VariableFont_wght.ttf'),
  'Lexend-VariableFont': require('./assets/fonts/variabel/Lexend-VariableFont_wght.ttf'),
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

  // Urutkan nama berdasarkan nomor stambuk
  const sortedNames = [...daftarLengkapNama].sort((a, b) => a.stambuk.localeCompare(b.stambuk));
  
  const myName = "Majeri";
  const myIndex = sortedNames.findIndex(item => item.nama === myName);
  const totalNames = sortedNames.length;

  // Ambil 5 nama sebelum berdasarkan urutan stambuk
  const beforeNames = Array.from({ length: 5 }, (_, i) => {
    const index = (myIndex - (5 - i) + totalNames) % totalNames;
    return sortedNames[index];
  });

  // Ambil 5 nama sesudah berdasarkan urutan stambuk
  const afterNames = Array.from({ length: 5 }, (_, i) => {
    const index = (myIndex + 1 + i) % totalNames;
    return sortedNames[index];
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>Final Task Showcase</Text>
        <Text style={styles.subtitle}>Reference Name: {myName} (Stambuk: {sortedNames[myIndex].stambuk})</Text>
        <Text style={styles.subtitle}>Urutan dalam daftar terurut: #{myIndex + 1}</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5 Nama Sebelum (5 Font Statis Berbeda)</Text>
          <Text style={[styles.name, { fontFamily: 'Anton-Regular' }]}>
            1. {beforeNames[0].nama} (Stambuk: {beforeNames[0].stambuk})
          </Text>
          <Text style={[styles.name, { fontFamily: 'Merriweather-Regular' }]}>
            2. {beforeNames[1].nama} (Stambuk: {beforeNames[1].stambuk})
          </Text>
          <Text style={[styles.name, { fontFamily: 'Nunito-Light' }]}>
            3. {beforeNames[2].nama} (Stambuk: {beforeNames[2].stambuk})
          </Text>
          <Text style={[styles.name, { fontFamily: 'PlayfairDisplay-Regular' }]}>
            4. {beforeNames[3].nama} (Stambuk: {beforeNames[3].stambuk})
          </Text>
          <Text style={[styles.name, { fontFamily: 'SourceCodePro-Regular' }]}>
            5. {beforeNames[4].nama} (Stambuk: {beforeNames[4].stambuk})
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5 Nama Sesudah (5 Font Variabel Berbeda)</Text>
          <Text style={[styles.name, { fontFamily: 'Recursive-VariableFont', fontWeight: '300' }]}>
            6. {afterNames[0].nama} (Stambuk: {afterNames[0].stambuk})
          </Text>
          <Text style={[styles.name, { fontFamily: 'Epilogue-VariableFont', fontWeight: '500' }]}>
            7. {afterNames[1].nama} (Stambuk: {afterNames[1].stambuk})
          </Text>
          <Text style={[styles.name, { fontFamily: 'Jost-VariableFont', fontWeight: '700' }]}>
            8. {afterNames[2].nama} (Stambuk: {afterNames[2].stambuk})
          </Text>
          <Text style={[styles.name, { fontFamily: 'WorkSans-VariableFont', fontWeight: '900' }]}>
            9. {afterNames[3].nama} (Stambuk: {afterNames[3].stambuk})
          </Text>
          <Text style={[styles.name, { fontFamily: 'Lexend-VariableFont', fontWeight: '400' }]}>
            10. {afterNames[4].nama} (Stambuk: {afterNames[4].stambuk})
          </Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Informasi Font yang Digunakan:</Text>
          <Text style={styles.infoText}>Font Statis: Anton, Merriweather, Nunito, PlayfairDisplay, SourceCodePro</Text>
          <Text style={styles.infoText}>Font Variabel: Recursive, Epilogue, Jost, WorkSans, Lexend</Text>
          <Text style={styles.infoText}>Total Font: 10 (5 Statis + 5 Variabel)</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#111827' 
  },
  content: { 
    padding: 20 
  },
  mainTitle: { 
    fontSize: 36, 
    fontWeight: 'bold', 
    color: '#FFFFFF', 
    textAlign: 'center', 
    fontFamily: 'Anton-Regular',
    marginBottom: 10 
  },
  subtitle: { 
    fontSize: 16, 
    color: '#9CA3AF', 
    textAlign: 'center', 
    marginBottom: 15 
  },
  section: { 
    marginBottom: 25, 
    backgroundColor: '#1F2937', 
    padding: 15, 
    borderRadius: 10 
  },
  sectionTitle: { 
    fontSize: 20, 
    fontWeight: '600', 
    color: '#F9FAFB', 
    marginBottom: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: '#4B5563', 
    paddingBottom: 5 
  },
  name: { 
    fontSize: 20, 
    color: '#E5E7EB', 
    paddingVertical: 8,
    lineHeight: 28 
  },
  infoSection: {
    backgroundColor: '#065F46',
    padding: 15,
    borderRadius: 10,
    marginTop: 20
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 10
  },
  infoText: {
    fontSize: 14,
    color: '#D1FAE5',
    marginBottom: 5
  }
});