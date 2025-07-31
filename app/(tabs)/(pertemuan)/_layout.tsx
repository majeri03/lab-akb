// app/(pertemuan)/_layout.tsx
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function PertemuanTabs() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#FF3B30' }}>
      <Tabs.Screen
        name="pert6"
        options={{
          title: 'Pertemuan 6',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
