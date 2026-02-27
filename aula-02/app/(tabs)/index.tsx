import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, TextInput, TouchableOpacity, TextInputChangeEvent } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Input } from '@/components/input';

export default function HomeScreen() {
  const [idade, setIdade] = useState('0');
  const [mes, setMes] = useState('0');
  const [dia, setDia] = useState('0');
  const [result, setResult] = useState(0);


  function calcularAno() {
    const anoAtual = new Date().getFullYear();
    const mesAtual = new Date().getMonth() + 1;
    const diaAtual = new Date().getDate();

    console.log(diaAtual + "/" + mesAtual + "/" + anoAtual)

    let res = anoAtual - parseInt(idade);
    setResult(res);
    if(mesAtual < parseInt(mes)) {
      setResult(res - 1);
    } else if(mesAtual == parseInt(mes)) {
      if(diaAtual < parseInt(dia)) {
        setResult(res - 1);
      }
    }
  }

  return (
    <View className='px-6 py-10 justify-center h-screen gap-2'>
      <Text className='font-semibold text-2xl'>📅 Calcule sua idade</Text>

      <Input
        label='Digite sua idade'
        onChangeText={setIdade}
        placeholder='00'
        value={idade}
      />

      <Input
        label='Digite o mês do seu aniversário'
        onChangeText={setMes}
        placeholder='1 - 12'
        value={mes}
      />

      <Input
        label='Digite o dia do seu aniversário'
        onChangeText={setDia}
        placeholder='1 - 31'
        value={dia}
      />

      <TouchableOpacity className='bg-blue-600 p-4 rounded-md items-center' onPress={calcularAno}>
        <Text className='text-white font-bold'>Calcular</Text>
      </TouchableOpacity>

      {
        result > 0 ? (
          <View className='items-center'>
            <Text className='text-xl font-semibold'>Você nasceu em</Text>
            <Text className='text-xl font-semibold'>{result}</Text>
          </View>
        ) : null
      }

    </View>
  );
}