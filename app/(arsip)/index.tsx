// app/(arsip)/index.tsx
import { Redirect } from 'expo-router';

/**
 * File ini berfungsi sebagai halaman default untuk grup (arsip).
 * Ia akan langsung mengarahkan pengguna ke halaman utama dari
 * sub-grup (tugas) di dalam arsip.
 */
export default function ArchiveIndex() {
  return <Redirect href="/(arsip)/(tugas)" />;
}