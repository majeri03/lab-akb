import React, { useRef } from 'react';
import {SafeAreaView,StyleSheet,Text,FlatList,StatusBar,TouchableOpacity, Animated} from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

type IconInfo = {
  id: string;
  family: 'MaterialCommunity' | 'AntDesign'; 
  name: string;
  label: string;
  color: string;
};

const DynamicIcon = ({ family, name, size, color }: { family: string, name: string, size: number, color: string }) => {
  if (family === 'MaterialCommunity') {
    return <MaterialCommunityIcons name={name as any} size={size} color={color} />;
  }
  if (family === 'AntDesign') {
    return <AntDesign name={name as any} size={size} color={color} />;
  }
  return null; 
};

const IconCard = ({ item }: { item: IconInfo }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const colorAnim = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.15, 
      friction: 3,
      useNativeDriver: true, 
    }).start();
    Animated.timing(colorAnim, {
      toValue: 1, 
      duration: 200,
      useNativeDriver: false, 
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
    Animated.timing(colorAnim, {
      toValue: 0, 
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const interpolatedColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [item.color, '#e74c3c'] 
  });

  return (
    <TouchableOpacity
      activeOpacity={0.9} 
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={stylesJery.touchableWrapper}
    >
      <Animated.View style={[stylesJery.cardContainer, { transform: [{ scale: scaleAnim }] }]}>
        <Animated.Text style={{ color: interpolatedColor }}>
           <DynamicIcon family={item.family} name={item.name} size={48} color={item.color} />
        </Animated.Text>
        <Text style={stylesJery.cardLabel}>{item.label}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default function IconGalleryScreen() {
  return (
    <SafeAreaView style={stylesJery.screenContainer}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={iconCollectionJery}
        renderItem={({ item }) => <IconCard item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={stylesJery.gridContainer}
      />
    </SafeAreaView>
  );
}

const iconCollectionJery: IconInfo[] = [
  { id: '1', family: 'MaterialCommunity', name: 'bowling', label: 'Olahraga', color: '#ff00d4ff' },
  { id: '2', family: 'MaterialCommunity', name: 'allergy', label: 'Kesehatan', color: '#e74c3c' },
  { id: '3', family: 'MaterialCommunity', name: 'battery-charging-high', label: 'Daya', color: '#2ecc71' },
  { id: '4', family: 'MaterialCommunity', name: 'bicycle', label: 'Gaya Hidup', color: '#f1c40f' },
  { id: '5', family: 'MaterialCommunity', name: 'blender-software', label: 'Desain 3D', color: '#9b59b6' },
  { id: '6', family: 'MaterialCommunity', name: 'bottle-wine', label: 'Minuman', color: '#1abc9c' },
  { id: '7', family: 'AntDesign', name: 'smile-circle', label: 'Emosi', color: '#e67e22' },
  { id: '8', family: 'AntDesign', name: 'github', label: 'Kode Sumber', color: '#34495e' },
  { id: '9', family: 'AntDesign', name: 'windows', label: 'OS', color: '#d35400' },
  { id: '10', family: 'AntDesign', name: 'database', label: 'Penyimpanan', color: '#8e44ad' },
];
const stylesJery = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#F4F7FC',
  },
  gridContainer: {
    padding: 8,
  },
  touchableWrapper: {
    flex: 1,
    padding: 8,
  },
  cardContainer: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardLabel: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
});