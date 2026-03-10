import { CardProjeto } from '@/components/cardProjeto';
import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';

export default function TabTwoScreen() {
  const projetos = [
    {
      titulo: "Combogó",
      desc: "Landingpage para a agência de jogos da unicap",
      img: require("@/assets/images/combogo.png")
    },
    {
      titulo: "Yomu",
      desc: "Aplicativo de gamificação da leitura",
      img: require("@/assets/images/yomu.png")
    },
    {
      titulo: "Adotaí",
      desc: "Aplicativo de match para pets",
      img: require("@/assets/images/yomu.png")
    },
  ]


  return (
    <View className='px-6 py-10'>
      <View className='p-2'>
        <Text className='text-2xl font-semibold text-black/90'>Projetos</Text>
      </View>
      <ScrollView >
        <View className='gap-4 mb-12'>
          {
          projetos.map((proj, index) => (
            <CardProjeto
              key={index}
              titulo={proj.titulo}
              desc={proj.desc}
              img={proj.img}
            />
          ))
        }
        </View>
      </ScrollView>
    </View>
  );
}