
import React from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StatusBar,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import {
    Flower2,
    UserRound,
    Pencil,
    CalendarDays,
    Target,
    Bell,
    Droplets,
    ShieldCheck,
    ChevronRight,
    Settings2,
    CircleHelp,
} from "lucide-react-native";

import colors from "../../styles/colors";
import styles from "./ProfileScreen.styles";

const profileOptions = [
    {
        title: "Dados pessoais",
        description: "Suas informações e preferências",
        icon: UserRound,
    },
    {
        title: "Minhas metas",
        description: "Objetivos e conquistas pessoais",
        icon: Target,
    },
    {
        title: "Lembretes",
        description: "Organize seus horários e avisos",
        icon: Bell,
    },
    {
        title: "Hidratação",
        description: "Preferências de acompanhamento",
        icon: Droplets,
    },
];

const settingsOptions = [
    {
        title: "Preferências do aplicativo",
        icon: Settings2,
    },
    {
        title: "Privacidade e dados",
        icon: ShieldCheck,
    },
    {
        title: "Ajuda e informações",
        icon: CircleHelp,
    },
];

function OptionItem({ item, showDescription = false }) {
    const Icon = item.icon;

    return (
        <TouchableOpacity
            style={styles.optionItem}
            activeOpacity={0.7}
            onPress={() => {}}
        >
            <View style={styles.optionIcon}>
                <Icon
                    size={19}
                    color={colors.primaryDark}
                    strokeWidth={1.5}
                />
            </View>

            <View style={styles.optionInfo}>
                <Text style={styles.optionTitle}>
                    {item.title}
                </Text>

                {showDescription && (
                    <Text style={styles.optionDescription}>
                        {item.description}
                    </Text>
                )}
            </View>

            <ChevronRight
                size={17}
                color={colors.textLight}
                strokeWidth={1.5}
            />
        </TouchableOpacity>
    );
}

export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={colors.offWhite}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* CABEÇALHO */}
                <View style={styles.header}>
                    <View>
                        <View style={styles.headerEyebrow}>
                            <View style={styles.eyebrowLine} />

                            <Text style={styles.eyebrow}>
                                SEU ESPAÇO PESSOAL
                            </Text>
                        </View>

                        <Text style={styles.headerTitle}>
                            Meu perfil
                        </Text>

                        <Text style={styles.headerSubtitle}>
                            Um espaço feito para acompanhar sua jornada.
                        </Text>
                    </View>

                    <View style={styles.headerFlower}>
                        <Flower2
                            size={28}
                            color={colors.wine}
                            strokeWidth={1.3}
                        />
                    </View>
                </View>

                {/* APRESENTAÇÃO DO PERFIL */}
                <View style={styles.profileSection}>
                    <View style={styles.avatarArea}>
                        <View style={styles.avatarOuter}>
                            <View style={styles.avatar}>
                                <UserRound
                                    size={37}
                                    color={colors.wine}
                                    strokeWidth={1.2}
                                />
                            </View>
                        </View>

                        <View style={styles.avatarFlower}>
                            <Flower2
                                size={17}
                                color={colors.primaryDark}
                                strokeWidth={1.4}
                            />
                        </View>
                    </View>

                    <View style={styles.profileInfo}>
                        <Text style={styles.profileGreeting}>
                            SEJA BEM-VINDA
                        </Text>

                        <Text style={styles.profileName}>
                            Sua jornada começa aqui
                        </Text>

                        <Text style={styles.profileDescription}>
                            Cuide de você, respeite seu ritmo e celebre
                            cada conquista.
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.editButton}
                        activeOpacity={0.7}
                        onPress={() => {}}
                    >
                        <Pencil
                            size={15}
                            color={colors.wine}
                            strokeWidth={1.6}
                        />
                    </TouchableOpacity>
                </View>

                {/* INFORMAÇÕES */}
                <View style={styles.sectionHeading}>
                    <View>
                        <Text style={styles.sectionEyebrow}>
                            PERSONALIZE
                        </Text>

                        <Text style={styles.sectionTitle}>
                            Minha jornada
                        </Text>
                    </View>
                </View>

                <View style={styles.optionsList}>
                    {profileOptions.map((item) => (
                        <OptionItem
                            key={item.title}
                            item={item}
                            showDescription
                        />
                    ))}
                </View>

                {/* CONFIGURAÇÕES */}
                <View style={styles.sectionHeading}>
                    <View>
                        <Text style={styles.sectionEyebrow}>
                            APLICATIVO
                        </Text>

                        <Text style={styles.sectionTitle}>
                            Configurações
                        </Text>
                    </View>
                </View>

                <View style={styles.optionsList}>
                    {settingsOptions.map((item) => (
                        <OptionItem
                            key={item.title}
                            item={item}
                        />
                    ))}
                </View>

                {/* RODAPÉ */}
                <View style={styles.footer}>
                    <View style={styles.footerFlower}>
                        <Flower2
                            size={21}
                            color={colors.primaryDark}
                            strokeWidth={1.3}
                        />
                    </View>

                    <Text style={styles.footerTitle}>
                        BloomFit
                    </Text>

                    <Text style={styles.footerSubtitle}>
                        Floresça no seu tempo.
                    </Text>

                    <Text style={styles.footerVersion}>
                        SUA JORNADA, SEU TEMPO.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
