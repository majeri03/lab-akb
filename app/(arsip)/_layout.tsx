import { Tabs, router } from 'expo-router';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
// Komponen ikon yang sama seperti sebelumnya
const TabBarIcon = ({ name, color }: { name: React.ComponentProps<typeof FontAwesome5>['name']; color: string }) => {
  return <FontAwesome5 size={26} style={{ marginBottom: -3 }} name={name} color={color} />;
};

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'blue',
      // Menambahkan tombol kembali di header untuk semua tab di dalam (arsip)
      headerLeft: () => (
        <Pressable 
          onPress={() => router.push('/(tabs)')} 
          style={{ marginLeft: 15 }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
      ),
    }}>
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
      <Tabs.Screen
        name="index"
        options={{
          // href: null membuat rute ini tidak muncul di tab bar
          href: null,
        }}
      />
    </Tabs>
  );
}