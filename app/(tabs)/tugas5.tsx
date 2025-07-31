import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        padding: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 16,
          padding: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.15,
          shadowRadius: 6,
          elevation: 4,
          maxWidth: 350,
        }}
      >
        <Text
          style={{
            fontFamily: "poppins",
            fontWeight: "bold",
            fontSize: 24,
            color: "#d7263d",
            marginBottom: 12,
            textAlign: "center",
          }}
        >
          Penting! Cara Menampilkan Teks di React Native
        </Text>
        <Text
          style={{
            fontFamily: "poppins",
            fontSize: 16,
            color: "#222",
            marginBottom: 8,
            textAlign: "justify",
          }}
        >
          Komponen inti untuk menampilkan teks di React Native itu cuma satu: <Text style={{color:'#d7263d', fontWeight:'bold'}}>{'<Text />'}</Text>. React Native memisahkan komponen tata letak (<Text style={{color:'#1b6ca8'}}>{'<View />'}</Text>) dan komponen teks. Jika menaruh tulisan langsung di dalam <Text style={{color:'#1b6ca8'}}>{'<View />'}</Text>, aplikasi akan error.
        </Text>
        <Text
          style={{
            fontFamily: "poppins",
            fontSize: 16,
            color: "#222",
            marginBottom: 8,
            textAlign: "justify",
          }}
        >
          Beberapa komponen seperti <Text style={{color:'#1b6ca8'}}>{'<Button />'}</Text> dan <Text style={{color:'#1b6ca8'}}>{'<TextInput />'}</Text> memang bisa menampilkan teks, tapi melalui properti <Text style={{color:'#d7263d'}}>title</Text> atau <Text style={{color:'#d7263d'}}>placeholder</Text>, bukan sebagai anak komponen.
        </Text>
        <Text
          style={{
            fontFamily: "poppins",
            fontSize: 16,
            color: "#222",
            textAlign: "justify",
          }}
        >
          Jadi, selalu bungkus semua tulisan dengan <Text style={{color:'#d7263d', fontWeight:'bold'}}>{'<Text />'}</Text> agar rapi dan mudah diatur stylenya!
        </Text>
      </View>
    </View>
  );
}