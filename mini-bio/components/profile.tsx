import { View, Text } from "react-native";
import { Image } from "expo-image";

export function Profile() {
    return (
        <View>
            <View>
                <Image
                    source={require("@/assets/images/wallpaper.jpg")}
                    style={{
                        width: '100%',
                        height: 200,
                        objectFit: "cover"
                    }}
                />
                <Image
                    source={require("@/assets/images/profile.jpg")}
                    style={{
                        width: 120, height: 120,
                        marginTop: -58,
                        marginLeft: 16,
                        borderRadius: 100,
                        borderWidth: 4,
                        borderColor: "white"
                    }}
                />
            </View>
            <View className="p-6 gap-2">
                <Text className="text-2xl font-semibold">Deivyson Ricardo Silva dos Santos</Text>
                <Text className="text-xl font-semibold text-black/60">Github: Deivyson05</Text>
                <View className="gap-2 mt-2">
                    <Text className="text-md text-black/60">
                        Sou desenvolvedor FullStack sempre procurando novos desafios e formas de facilitar a interação das pessoas no que se trata de internet.
                    </Text>
                    <Text className="text-md text-black/60">
                        Possuo experiência em JavaScript, TypeScript, Python, React, React Native, Node.js, MongoDB e MySQL, além de facilidade em aprender rápido, organizar equipes, comunicar ideias com clareza e ter visão ampla de projetos, unindo dedicação e disciplina.
                    </Text>
                </View>
            </View>
        </View>
    )
}