// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: { backgroundColor: '#FFFFFF' },
        headerStyle: { backgroundColor: '#f0f0f0' },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontFamily: 'Anton-Regular',
          fontSize: 20,
        },
      }}
    >
        <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: 'Halaman Utama',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tugas6"
        options={{
          title: 'Tugas 6',
          tabBarLabel: 'Tugas 6',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="archive" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tugas4"
        options={{
          title: 'Tugas 4',
          tabBarLabel: 'Tugas 4',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="archive" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tugas5"
        options={{
          title: 'Tugas 5',
          tabBarLabel: 'Tugas 5',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="archive" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pert6"
        options={{
          title: 'Pertemuan 6',
          tabBarLabel: 'Pert 6',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
