import { View, Text } from "react-native";
import { Image } from "expo-image";

interface CardProps {
    titulo: string,
    desc: string,
    img: string
}

export function CardProjeto({ titulo, desc, img }: CardProps) {
    return (
        <View className="p-4 border border-1 border-gray-300 rounded-xl gap-2">
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
        </View>
    )
}