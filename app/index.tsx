import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HalamanTugasMajeri() {
  return (
    <SafeAreaView style={desain.areaAman}>
      <ScrollView contentContainerStyle={desain.kontenScroll}>

        <View style={desain.headerAplikasi}>
          <Text style={[desain.teksJudul, { fontFamily: 'Anton-Regular' }]}>
            Tugas 4 - LAB AKB
          </Text>
          <Text style={desain.teksSubJudul}>
             Majeri (105841103622)
          </Text>
        </View>

        {/* --- 5 NAMA SEBELUM (FONT STATIS) --- */}
        <View style={desain.kartuNama}>
          <Text style={[desain.teksNama, { fontFamily: 'Anton-Regular' }]}>Ali sulton s palilati</Text>
          <Text style={desain.teksStambuk}>105841102222</Text>
        </View>
        <View style={desain.kartuNama}>
          <Text style={[desain.teksNama, { fontFamily: 'Merriweather-Regular' }]}>ahmad fathir</Text>
          <Text style={desain.teksStambuk}>105841102922</Text>
        </View>
        <View style={desain.kartuNama}>
          <Text style={[desain.teksNama, { fontFamily: 'Nunito-Light' }]}>Muhammad Faturrachman iswan</Text>
          <Text style={desain.teksStambuk}>105841103322</Text>
        </View>
        <View style={desain.kartuNama}>
          <Text style={[desain.teksNama, { fontFamily: 'PlayfairDisplay-Regular' }]}>Nurmisba</Text>
          <Text style={desain.teksStambuk}>105841103422</Text>
        </View>
        <View style={desain.kartuNama}>
          <Text style={[desain.teksNama, { fontFamily: 'SourceCodePro-Regular' }]}>Alvian Syah burhani</Text>
          <Text style={desain.teksStambuk}>105841103522</Text>
        </View>
        
        {/* --- PEMISAH --- */}
        <View style={desain.pemisah}>
            <Text style={desain.teksPemisah}>--- Titik Acuan: Majeri ---</Text>
        </View>

        {/* --- 5 NAMA SESUDAH (FONT VARIABEL) --- */}
        <View style={desain.kartuNama}>
          <Text style={[desain.teksNama, { fontFamily: 'Recursive-VariableFont', fontWeight: '300' }]}>Hamdani</Text>
          <Text style={desain.teksStambuk}>105841103722</Text>
        </View>
        <View style={desain.kartuNama}>
          <Text style={[desain.teksNama, { fontFamily: 'Epilogue-VariableFont', fontWeight: '400' }]}>Muliana</Text>
          <Text style={desain.teksStambuk}>105841103822</Text>
        </View>
        <View style={desain.kartuNama}>
          <Text style={[desain.teksNama, { fontFamily: 'Jost-VariableFont', fontWeight: '500' }]}>Yusri Ali</Text>
          <Text style={desain.teksStambuk}>105841117222</Text>
        </View>
        <View style={desain.kartuNama}>
          <Text style={[desain.teksNama, { fontFamily: 'WorkSans-VariableFont', fontWeight: '700' }]}>Nur muhammad ashman</Text>
          <Text style={desain.teksStambuk}>N/A</Text>
        </View>
        <View style={desain.kartuNama}>
          <Text style={[desain.teksNama, { fontFamily: 'Lexend-VariableFont', fontWeight: '900' }]}>Arif Rahman</Text>
          <Text style={desain.teksStambuk}>105841100921</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const desain = StyleSheet.create({
  areaAman: { 
    flex: 1, 
    backgroundColor: '#F5F5F5', 
  },
  kontenScroll: { 
    padding: 20,
  },
  headerAplikasi: {
    marginBottom: 25,
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#DEDEDE',
  },
  teksJudul: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#111111', 
    textAlign: 'center', 
  },
  teksSubJudul: { 
    fontSize: 14, 
    color: '#777777', 
    textAlign: 'center', 
    marginTop: 4 
  },
  kartuNama: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 5,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  teksNama: {
    fontSize: 22,
    color: '#333333',
    marginBottom: 4,
  },
  teksStambuk: {
    fontSize: 15,
    color: '#888888',
  },
  pemisah: {
      marginVertical: 15,
      alignItems: 'center',
  },
  teksPemisah: {
      color: '#AAAAAA',
      fontWeight: 'bold',
      letterSpacing: 1,
  }
});
