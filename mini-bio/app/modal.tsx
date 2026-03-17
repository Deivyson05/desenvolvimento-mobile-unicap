import { Link } from 'expo-router';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { getData } from '@/scripts/saveData';
import { useEffect, useState } from 'react';
import { projetos } from '@/constants/projetos';

interface Projeto {
  titulo: string;
  desc: string;
  img: any;
  about: () => React.JSX.Element;
}

export default function ModalScreen() {
  const [proj, setProjeto] = useState<Projeto | null>(null);
  useEffect(() => {
    async function load() {
      const projetoTitulo = await getData('projeto');
      const projetoEncontrado = projetos.find(p => p.titulo === projetoTitulo) || null;
      setProjeto(projetoEncontrado);
    }
    load();
  }, []);
  const router = useRouter();
  return (
    <ScrollView className='p-4'>
      {proj != null ? proj.about() : null}
    </ScrollView>
  );
}