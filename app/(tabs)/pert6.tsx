import AntDesign from '@expo/vector-icons/AntDesign';
import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0"
      }}
    >
      <Text
        style={{
          fontFamily: "poppins",
          fontWeight: "bold",
          fontSize: 20,
          color: "#000000ff",
          marginBottom: 8,
        }}
      >
        Majeri
      </Text>
      <TouchableOpacity onPress={() => alert("Icon Pressed!")}>

      <AntDesign name="codesquareo" size={40} color="red" style={{
          marginBottom: 4,
          position: "absolute",
          top: 0,
          left: 0}} />
      </TouchableOpacity>

      
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#692d2dff", padding: 10, borderRadius: 5, width: Dimensions.get('window').width *0.8, justifyContent: "space-between" }}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Majeri</Text>
        <AntDesign name="codesquareo" size={24} color="white" />
        </View>
    
      <AntDesign name="frown" size={24} color="black" />
    </View>
  );
}