import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function ArsipLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        headerLeft: () => (
          <Pressable onPress={() => router.back()} style={{ marginLeft: 15 }}>
            <Ionicons name="arrow-back-circle-outline" size={28} color="#007AFF" />
          </Pressable>
        ),
      }}
    >
      <Tabs.Screen
        name="(tugas)"
        options={{
          title: 'Tugas',
          headerTitle: 'Arsip Tugas',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="tasks" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(pertemuan)"
        options={{
          title: 'Pertemuan',
          headerTitle: 'Arsip Pertemuan',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="users" color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          href: null,
          headerShown: false, 
        }}
      />
    </Tabs>
  );
}