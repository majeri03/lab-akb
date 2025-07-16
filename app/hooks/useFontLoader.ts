/**
 * Hook khusus untuk memuat font. 
 * Mengelola proses loading, penanganan error, serta sinkronisasi dengan splash screen.
 */


import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { FontRegistry } from '../constants/fontRegistry';

// Mencegah splash screen disembunyikan secara otomatis
SplashScreen.preventAutoHideAsync();

export const useFontLoader = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [fontError, setFontError] = useState<Error | null>(null);

  useEffect(() => {
    const loadResourcesAsync = async () => {
      try {
        await Font.loadAsync({
          // Menggunakan referensi dari FontRegistry, bukan string biasa.
          [FontRegistry.AntonReg]: require('../assets/fonts/statis/Anton-Regular.ttf'),
          [FontRegistry.MerriweatherItalic]: require('../assets/fonts/statis/Merriweather_24pt-Italic.ttf'),
          [FontRegistry.MerriweatherReg]: require('../assets/fonts/statis/Merriweather_24pt-Regular.ttf'),
          [FontRegistry.NunitoBold]: require('../assets/fonts/statis/Nunito-Bold.ttf'),
          [FontRegistry.NunitoLight]: require('../assets/fonts/statis/Nunito-Light.ttf'),
          [FontRegistry.PlayfairBlack]: require('../assets/fonts/statis/PlayfairDisplay-Black.ttf'),
          [FontRegistry.PlayfairReg]: require('../assets/fonts/statis/PlayfairDisplay-Regular.ttf'),
          [FontRegistry.SourceCodeBold]: require('../assets/fonts/statis/SourceCodePro-Bold.ttf'),
          [FontRegistry.SourceCodeReg]: require('../assets/fonts/statis/SourceCodePro-Regular.ttf'),

          [FontRegistry.EpilogueVar]: require('../assets/fonts/variabel/Epilogue-VariableFont_wght.ttf'),
          [FontRegistry.JostVar]: require('../assets/fonts/variabel/Jost-VariableFont_wght.ttf'),
          [FontRegistry.LexendVar]: require('../assets/fonts/variabel/Lexend-VariableFont_wght.ttf'),
          [FontRegistry.RecursiveVar]: require('../assets/fonts/variabel/Recursive-VariableFont_CASL,CRSV,MONO,slnt,wght.ttf'),
          [FontRegistry.WorkSansVar]: require('../assets/fonts/variabel/WorkSans-VariableFont_wght.ttf'),
        });
      } catch (e) {
        setFontError(e as Error);
      } finally {
        setFontsLoaded(true);
        SplashScreen.hideAsync(); 
      }
    };

    loadResourcesAsync();
  }, []);

  return { fontsLoaded, fontError };
};