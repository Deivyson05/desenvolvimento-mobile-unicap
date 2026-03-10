import { Profile } from '@/components/profile';
import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className='h-screen'>
      <Profile/>
      <View className='bg-blue-500/70 p-4 rounded-2xl absolute bottom-40 right-2 border border-blue-500'>
        <Text className='text-sm'>App criado para a disciplina</Text>
        <Text className='text-sm'>de dispositivos móveis</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
