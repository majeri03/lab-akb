// app/(mahasiswa)/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';

export default function MahasiswaLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Daftar Mahasiswa' }} />
      <Stack.Screen name="[nim]" options={{ title: 'Detail Mahasiswa' }} />
    </Stack>
  );
}