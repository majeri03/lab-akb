import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, StyleProp, TextStyle } from 'react-native';

const KartuNama = ({ nama, stambuk, gayaFont, infoFont }: { nama: string, stambuk: string, gayaFont: StyleProp<TextStyle>, infoFont: string }) => (
  <View style={gaya.blokNama}>
    <Text style={[gaya.teksNama, gayaFont]}>{nama}</Text>
    <Text style={gaya.teksStambuk}>{stambuk}</Text>
    <Text style={gaya.infoFont}>{infoFont}</Text>
  </View>
);

export default function TampilanFontMajeri() {
  return (
    <SafeAreaView style={gaya.wadah}>
      <ScrollView contentContainerStyle={gaya.konten}>

        <View style={gaya.kepalaHalaman}>
          <Text style={[gaya.judulUtama, { fontFamily: 'Anton-Regular' }]}>
            Proyek Font Majeri
          </Text>
          <Text style={gaya.teksReferensi}>
            Titik Acuan: Majeri (105841103622)
          </Text>
        </View>

        {/* --- 5 NAMA SEBELUM (FONT STATIS) --- */}
        <KartuNama 
          nama="1. Ali sulton s palilati"
          stambuk="105841102222"
          gayaFont={{ fontFamily: 'Anton-Regular' }}
          infoFont="Font: Anton-Regular"
        />
        <KartuNama 
          nama="2. ahmad fathir"
          stambuk="105841102922"
          gayaFont={{ fontFamily: 'Merriweather-Regular' }}
          infoFont="Font: Merriweather-Regular"
        />
        <KartuNama 
          nama="3. Muhammad Faturrachman iswan"
          stambuk="105841103322"
          gayaFont={{ fontFamily: 'Nunito-Light' }}
          infoFont="Font: Nunito-Light"
        />
        <KartuNama 
          nama="4. Nurmisba"
          stambuk="105841103422"
          gayaFont={{ fontFamily: 'PlayfairDisplay-Regular' }}
          infoFont="Font: PlayfairDisplay-Regular"
        />
        <KartuNama 
          nama="5. Alvian Syah burhani"
          stambuk="105841103522"
          gayaFont={{ fontFamily: 'SourceCodePro-Regular' }}
          infoFont="Font: SourceCodePro-Regular"
        />

        <View style={[gaya.blokNama, gaya.namaReferensi]}>
            <Text style={gaya.teksNamaReferensi}>Majeri</Text>
            <Text style={gaya.teksStambukReferensi}>(105841103622)</Text>
        </View>
        
        <KartuNama 
          nama="6. Hamdani"
          stambuk="105841103722"
          gayaFont={{ fontFamily: 'Recursive-VariableFont', fontWeight: '300' }}
          infoFont="Font: Recursive-VariableFont (Weight: 300)"
        />
        <KartuNama 
          nama="7. Muliana"
          stambuk="105841103822"
          gayaFont={{ fontFamily: 'Epilogue-VariableFont', fontWeight: '400' }}
          infoFont="Font: Epilogue-VariableFont (Weight: 400)"
        />
        <KartuNama 
          nama="8. Yusri Ali"
          stambuk="105841117222"
          gayaFont={{ fontFamily: 'Jost-VariableFont', fontWeight: '500' }}
          infoFont="Font: Jost-VariableFont (Weight: 500)"
        />
        <KartuNama 
          nama="9. Nur muhammad ashman"
          stambuk="N/A"
          gayaFont={{ fontFamily: 'WorkSans-VariableFont', fontWeight: '700' }}
          infoFont="Font: WorkSans-VariableFont (Weight: 700)"
        />
        <KartuNama 
          nama="10. Arif Rahman"
          stambuk="105841100921"
          gayaFont={{ fontFamily: 'Lexend-VariableFont', fontWeight: '900' }}
          infoFont="Font: Lexend-VariableFont (Weight: 900)"
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const gaya = StyleSheet.create({
  wadah: { 
    flex: 1, 
    backgroundColor: '#0A192F' 
  },
  konten: { 
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
  kepalaHalaman: {
    width: '100%',
    marginBottom: 25,
    padding: 20,
    backgroundColor: '#172A45',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#38BDF8',
  },
  judulUtama: { 
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#E2E8F0', 
    textAlign: 'center', 
  },
  teksReferensi: { 
    fontSize: 15, 
    color: '#A8B2D1', 
    textAlign: 'center', 
    marginTop: 10 
  },
  blokNama: {
    backgroundColor: '#112240',
    padding: 20,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#233554',
    width: '100%',
    alignItems: 'center',
  },
  teksNama: {
    fontSize: 24,
    color: '#CCD6F6',
    lineHeight: 32,
    textAlign: 'center',
  },
  teksStambuk: {
    fontSize: 14,
    color: '#8892B0',
    marginTop: 5,
  },
  infoFont: {
    fontSize: 12,
    color: '#4A5C7E',
    marginTop: 8,
    fontStyle: 'italic',
  },
  namaReferensi: {
    backgroundColor: '#38BDF8',
    borderColor: '#7DD3FC',
  },
  teksNamaReferensi: {
      fontSize: 26,
      color: '#0A192F',
      fontWeight: 'bold',
  },
  teksStambukReferensi: {
      fontSize: 14,
      color: '#172A45',
      marginTop: 4,
  }
});
