import { Image, Text, View } from "react-native";
import {Image as ExpoImage} from "expo-image";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF", // opsional: untuk memberikan latar belakang putih
      }}
    >
      <View
        style={{
          backgroundColor: "#FF5722",
          height: 100,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          marginBottom: 20,
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Ali Sulton S Palilati - 105841102222
        </Text>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          105841102222
        </Text>
      </View>

      <Image
        source={{
          uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841101722_.jpg?1752197261",
        }}
        style={{
          width: 300,
          height: 300,
          borderRadius: 10,
          marginBottom: 20,
        }}
      />

      <ExpoImage style={{
        width: 100,
        height: 100,
      }} source={{
        uri: "https://lh4.googleusercontent.com/proxy/FvDZQWzDKQPbb8xNwDa17mIv7vaW9xEocb46izhKFMzxOEWw_-pvq4VkBOvY_4xx4PqHlDJv3PWwaQ06BteHOOqDmF9E0JPWU-UntMHjgxcljOBb=s0-d",
      }}/>

      <View
        style={{
          backgroundColor: "#FF5722",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          height: 100,
          width: 100,
        }}
      >
      </View>
    </View>
  );
}