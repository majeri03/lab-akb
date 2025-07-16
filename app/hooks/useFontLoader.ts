import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

/**
 * @description Custom hook untuk memuat semua aset font yang dibutuhkan aplikasi.
 * Mengelola state loading dan mencegah FOUC (Flash of Unstyled Content)
 * dengan menahan splash screen hingga font selesai dimuat.
 * Ini adalah pendekatan standar industri untuk manajemen font di Expo.
 */
export const useFontLoader = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [fontError, setFontError] = useState<Error | null>(null);

  useEffect(() => {
    // Fungsi asinkron untuk memuat font
    const loadFontsAsync = async () => {
      try {
        await Font.loadAsync({
          // === FONT STATIS ===
          'Anton-Regular': require('../assets/fonts/statis/Anton-Regular.ttf'),
          'Merriweather-Italic': require('../assets/fonts/statis/Merriweather_24pt-Italic.ttf'),
          'Merriweather-Regular': require('../assets/fonts/statis/Merriweather_24pt-Regular.ttf'),
          'Nunito-Bold': require('../assets/fonts/statis/Nunito-Bold.ttf'),
          'Nunito-Light': require('../assets/fonts/statis/Nunito-Light.ttf'),
          'PlayfairDisplay-Black': require('../assets/fonts/statis/PlayfairDisplay-Black.ttf'),
          'PlayfairDisplay-Regular': require('../assets/fonts/statis/PlayfairDisplay-Regular.ttf'),
          'SourceCodePro-Bold': require('../assets/fonts/statis/SourceCodePro-Bold.ttf'),
          'SourceCodePro-Regular': require('../assets/fonts/statis/SourceCodePro-Regular.ttf'),

          // === FONT VARIABEL ===
          'Epilogue-Variable': require('../assets/fonts/variabel/Epilogue-VariableFont_wght.ttf'),
          'Jost-Variable': require('../assets/fonts/variabel/Jost-VariableFont_wght.ttf'),
          'Lexend-Variable': require('../assets/fonts/variabel/Lexend-VariableFont_wght.ttf'),
          'Recursive-Variable': require('../assets/fonts/variabel/Recursive-VariableFont_CASL,CRSV,MONO,slnt,wght.ttf'),
          'WorkSans-Variable': require('../assets/fonts/variabel/WorkSans-VariableFont_wght.ttf'),
        });
      } catch (e) {
        // Menangkap dan menyimpan error jika font gagal dimuat
        setFontError(e as Error);
      } finally {
        // Menandakan bahwa proses pemuatan (berhasil atau gagal) telah selesai
        setFontsLoaded(true);
      }
    };

    loadFontsAsync();
  }, []); 

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return { fontsLoaded, fontError };
};