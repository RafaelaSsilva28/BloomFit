
import React from "react";
import {
    View,
    Text,
    ScrollView,
    StatusBar,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path, Circle, Line } from "react-native-svg";

import {
    Flower2,
    CalendarDays,
    Dumbbell,
    Clock3,
    CircleCheck,
} from "lucide-react-native";

import colors from "../../styles/colors";
import styles from "./EvolutionScreen.styles";

const weekData = [
    { day: "SEG", value: 72 },
    { day: "TER", value: 105 },
    { day: "QUA", value: 62 },
    { day: "QUI", value: 118 },
    { day: "SEX", value: 88 },
    { day: "SÁB", value: 48 },
    { day: "DOM", value: 25 },
];

const activities = [
    {
        day: "12",
        month: "NOV",
        title: "Treino de inferiores",
        duration: "45 min",
    },
    {
        day: "10",
        month: "NOV",
        title: "Treino de superiores",
        duration: "40 min",
    },
    {
        day: "08",
        month: "NOV",
        title: "Cardio leve",
        duration: "30 min",
    },
];

function EvolutionChart() {
    return (
        <View style={styles.chartContainer}>
            <Svg
                width="100%"
                height="150"
                viewBox="0 0 320 150"
                preserveAspectRatio="none"
            >
                {[30, 70, 110].map((y, index) => (
                    <Line
                        key={index}
                        x1="5"
                        y1={y}
                        x2="315"
                        y2={y}
                        stroke="#F0E2E7"
                        strokeWidth="1"
                        strokeDasharray="3 6"
                    />
                ))}

                <Path
                    d="M 5 105 C 40 98, 55 55, 90 65 S 130 105, 150 75 S 205 35, 225 52 S 275 95, 315 25"
                    fill="none"
                    stroke={colors.primaryDark}
                    strokeWidth="2.8"
                    strokeLinecap="round"
                />

                <Path
                    d="M 5 105 C 40 98, 55 55, 90 65 S 130 105, 150 75 S 205 35, 225 52 S 275 95, 315 25 L 315 140 L 5 140 Z"
                    fill="#EBCAD6"
                    opacity="0.20"
                />

                {[
                    [5, 105],
                    [90, 65],
                    [150, 75],
                    [225, 52],
                    [315, 25],
                ].map(([cx, cy], index) => (
                    <Circle
                        key={index}
                        cx={cx}
                        cy={cy}
                        r="4"
                        fill={colors.offWhite}
                        stroke={colors.primaryDark}
                        strokeWidth="2"
                    />
                ))}
            </Svg>

            <View style={styles.chartLabels}>
                {weekData.map((item) => (
                    <Text key={item.day} style={styles.chartDay}>
                        {item.day}
                    </Text>
                ))}
            </View>
        </View>
    );
}

export default function EvolutionScreen() {
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
                    <View style={styles.headerText}>
                        <View style={styles.headerEyebrow}>
                            <View style={styles.eyebrowLine} />

                            <Text style={styles.eyebrow}>
                                CADA PASSO IMPORTA
                            </Text>
                        </View>

                        <Text style={styles.title}>
                            Sua evolução
                        </Text>

                        <Text style={styles.subtitle}>
                            Pequenas conquistas merecem ser reconhecidas.
                        </Text>
                    </View>

                    <View style={styles.flowerComposition}>
                        <View style={styles.flowerOuterRing} />

                        <View style={styles.headerFlower}>
                            <Flower2
                                size={31}
                                color={colors.wine}
                                strokeWidth={1.25}
                            />
                        </View>
                    </View>
                </View>

                {/* RESUMO DA SEMANA */}
                <View style={styles.periodHeading}>
                    <View>
                        <Text style={styles.sectionEyebrow}>
                            SEU DESEMPENHO
                        </Text>

                        <Text style={styles.sectionTitle}>
                            Esta semana
                        </Text>
                    </View>

                    <CalendarDays
                        size={19}
                        color={colors.primaryDark}
                        strokeWidth={1.5}
                    />
                </View>

                {/* INDICADORES */}
                <View style={styles.statsRow}>
                    <View style={styles.statItem}>
                        <View style={styles.statTop}>
                            <Dumbbell
                                size={16}
                                color={colors.primaryDark}
                            />

                            <Text style={styles.statLabel}>
                                TREINOS
                            </Text>
                        </View>

                        <View style={styles.statValueRow}>
                            <Text style={styles.statValue}>
                                04
                            </Text>

                            <Text style={styles.statDescription}>
                                concluídos
                            </Text>
                        </View>
                    </View>

                    <View style={styles.statDivider} />

                    <View style={styles.statItem}>
                        <View style={styles.statTop}>
                            <Clock3
                                size={16}
                                color={colors.primaryDark}
                            />

                            <Text style={styles.statLabel}>
                                TEMPO ATIVO
                            </Text>
                        </View>

                        <View style={styles.statValueRow}>
                            <Text style={styles.statValue}>
                                02h35
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.mainDivider} />

                {/* GRÁFICO */}
                <View style={styles.chartSection}>
                    <View style={styles.chartHeader}>
                        <View>
                            <Text style={styles.sectionEyebrow}>
                                CONSISTÊNCIA
                            </Text>

                            <Text style={styles.sectionTitle}>
                                Ritmo da semana
                            </Text>
                        </View>

                        <View style={styles.chartLegend}>
                            <View style={styles.legendDot} />

                            <Text style={styles.legendText}>
                                Atividades
                            </Text>
                        </View>
                    </View>

                    <Text style={styles.chartDescription}>
                        Acompanhe seus registros ao longo dos dias.
                    </Text>

                    <EvolutionChart />
                </View>

                <View style={styles.mainDivider} />

                {/* HISTÓRICO */}
                <View style={styles.historyHeading}>
                    <View style={styles.historyTitleContainer}>
                        <View style={styles.historyTopLine}>
                            <Text style={styles.sectionEyebrow}>
                                SUA CAMINHADA
                            </Text>

                            <Text style={styles.historyCount}>
                                03 registros
                            </Text>
                        </View>

                        <Text style={styles.sectionTitle}>
                            Atividades recentes
                        </Text>
                    </View>
                </View>

                {/* LISTA DE ATIVIDADES */}
                <View style={styles.historyList}>
                    {activities.map((activity) => (
                        <View
                            key={`${activity.day}-${activity.title}`}
                            style={styles.activityItem}
                        >
                            {/* DATA */}
                            <View style={styles.activityDate}>
                                <Text style={styles.activityDay}>
                                    {activity.day}
                                </Text>

                                <Text style={styles.activityMonth}>
                                    {activity.month}
                                </Text>
                            </View>

                            {/* INFORMAÇÕES */}
                            <View style={styles.activityInfo}>
                                <Text style={styles.activityTitle}>
                                    {activity.title}
                                </Text>

                                <View style={styles.activityStatus}>
                                    <CircleCheck
                                        size={12}
                                        color={colors.success}
                                    />

                                    <Text style={styles.activityDescription}>
                                        Concluído
                                    </Text>
                                </View>
                            </View>

                            {/* DURAÇÃO */}
                            <Text style={styles.activityDuration}>
                                {activity.duration}
                            </Text>
                        </View>
                    ))}
                </View>

                {/* RODAPÉ */}
                <View style={styles.footer}>
                    <Flower2
                        size={16}
                        color={colors.primaryDark}
                        strokeWidth={1.3}
                    />

                    <Text style={styles.footerText}>
                        Floresça no seu tempo.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
