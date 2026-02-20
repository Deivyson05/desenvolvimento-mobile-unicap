import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View className='px-6 py-10'>
      <View>
        <Text className='font-semibold text-md'>Rua dos Betas 55</Text>
      </View>
      <Text className='font-bold text-3xl'>Olá,</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'start',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
