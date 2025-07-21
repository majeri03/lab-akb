// Ganti isi file app/_layout.tsx dengan kode ini:

import { Tabs } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Anton-Regular': require('./assets/fonts/statis/Anton-Regular.ttf'),
    'Merriweather-Regular': require('./assets/fonts/statis/Merriweather_24pt-Regular.ttf'),
    'Nunito-Light': require('./assets/fonts/statis/Nunito-Light.ttf'),
    'PlayfairDisplay-Regular': require('./assets/fonts/statis/PlayfairDisplay-Regular.ttf'),
    'SourceCodePro-Regular': require('./assets/fonts/statis/SourceCodePro-Regular.ttf'),
    'Recursive-VariableFont': require('./assets/fonts/variabel/Recursive-VariableFont_CASL,CRSV,MONO,slnt,wght.ttf'),
    'Epilogue-VariableFont': require('./assets/fonts/variabel/Epilogue-VariableFont_wght.ttf'),
    'Jost-VariableFont': require('./assets/fonts/variabel/Jost-VariableFont_wght.ttf'),
    'WorkSans-VariableFont': require('./assets/fonts/variabel/WorkSans-VariableFont_wght.ttf'),
    'Lexend-VariableFont': require('./assets/fonts/variabel/Lexend-VariableFont_wght.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007AFF', 
        tabBarInactiveTintColor: '#8E8E93', 
        tabBarStyle: {
          backgroundColor: '#FFFFFF', 
        },
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tugas 6', 
          tabBarLabel: 'Utama', 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tugas4"
        options={{
          title: 'Arsip Tugas 4',
          tabBarLabel: 'Arsip',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="archive" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}