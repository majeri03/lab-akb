import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// DAFTAR LENGKAP NAMA DENGAN STAMBUK - TIDAK TERPOTONG
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
  { nama: "Majeri", stambuk: "027" }, // NAMA REFERENSI
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

// IMPOR 10 FONT - 5 STATIS + 5 VARIABEL
const FontAssets = {
  // === 5 FONT STATIS ===
  'Anton-Regular': require('./assets/fonts/statis/Anton-Regular.ttf'),
  'Merriweather-Regular': require('./assets/fonts/statis/Merriweather_24pt-Regular.ttf'),
  'Nunito-Light': require('./assets/fonts/statis/Nunito-Light.ttf'),
  'PlayfairDisplay-Regular': require('./assets/fonts/statis/PlayfairDisplay-Regular.ttf'),
  'SourceCodePro-Regular': require('./assets/fonts/statis/SourceCodePro-Regular.ttf'),
  
  // === 5 FONT VARIABEL ===
  'Recursive-VariableFont': require('./assets/fonts/variabel/Recursive-VariableFont_CASL,CRSV,MONO,slnt,wght.ttf'),
  'Epilogue-VariableFont': require('./assets/fonts/variabel/Epilogue-VariableFont_wght.ttf'),
  'Jost-VariableFont': require('./assets/fonts/variabel/Jost-VariableFont_wght.ttf'),
  'WorkSans-VariableFont': require('./assets/fonts/variabel/WorkSans-VariableFont_wght.ttf'),
  'Lexend-VariableFont': require('./assets/fonts/variabel/Lexend-VariableFont_wght.ttf'),
};

// PREVENT SPLASH SCREEN AUTO HIDE
SplashScreen.preventAutoHideAsync();

export default function ExplicitFontShowcase() {
  const [isReady, setIsReady] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        console.log('Loading fonts...');
        // EXPLICIT FONT LOADING
        await Font.loadAsync(FontAssets);
        setFontsLoaded(true);
        console.log('All 10 fonts loaded successfully!');
        
        // SHOW SUCCESS ALERT
        Alert.alert('Success', '10 fonts loaded successfully!\n5 Static + 5 Variable fonts');
        
      } catch (error) {
        console.error('Font loading error:', error);
        Alert.alert('Error', 'Failed to load fonts');
      } finally {
        setIsReady(true);
        SplashScreen.hideAsync();
      }
    }
    
    loadFonts();
  }, []);

  if (!isReady || !fontsLoaded) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading 10 fonts...</Text>
          <Text style={styles.loadingSubText}>5 Static + 5 Variable</Text>
        </View>
      </SafeAreaView>
    );
  }

  // IMPLEMENTASI PENGURUTAN BERDASARKAN STAMBUK
  const sortedNamesAscending = [...daftarLengkapNama].sort((a, b) => 
    a.stambuk.localeCompare(b.stambuk)
  );

  const myName = "Majeri";
  const myStambuk = "027";
  
  // FIND INDEX BERDASARKAN STAMBUK YANG DIURUTKAN
  const myIndex = sortedNamesAscending.findIndex(item => 
    item.nama === myName && item.stambuk === myStambuk
  );
  
  const totalNames = sortedNamesAscending.length;

  // LOGIKA PENGAMBILAN 5 NAMA SEBELUM NOMOR STAMBUK
  const getNamesBeforeStambuk = () => {
    const beforeNames = [];
    for (let i = 1; i <= 5; i++) {
      const index = (myIndex - i + totalNames) % totalNames;
      beforeNames.unshift(sortedNamesAscending[index]);
    }
    return beforeNames;
  };

  // LOGIKA PENGAMBILAN 5 NAMA SETELAH NOMOR STAMBUK
  const getNamesAfterStambuk = () => {
    const afterNames = [];
    for (let i = 1; i <= 5; i++) {
      const index = (myIndex + i) % totalNames;
      afterNames.push(sortedNamesAscending[index]);
    }
    return afterNames;
  };

  const beforeNames = getNamesBeforeStambuk();
  const afterNames = getNamesAfterStambuk();

  // DAFTAR 5 FONT STATIS UNTUK NAMA SEBELUM
  const staticFonts = [
    'Anton-Regular',
    'Merriweather-Regular', 
    'Nunito-Light',
    'PlayfairDisplay-Regular',
    'SourceCodePro-Regular'
  ];

  // DAFTAR 5 FONT VARIABEL UNTUK NAMA SETELAH
  const variableFonts = [
    'Recursive-VariableFont',
    'Epilogue-VariableFont',
    'Jost-VariableFont', 
    'WorkSans-VariableFont',
    'Lexend-VariableFont'
  ];

  const variableWeights = ['300', '400', '500', '700', '900'] as const;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        
        {/* HEADER SECTION */}
        <View style={styles.header}>
          <Text style={[styles.mainTitle, { fontFamily: 'Anton-Regular' }]}>
            LAB AKB - FONT SHOWCASE
          </Text>
          <Text style={styles.subtitle}>
            Total Font Loaded: 10 (5 Static + 5 Variable)
          </Text>
          <Text style={styles.referenceText}>
            Reference: {myName} (Stambuk: {myStambuk})
          </Text>
          <Text style={styles.referenceText}>
            Position in sorted list: #{myIndex + 1}
          </Text>
        </View>

        {/* FONT LOADING STATUS */}
        <View style={styles.statusSection}>
          <Text style={styles.statusTitle}>Font Loading Status:</Text>
          <Text style={styles.statusText}>✅ 5 Static Fonts Loaded</Text>
          <Text style={styles.statusText}>✅ 5 Variable Fonts Loaded</Text>
          <Text style={styles.statusText}>✅ Total: 10 Fonts Ready</Text>
        </View>

        {/* 5 NAMA SEBELUM DENGAN 5 FONT STATIS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            5 NAMA SEBELUM STAMBUK {myStambuk} (5 FONT STATIS)
          </Text>
          {beforeNames.map((person, index) => (
            <View key={`before-${index}`} style={styles.nameContainer}>
              <Text style={[styles.name, { fontFamily: staticFonts[index] }]}>
                {index + 1}. {person.nama}
              </Text>
              <Text style={styles.stambukText}>
                Stambuk: {person.stambuk} | Font: {staticFonts[index]}
              </Text>
            </View>
          ))}
        </View>

        {/* 5 NAMA SETELAH DENGAN 5 FONT VARIABEL */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            5 NAMA SETELAH STAMBUK {myStambuk} (5 FONT VARIABEL)
          </Text>
          {afterNames.map((person, index) => (
            <View key={`after-${index}`} style={styles.nameContainer}>
              <Text style={[
                styles.name, 
                { 
                  fontFamily: variableFonts[index],
                  fontWeight: variableWeights[index]
                }
              ]}>
                {index + 6}. {person.nama}
              </Text>
              <Text style={styles.stambukText}>
                Stambuk: {person.stambuk} | Font: {variableFonts[index]} (Weight: {variableWeights[index]})
              </Text>
            </View>
          ))}
        </View>

        {/* SUMMARY SECTION */}
        <View style={styles.summarySection}>
          <Text style={styles.summaryTitle}>SUMMARY LENGKAP:</Text>
          <Text style={styles.summaryText}>✅ Total nama ditampilkan: 10</Text>
          <Text style={styles.summaryText}>✅ 5 nama sebelum stambuk {myStambuk}</Text>
          <Text style={styles.summaryText}>✅ 5 nama setelah stambuk {myStambuk}</Text>
          <Text style={styles.summaryText}>✅ Pengurutan berdasarkan stambuk: ASCENDING</Text>
          <Text style={styles.summaryText}>✅ 5 font statis digunakan</Text>
          <Text style={styles.summaryText}>✅ 5 font variabel digunakan</Text>
          <Text style={styles.summaryText}>✅ Total font: 10</Text>
        </View>

        {/* FONT DETAILS */}
        <View style={styles.fontDetailsSection}>
          <Text style={styles.fontDetailsTitle}>DETAIL FONT YANG DIGUNAKAN:</Text>
          
          <Text style={styles.fontCategoryTitle}>FONT STATIS (5):</Text>
          {staticFonts.map((font, index) => (
            <Text key={font} style={styles.fontItem}>
              {index + 1}. {font}
            </Text>
          ))}
          
          <Text style={styles.fontCategoryTitle}>FONT VARIABEL (5):</Text>
          {variableFonts.map((font, index) => (
            <Text key={font} style={styles.fontItem}>
              {index + 1}. {font}
            </Text>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A'
  },
  content: {
    padding: 20
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  loadingSubText: {
    fontSize: 16,
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 10
  },
  header: {
    backgroundColor: '#1E293B',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#3B82F6'
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    color: '#22D3EE',
    textAlign: 'center',
    fontWeight: '600'
  },
  referenceText: {
    fontSize: 14,
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 5
  },
  statusSection: {
    backgroundColor: '#065F46',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20
  },
  statusTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 10
  },
  statusText: {
    fontSize: 14,
    color: '#A7F3D0',
    marginBottom: 5
  },
  section: {
    backgroundColor: '#1E293B',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#334155'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F1F5F9',
    marginBottom: 15,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#3B82F6',
    paddingBottom: 10
  },
  nameContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#0F172A',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#475569'
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    marginBottom: 5,
    lineHeight: 30
  },
  stambukText: {
    fontSize: 12,
    color: '#94A3B8',
    fontStyle: 'italic'
  },
  summarySection: {
    backgroundColor: '#7C3AED',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 15,
    textAlign: 'center'
  },
  summaryText: {
    fontSize: 14,
    color: '#E9D5FF',
    marginBottom: 8,
    fontWeight: '500'
  },
  fontDetailsSection: {
    backgroundColor: '#DC2626',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20
  },
  fontDetailsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 15,
    textAlign: 'center'
  },
  fontCategoryTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FEF2F2',
    marginTop: 15,
    marginBottom: 10
  },
  fontItem: {
    fontSize: 12,
    color: '#FECACA',
    marginBottom: 5,
    paddingLeft: 10
  }
});