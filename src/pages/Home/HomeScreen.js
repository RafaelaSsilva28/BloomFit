
import React from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StatusBar,
} from "react-native";

import Svg, { Path, Circle, Ellipse } from "react-native-svg";

import {
    Flower2,
    Bell,
    Dumbbell,
    CalendarDays,
    ChartNoAxesCombined,
    Droplets,
    Timer,
    Sparkles,
    ArrowUpRight,
} from "lucide-react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../styles/colors";
import styles from "./HomeScreen.styles";

function FloralDecoration({ color = "#FFFFFF" }) {
    return (
        <Svg width="190" height="190" viewBox="0 0 190 190">
            <GFlower color={color} />
        </Svg>
    );
}

function GFlower({ color }) {
    return (
        <>
            <Path d="M95 95 C65 70 50 40 72 28 C92 17 105 49 95 95" fill="none" stroke={color} strokeWidth="1.4" />
            <Path d="M95 95 C125 70 140 40 118 28 C98 17 85 49 95 95" fill="none" stroke={color} strokeWidth="1.4" />
            <Path d="M95 95 C125 120 155 135 163 112 C170 91 133 80 95 95" fill="none" stroke={color} strokeWidth="1.4" />
            <Path d="M95 95 C65 120 35 135 27 112 C20 91 57 80 95 95" fill="none" stroke={color} strokeWidth="1.4" />
            <Path d="M95 95 C70 125 73 158 95 158 C117 158 120 125 95 95" fill="none" stroke={color} strokeWidth="1.4" />
            <Circle cx="95" cy="95" r="10" stroke={color} strokeWidth="1.4" fill="none" />
            <Path d="M95 105 C95 130 105 151 123 166" fill="none" stroke={color} strokeWidth="1.3" />
            <Path d="M110 145 C137 130 147 144 123 166" fill="none" stroke={color} strokeWidth="1.3" />
            <Path d="M95 125 C73 133 57 151 61 168" fill="none" stroke={color} strokeWidth="1.3" />
            <Ellipse cx="59" cy="150" rx="8" ry="17" transform="rotate(-38 59 150)" stroke={color} strokeWidth="1.3" fill="none" />
            <Circle cx="32" cy="42" r="2" fill={color} />
            <Circle cx="151" cy="55" r="2" fill={color} />
            <Circle cx="145" cy="22" r="1.5" fill={color} />
        </>
    );
}

const shortcuts = [
    { title: "Treinos", icon: Dumbbell, route: "Treinos" },
    { title: "Calendário", icon: CalendarDays },
    { title: "Evolução", icon: ChartNoAxesCombined, route: "Evolução" },
    { title: "Água", icon: Droplets },
    { title: "Cronômetro", icon: Timer },
];

const getWeekDays = () => {
    const today = new Date();
    const currentDay = today.getDay();
    const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay;

    const monday = new Date(today);
    monday.setDate(today.getDate() + mondayOffset);

    return Array.from({ length: 7 }, (_, index) => {
        const date = new Date(monday);
        date.setDate(monday.getDate() + index);

        return {
            day: ["D", "S", "T", "Q", "Q", "S", "S"][date.getDay()],
            date: date.getDate().toString().padStart(2, "0"),
            isToday: date.toDateString() === today.toDateString(),
        };
    });
};

export default function HomeScreen({ navigation }) {
    const week = getWeekDays();

    const today = new Date();
    const greetingDate = today.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    const openWorkouts = () => {
        navigation.navigate("Treinos");
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* CABEÇALHO */}
                <View style={styles.header}>
                    <View style={styles.brand}>
                        <View style={styles.logoMark}>
                            <Flower2 size={27} color={colors.wine} strokeWidth={1.4} />
                        </View>

                        <View>
                            <Text style={styles.brandName}>BloomFit</Text>
                            <Text style={styles.brandSubtitle}>
                                FLORESÇA NO SEU TEMPO
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.notificationButton}>
                        <Bell size={21} color={colors.wine} strokeWidth={1.5} />
                        <View style={styles.notificationDot} />
                    </TouchableOpacity>
                </View>

                {/* BOAS-VINDAS */}
                <View style={styles.greeting}>
                    <View style={styles.greetingText}>
                        <Text style={styles.eyebrow}>UM NOVO DIA PARA VOCÊ</Text>

                        <Text style={styles.greetingTitle}>
                            Olá, vamos{"\n"}
                            <Text style={styles.greetingHighlight}>florescer?</Text>
                        </Text>

                        <Text style={styles.greetingDate}>{greetingDate}</Text>
                    </View>

                    <View style={styles.greetingFlower}>
                        <FloralDecoration color="#D99BAF" />
                    </View>
                </View>

                {/* TREINO EM DESTAQUE */}
                <View style={styles.workoutSection}>
                    <View style={styles.workoutDecoration}>
                        <FloralDecoration color="#FFFFFF" />
                    </View>

                    <View style={styles.workoutTop}>
                        <View style={styles.workoutLabel}>
                            <Sparkles size={13} color="#F9DDE7" />
                            <Text style={styles.workoutEyebrow}>SEU MOMENTO</Text>
                        </View>

                        <Text style={styles.workoutNumber}>01</Text>
                    </View>

                    <Text style={styles.workoutTitle}>
                        O seu melhor começa{"\n"}com um movimento.
                    </Text>

                    <Text style={styles.workoutDescription}>
                        Reserve um momento para cuidar de você.
                    </Text>

                    <TouchableOpacity
                        style={styles.workoutButton}
                        onPress={openWorkouts}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.workoutButtonText}>
                            Descobrir treinos
                        </Text>
                        <ArrowUpRight size={17} color={colors.wine} />
                    </TouchableOpacity>

                    <View style={styles.workoutBottomLine} />
                </View>

                {/* CALENDÁRIO DA SEMANA */}
                <View style={styles.sectionHeading}>
                    <View>
                        <Text style={styles.sectionTitle}>Sua semana</Text>
                        <Text style={styles.sectionSubtitle}>
                            Cada dia é uma nova oportunidade.
                        </Text>
                    </View>

                    <CalendarDays
                        size={22}
                        color={colors.primaryDark}
                        strokeWidth={1.5}
                    />
                </View>

                <View style={styles.weekContainer}>
                    {week.map((item, index) => (
                        <View key={index} style={styles.dayItem}>
                            <Text
                                style={[
                                    styles.dayName,
                                    item.isToday && styles.dayNameActive,
                                ]}
                            >
                                {item.day}
                            </Text>

                            <View
                                style={[
                                    styles.dayCircle,
                                    item.isToday && styles.dayCircleActive,
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.dayNumber,
                                        item.isToday && styles.dayNumberActive,
                                    ]}
                                >
                                    {item.date}
                                </Text>
                            </View>

                            <View
                                style={[
                                    styles.dayDot,
                                    item.isToday && styles.dayDotActive,
                                ]}
                            />
                        </View>
                    ))}
                </View>

                <View style={styles.divider} />

                {/* ATALHOS */}
                <View style={styles.sectionHeading}>
                    <View>
                        <Text style={styles.sectionTitle}>Acessos rápidos</Text>
                        <Text style={styles.sectionSubtitle}>
                            Seu cuidado em um só lugar.
                        </Text>
                    </View>
                </View>

                <View style={styles.shortcuts}>
                    {shortcuts.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.shortcut}
                                onPress={item.route ? () => navigation.navigate(item.route) : undefined}
                                activeOpacity={0.7}
                            >
                                <View style={styles.shortcutIcon}>
                                    <Icon
                                        size={23}
                                        color={colors.wine}
                                        strokeWidth={1.5}
                                    />
                                </View>

                                <Text style={styles.shortcutLabel}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                {/* FRASE DECORATIVA */}
                <View style={styles.quoteSection}>
                    <View style={styles.quoteOrnament}>
                        <Flower2
                            size={24}
                            color={colors.primaryDark}
                            strokeWidth={1.3}
                        />
                    </View>

                    <View style={styles.quoteTextContainer}>
                        <Text style={styles.quoteText}>
                            Florescer leva tempo.
                        </Text>
                        <Text style={styles.quoteSubtitle}>
                            Respeite o seu processo.
                        </Text>
                    </View>

                    <Sparkles
                        size={19}
                        color={colors.primary}
                        strokeWidth={1.4}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
