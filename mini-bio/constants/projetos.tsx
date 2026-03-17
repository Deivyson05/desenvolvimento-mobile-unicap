import { View, Text, Image } from "react-native";

const style = {
    title: "text-black/90 text-2xl font-semibold",
    pharagraf: "text-black/70 text-lg font-medium"
}

export const projetos = [
    {
        titulo: "Combogó",
        desc: "Landingpage para a agência de jogos da unicap",
        img: require("@/assets/images/combogo.png"),
        about: () => {
            return (
                <View className="gap-4">
                    <Image source={require("@/assets/images/combogo.png")}
                        style={{ width: "100%", height: 200 }}
                    />
                    <Text className={style.title}>Combogó Unicap</Text>
                    <Text className={style.pharagraf}>
                        Este é um projeto de landing page desenvolvido para a Combogó, agência de jogos da Universidade Católica de Pernambuco (UNICAP), sob solicitação da Reitoria. A página foi criada com foco em design moderno, responsividade e clareza nas informações institucionais.
                    </Text>
                    <Text className={style.title}>Objetivo</Text>
                    <Text className={style.pharagraf}>
                        O projeto teve como finalidade apresentar de forma institucional as ações e a comunicação da reitoria da UNICAP, integrando-se visualmente com a identidade da Combogó. Foi desenvolvido como parte de uma iniciativa acadêmica.
                    </Text>
                </View>
            );
        }
    },
    {
        titulo: "Yomu",
        desc: "Aplicativo de gamificação da leitura",
        img: require("@/assets/images/yomu.png"),
        about: () => {
            return (
                <View className="gap-4">
                    <Image source={require("@/assets/images/yomu.png")}
                        style={{ width: "100%", height: 200 }}
                    />
                    <Text className={style.title}>Yomu</Text>
                    <Text className={style.pharagraf}>
                        Repositório dedicado ao Projeto Integrador 3 da Universidade Católica de Pernambuco. Contém código-fonte, documentação e materiais desenvolvidos ao longo do semestre, aplicando conhecimentos práticos e teóricos adquiridos no curso.
                    </Text>
                    <Text className={style.title}>Sobre</Text>
                    <Text className={style.pharagraf}>
                        Yomu é um aplicativo de gamificação da leitura criado para ajudar jovens a manterem o foco e desenvolverem o hábito de ler livros físicos. O app utiliza sistemas de progresso, desafios e recompensas para tornar a leitura mais envolvente, divertida e constante.
                    </Text>
                    <Text className={style.title}>Objetivo</Text>
                    <Text className={style.pharagraf}>
                        O Yomu transforma a leitura em uma experiência motivadora, incentivando o usuário a:

                        Ler todos os dias
                        Registrar seu progresso de forma simples
                        Completar metas e desafios
                        Desbloquear conquistas e ganhar pontos
                        Criar uma rotina saudável de leitura
                    </Text>
                </View>
            );
        }
    },
    {
        titulo: "Adotaí",
        desc: "Aplicativo de match para pets",
        img: require("@/assets/images/adotai.jpg"),
        about: () => {
            return (
                <View className="gap-4">
                    <Image source={require("@/assets/images/adotai.jpg")}
                        style={{ width: "100%", height: 200 }}
                    />
                    <Text className={style.title}>Adotai — Tinder Like para Adoção de Pets</Text>

                    <Text className={style.title}>Sobre o Projeto</Text>
                    <Text className={style.pharagraf}>
                        O Adotai é um aplicativo de match de pets inspirado no estilo Tinder, desenvolvido durante a Residência Tecnológica do Porto Digital em parceria com a Neurotech.
                    </Text>
                    <Text className={style.pharagraf}>
                        O projeto foi criado com o objetivo de facilitar a conexão entre pessoas interessadas em adotar pets e instituições/ONGs que disponibilizam animais para adoção, utilizando uma experiência intuitiva baseada em matches.
                    </Text>
                    <Text className={style.pharagraf}>
                        Nossa equipe foi selecionada para o Demo Day, destacando-se pela proposta inovadora, impacto social e qualidade técnica da solução.
                    </Text>
                    <Text className={style.title}>Objetivo</Text>
                    <Text className={style.pharagraf}>
                        Criar uma plataforma que:

                        Facilite a adoção responsável de animais 🐶🐱
                        Melhore a experiência de busca por pets
                        Conecte adotantes, ONGs e protetores independentes
                        Utilize um sistema de match simples e intuitivo
                    </Text>
                </View>
            );
        }
    },
]