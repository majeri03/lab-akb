import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

// DAFTAR LENGKAP NAMA DAN STAMBUK
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

export default function ExplicitFontShowcase() {
  // 1. PENGURUTAN BERDASARKAN STAMBUK
  const sortedNames = [...daftarLengkapNama].sort((a, b) => 
    a.stambuk.localeCompare(b.stambuk)
  );

  const myName = "Majeri";
  const myStambuk = "027";
  const totalNames = sortedNames.length;

  // 2. TEMUKAN INDEKS NAMA REFERENSI
  const myIndex = sortedNames.findIndex(item => item.stambuk === myStambuk);
  const myData = sortedNames[myIndex];

  // 3. LOGIKA UNTUK MENGAMBIL 5 NAMA SEBELUM DAN 5 SESUDAH
  // Aturan khusus untuk indeks rendah (circular/wrapping) diimplementasikan dengan modulo
  const getDisplayList = () => {
    const displayList = [];

    // Mengambil 5 nama sebelum (mundur)
    for (let i = 5; i >= 1; i--) {
      const index = (myIndex - i + totalNames) % totalNames;
      displayList.push(sortedNames[index]);
    }

    // Menambahkan nama referensi di tengah
    displayList.push(myData);

    // Mengambil 5 nama setelah (maju)
    for (let i = 1; i <= 5; i++) {
      const index = (myIndex + i) % totalNames;
      displayList.push(sortedNames[index]);
    }

    // Harusnya total ada 11 nama, kita ambil 10 nama (5 sebelum, 5 sesudah)
    // Untuk tujuan ini, kita akan tampilkan 11 nama termasuk referensi
    // Namun jika harus 10, kita bisa slice(1) atau slice(0, 10)
    // Untuk kejelasan, kita tampilkan semua 11 (5 sebelum, 1 referensi, 5 sesudah)
    
    // Namun sesuai permintaan, kita akan tampilkan 10 nama
    // 5 sebelum dan 5 sesudah, nama referensi hanya sebagai titik acuan
    const beforeNames = displayList.slice(0, 5);
    const afterNames = displayList.slice(6, 11);
    
    return { beforeNames, afterNames };
  };

  const { beforeNames, afterNames } = getDisplayList();

  // 4. DAFTAR FONT YANG AKAN DIGUNAKAN
  const staticFonts = [
    'Anton-Regular', 'Merriweather-Regular', 'Nunito-Light', 'PlayfairDisplay-Regular', 'SourceCodePro-Regular'
  ];
  const variableFonts = [
    'Recursive-VariableFont', 'Epilogue-VariableFont', 'Jost-VariableFont', 'WorkSans-VariableFont', 'Lexend-VariableFont'
  ];
  const variableWeights = ['300', '400', '500', '700', '900'] as const;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        
        <View style={styles.header}>
          <Text style={[styles.mainTitle, { fontFamily: 'Anton-Regular' }]}>
            Final Project Showcase
          </Text>
          <Text style={styles.referenceText}>
            Referensi: {myName} (Stambuk: {myStambuk})
          </Text>
        </View>

        {/* BAGIAN 5 NAMA SEBELUM */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            5 Nama Sebelum Stambuk {myStambuk} (Font Statis)
          </Text>
          {beforeNames.map((person, index) => (
            <View key={`before-${person.stambuk}`} style={styles.nameContainer}>
              <Text style={[styles.name, { fontFamily: staticFonts[index] }]}>
                {`${sortedNames.findIndex(p => p.stambuk === person.stambuk) + 1}. ${person.nama}`}
              </Text>
              <Text style={styles.stambukText}>
                Stambuk: {person.stambuk} | Font: {staticFonts[index]}
              </Text>
            </View>
          ))}
        </View>
        
        {/* NAMA REFERENSI */}
        <View style={[styles.section, styles.referenceSection]}>
            <Text style={[styles.name, {fontFamily: 'Jost-VariableFont', fontWeight: 'bold', fontSize: 26, textAlign: 'center'}]}>
                {myIndex + 1}. {myName}
            </Text>
            <Text style={[styles.stambukText, {textAlign: 'center'}]}>
                Stambuk: {myStambuk} (Referensi)
            </Text>
        </View>

        {/* BAGIAN 5 NAMA SETELAH */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            5 Nama Setelah Stambuk {myStambuk} (Font Variabel)
          </Text>
          {afterNames.map((person, index) => (
            <View key={`after-${person.stambuk}`} style={styles.nameContainer}>
              <Text style={[
                styles.name, 
                { fontFamily: variableFonts[index], fontWeight: variableWeights[index] }
              ]}>
                {`${sortedNames.findIndex(p => p.stambuk === person.stambuk) + 1}. ${person.nama}`}
              </Text>
              <Text style={styles.stambukText}>
                Stambuk: {person.stambuk} | Font: {variableFonts[index]} (Weight: {variableWeights[index]})
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
  header: {
    backgroundColor: '#1E293B', padding: 20, borderRadius: 12, marginBottom: 20,
    borderWidth: 2, borderColor: '#3B82F6'
  },
  mainTitle: { fontSize: 32, fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center', marginBottom: 10 },
  referenceText: { fontSize: 14, color: '#94A3B8', textAlign: 'center', marginTop: 5 },
  section: {
    backgroundColor: '#1E293B', padding: 20, borderRadius: 12,
    marginBottom: 20, borderWidth: 1, borderColor: '#334155'
  },
  referenceSection: {
      backgroundColor: '#3B82F6',
      borderColor: '#FFFFFF'
  },
  sectionTitle: {
    fontSize: 18, fontWeight: '700', color: '#F1F5F9', marginBottom: 15,
    textAlign: 'center', borderBottomWidth: 2, borderBottomColor: '#3B82F6', paddingBottom: 10
  },
  nameContainer: {
    marginBottom: 15, padding: 10, backgroundColor: '#0F172A',
    borderRadius: 8, borderWidth: 1, borderColor: '#475569'
  },
  name: { fontSize: 22, color: '#FFFFFF', marginBottom: 5, lineHeight: 30 },
  stambukText: { fontSize: 12, color: '#94A3B8', fontStyle: 'italic' },
});