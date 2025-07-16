import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NameListView } from './components/NameListView';
import { FontRegistry } from './constants/fontRegistry';
import { studentNames } from './data/studentList';
import { useFontLoader } from './hooks/useFontLoader';
import { getSurroundingNames } from './services/nameSelector';

/**
 * Entry point aplikasi.
 * Menggabungkan hook, service, dan komponen UI untuk menampilkan keseluruhan tampilan.
 */

export default function FontShowcaseScreen() {
  const { fontsLoaded, fontError } = useFontLoader();
  
  const YOUR_NAME = "Majeri";
  const myIndex = studentNames.findIndex(name => name === YOUR_NAME);
  
  const { beforeNames, afterNames } = getSurroundingNames(myIndex, studentNames);
  
  const namesToDisplay = [...beforeNames, ...afterNames];
  
  const fontCollection = Object.values(FontRegistry);

  if (fontError) {
    return <Text style={screenStyles.errorText}>Error: {fontError.message}</Text>;
  }
  
  if (!fontsLoaded) {
    return <View style={screenStyles.loadingView} />;
  }

  return (
    <SafeAreaView style={screenStyles.safeArea}>
      <ScrollView contentContainerStyle={screenStyles.container}>
        <Text style={screenStyles.headerTitle}>Font Showcase</Text>
        
        <Text style={screenStyles.referenceText}>
          Menampilkan nama di sekitar: <Text style={{fontWeight: 'bold'}}>{YOUR_NAME}</Text>
        </Text>

        <NameListView
          names={namesToDisplay}
          fontCollection={fontCollection}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const screenStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f4f5',
  },
  container: {
    padding: 24,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#18181b',
    marginBottom: 8, 
    textAlign: 'center',
    fontFamily: FontRegistry.AntonReg,
  },
  referenceText: {
    fontSize: 16,
    color: '#52525b',
    textAlign: 'center',
    marginBottom: 20, 
    fontStyle: 'italic',
  },
  loadingView: {
    flex: 1,
    backgroundColor: '#f4f4f5',
  },
  errorText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'red',
    fontSize: 16,
  }
});