import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';

/**
 * @description Properti yang dibutuhkan oleh komponen InteractiveImageCell.
 */

interface CellProps {
  sourceUri: string;
  scaleValue: number;
  onPress: () => void;
}

const InteractiveImageCell = ({ sourceUri, scaleValue, onPress }: CellProps) => {
  // Gaya animasi yang dihitung ulang setiap kali scaleValue berubah
  const animatedCellStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(scaleValue) }],
    };
  });

  return (
    <Pressable onPress={onPress}>
      <Animated.View style={[cellStyles.container, animatedCellStyle]}>
        <Image source={{ uri: sourceUri }} style={cellStyles.image} />
      </Animated.View>
    </Pressable>
  );
};

const cellStyles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: '#333',
    borderRadius: 8,
    overflow: 'hidden', 
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default InteractiveImageCell;