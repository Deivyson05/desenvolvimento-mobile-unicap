import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { saveData } from "@/scripts/saveData";
import { useRouter } from 'expo-router';

interface CardProps {
    titulo: string,
    desc: string,
    img: string
}

export function CardProjeto({ titulo, desc, img }: CardProps) {
    const router = useRouter();
    return (
        <TouchableOpacity className="p-4 border border-1 border-gray-300 rounded-xl gap-2"
            onPress={() => {
                try {
                    saveData('projeto', titulo);
                } catch(error) {
                    console.error(error);
                } finally {
                    router.push('/modal');
                }
                
            }}
        >
            <Image
                source={img}
                style={{
                    width: '100%',
                    height: 200,
                    borderRadius: 8
                }}
            />
            <View>
                <Text className="text-xl font-semibold text-black/80">{titulo}</Text>
                <Text className="text-md font-medium text-black/60">{desc}</Text>
            </View>
        </TouchableOpacity>
    )
}