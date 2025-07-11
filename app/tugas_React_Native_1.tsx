import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const infoMahasiswa = {
  nama: "MAJERI",
  nim: "105841103622",
};

export default function ShapeDisplayScreen() {
  return (
    <View style={styles.canvas}>
      <View style={styles.bentukSegitiga} />
      <View style={styles.bentukPersegipanjang}>
        <Text style={styles.primaryText}>{infoMahasiswa.nama}</Text>
      </View>
      <View style={styles.bentukKapsulPil}>
        <Text style={styles.primaryText}>{infoMahasiswa.nim}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: '#3B060A', 
    alignItems: 'center',
    justifyContent: 'center',
    gap: 35, 
  },
  bentukSegitiga: {
    width: 0,
    height: 0,
    borderLeftWidth: 100,
    borderRightWidth: 100,
    borderBottomWidth: 110,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#ffffffff', 
  },
  bentukPersegipanjang: {
    width: 380, 
    height: 160,
    backgroundColor: '#C83F12', 
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10, 
  },
  bentukKapsulPil: {
    width: 280, 
    height: 80,
    backgroundColor: '#FFF287', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 500, 
    elevation: 10,
  },
  primaryText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
})