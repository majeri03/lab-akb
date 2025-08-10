// app/(arsip)/(tugas)/(tugas8)/_layout.tsx
import { Ionicons } from '@expo/vector-icons';
import { Tabs, router } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

/**
 * Layout ini sekarang mengontrol navigasi Tab untuk Tugas 8.
 * Kita tambahkan tombol kembali di header.
 */
export default function Tugas8TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        // Tambahkan tombol kembali yang akan mengarahkan ke daftar tugas
        headerLeft: () => (
          <Pressable onPress={() => router.push('/(arsip)/(tugas)')} style={{ marginLeft: 15 }}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </Pressable>
        ),
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}