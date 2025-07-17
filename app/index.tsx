import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

// Daftar nama yang sudah diurutkan secara manual
const daftarNamaUrut = [
    { nama: "Siti Marwa", stambuk: "105841100122" },
    { nama: "Fajar Eka Alamsyah", stambuk: "105841100322" },
    { nama: "Ferdiansyah", stambuk: "105841100422" },
    { nama: "Nabila ismail Matta", stambuk: "105841100722" },
    { nama: "Nur Milani Hidayah", stambuk: "105841100822" },
    { nama: "Arif Rahman", stambuk: "105841100921" },
    { nama: "A. Fajar Apriliawan", stambuk: "105841101122" },
    { nama: "Muhammad Adianto", stambuk: "105841101322" },
    { nama: "SYAWALUDDIN", stambuk: "105841101622" },
    { nama: "Andi citra ayu lestari", stambuk: "105841101722" },
    { nama: "Erick Yusuf kotte", stambuk: "105841101922" },
    { nama: "Ali sulton s palilati", stambuk: "105841102222" },
    { nama: "ahmad fathir", stambuk: "105841102922" },
    { nama: "Muhammad Faturrachman iswan", stambuk: "105841103322" },
    { nama: "Nurmisba", stambuk: "105841103422" },
    { nama: "Alvian Syah burhani", stambuk: "105841103522" },
    { nama: "Majeri", stambuk: "105841103622" }, // TITIK REFERENSI
    { nama: "Hamdani", stambuk: "105841103722" },
    { nama: "Muliana", stambuk: "105841103822" },
    { nama: "Nur muhammad ashman", stambuk: "N/A" },
    { nama: "Yusri Ali", stambuk: "117222" },
];

// Definisikan tipe untuk objek font
type FontStyle = {
  name: string;
  weight: string;
};

export default function FontShowcase() {
  const myStambuk = "105841103622";
  const myIndex = daftarNamaUrut.findIndex(p => p.stambuk === myStambuk);
  const totalNames = daftarNamaUrut.length;

  // Berikan tipe eksplisit pada array 'fontList'
  const displayList: { nama: string, stambuk: string }[] = [];
  const fontList: FontStyle[] = [];
  
  const staticFonts = ['Anton-Regular', 'Merriweather-Regular', 'Nunito-Light', 'PlayfairDisplay-Regular', 'SourceCodePro-Regular'];
  const variableFonts = ['Recursive-VariableFont', 'Epilogue-VariableFont', 'Jost-VariableFont', 'WorkSans-VariableFont', 'Lexend-VariableFont'];
  const variableWeights = ['300', '400', '500', '700', '900'];

  // 5 nama sebelum
  for (let i = 5; i >= 1; i--) {
    const index = (myIndex - i + totalNames) % totalNames;
    displayList.push(daftarNamaUrut[index]);
    fontList.push({ name: staticFonts[5 - i], weight: 'normal' });
  }

  // 5 nama sesudah
  for (let i = 1; i <= 5; i++) {
    const index = (myIndex + i) % totalNames;
    displayList.push(daftarNamaUrut[index]);
    fontList.push({ name: variableFonts[i - 1], weight: variableWeights[i - 1] });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <View style={styles.header}>
          <Text style={[styles.mainTitle, { fontFamily: 'Anton-Regular' }]}>
            Final Project Showcase
          </Text>
          <Text style={styles.referenceText}>
            Referensi: {daftarNamaUrut[myIndex].nama} ({myStambuk})
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>10 Nama dengan Font Berbeda</Text>
          {displayList.map((person, index) => (
            <View key={person.stambuk} style={styles.nameContainer}>
              <Text style={[
                styles.name,
                { 
                  fontFamily: fontList[index].name,
                  fontWeight: fontList[index].weight as any,
                }
              ]}>
                {`${index + 1}. ${person.nama}`}
              </Text>
              <Text style={styles.stambukText}>
                Stambuk: {person.stambuk} | Font: {fontList[index].name}
              </Text>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  content: { padding: 20 },
  header: { backgroundColor: '#1E293B', padding: 20, borderRadius: 12, marginBottom: 20, borderWidth: 2, borderColor: '#3B82F6' },
  mainTitle: { fontSize: 32, fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center', marginBottom: 10 },
  referenceText: { fontSize: 14, color: '#94A3B8', textAlign: 'center', marginTop: 5 },
  section: { backgroundColor: '#1E293B', padding: 20, borderRadius: 12, marginBottom: 20, borderWidth: 1, borderColor: '#334155' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#F1F5F9', marginBottom: 15, textAlign: 'center', borderBottomWidth: 2, borderBottomColor: '#3B82F6', paddingBottom: 10 },
  nameContainer: { marginBottom: 15, padding: 10, backgroundColor: '#0F172A', borderRadius: 8, borderWidth: 1, borderColor: '#475569' },
  name: { fontSize: 22, color: '#FFFFFF', marginBottom: 5, lineHeight: 30 },
  stambukText: { fontSize: 12, color: '#94A3B8', fontStyle: 'italic' },
});