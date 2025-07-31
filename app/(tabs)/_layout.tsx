import { Tabs } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

// Komponen ikon yang sama seperti sebelumnya
const TabBarIcon = ({ name, color }: { name: React.ComponentProps<typeof FontAwesome5>['name']; color: string }) => {
  return <FontAwesome5 size={26} style={{ marginBottom: -3 }} name={name} color={color} />;
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        // Nama direktori, sekarang relatif terhadap (tabs)
        name="(tugas)"
        options={{
          title: 'Tugas',
          tabBarIcon: ({ color }) => <TabBarIcon name="tasks" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(pertemuan)"
        options={{
          title: 'Pertemuan',
          tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color} />,
        }}
      />
    </Tabs>
  );
}