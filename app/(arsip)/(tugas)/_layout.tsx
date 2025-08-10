// app/(tugas)/_layout.tsx
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function TugasTabs() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#007AFF' }}>
      <Tabs.Screen
        name="tugas4"
        options={{
          title: 'Tugas 4',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="archive" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tugas5"
        options={{
          title: 'Tugas 5',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="archive-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tugas6"
        options={{
          title: 'Tugas 6',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="archive-arrow-down" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
