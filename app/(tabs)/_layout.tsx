// app/(tugas_ai)/_layout.tsx
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

/**
 * Mendefinisikan navigasi Tab Bar untuk grup (tugas_ai).
 * Setiap Tab.Screen merepresentasikan satu tab di bagian bawah layar.
 */
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        // Konfigurasi ikon untuk setiap tab
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: React.ComponentProps<typeof Ionicons>['name'] = 'alert-circle';

          if (route.name === 'index') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'about') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF', // Warna biru untuk tab aktif
        tabBarInactiveTintColor: 'gray',   // Warna abu-abu untuk tab tidak aktif
        headerShown: true, // Tampilkan judul di header setiap halaman
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="about" options={{ title: 'About' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profil' }} />
    </Tabs>
  );
}