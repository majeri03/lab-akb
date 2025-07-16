import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// REGISTRY FONT 
const FontAssetsToLoad = {
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

export default function FinalTaskScreen() {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(FontAssetsToLoad);
      } catch (e) {
        console.error("GAGAL MEMUAT FONT:", e);
      } finally {
        setReady(true);
        SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  if (!isReady) return null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Tugas 4 Final</Text>
        <Text style={styles.subHeader}>Referensi Stambuk: Majeri (Urutan #21)</Text>

        {/* FITUR EKSPLISIT: 5 NAMA SEBELUM STAMBUK */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>5 Nama Sebelum Stambuk</Text>
          <Text style={[styles.nameItem, { fontFamily: 'Anton' }]}>16. Muhammad Faturrachman iswan</Text>
          <Text style={[styles.nameItem, { fontFamily: 'Merriweather' }]}>17. Erick Yusuf kotte</Text>
          <Text style={[styles.nameItem, { fontFamily: 'Nunito' }]}>18. Ferdiansyah</Text>
          <Text style={[styles.nameItem, { fontFamily: 'Playfair' }]}>19. Arif Rahman</Text>
          <Text style={[styles.nameItem, { fontFamily: 'SourceCode' }]}>20. ahmad fathir</Text>
        </View>

        {/* FITUR EKSPLISIT: 5 NAMA SETELAH STAMBUK */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>5 Nama Sesudah Stambuk</Text>
          <Text style={[styles.nameItem, { fontFamily: 'Recursive' }]}>22. Budi Santoso</Text>
          <Text style={[styles.nameItem, { fontFamily: 'Epilogue' }]}>23. Citra Lestari</Text>
          <Text style={[styles.nameItem, { fontFamily: 'Jost' }]}>24. Dewi Anggraini</Text>
          <Text style={[styles.nameItem, { fontFamily: 'WorkSans' }]}>25. Eka Prasetyo</Text>
          <Text style={[styles.nameItem, { fontFamily: 'Lexend' }]}>26. Fitri Handayani</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', padding: 10, color: '#000' },
  subHeader: { fontSize: 16, textAlign: 'center', color: '#555', marginBottom: 15 },
  card: { backgroundColor: '#F9FAFB', padding: 15, borderRadius: 12, marginBottom: 15, borderWidth: 1, borderColor: '#E5E7EB' },
  cardTitle: { fontSize: 18, fontWeight: '600', color: '#111827', marginBottom: 10 },
  nameItem: { fontSize: 22, color: '#374151', paddingVertical: 5 },
});