
import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.offWhite,
    },

    scrollContent: {
        paddingHorizontal: 21,
        paddingTop: 19,
        paddingBottom: 30,
    },

    // CABEÇALHO

    header: {
        minHeight: 116,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFF6F8",
        borderRadius: 22,
        borderWidth: 1,
        borderColor: "#F6E6EC",
        paddingHorizontal: 17,
        paddingVertical: 13,
        marginBottom: 29,
        overflow: "hidden",
    },

    headerText: {
        flex: 1,
        paddingRight: 5,
    },

    headerEyebrow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
        marginBottom: 3,
    },

    eyebrowLine: {
        width: 17,
        height: 1.5,
        backgroundColor: colors.primaryDark,
    },

    eyebrow: {
        fontFamily: "Manrope_700Bold",
        fontSize: 8,
        letterSpacing: 1.2,
        color: colors.primaryDark,
    },

    title: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 39,
        lineHeight: 44,
        color: colors.wine,
    },

    subtitle: {
        fontFamily: "Manrope_400Regular",
        fontSize: 9,
        lineHeight: 14,
        color: colors.textSecondary,
        marginTop: 2,
        maxWidth: 215,
    },

    flowerComposition: {
        width: 72,
        height: 78,
        alignItems: "center",
        justifyContent: "center",
    },

    flowerOuterRing: {
        position: "absolute",
        width: 68,
        height: 68,
        borderRadius: 34,
        borderWidth: 1,
        borderColor: "#E9C7D2",
    },

    headerFlower: {
        width: 53,
        height: 53,
        borderRadius: 27,
        backgroundColor: "#F7E6EC",
        borderWidth: 1,
        borderColor: "#F0D5DF",
        alignItems: "center",
        justifyContent: "center",
    },

    // TÍTULOS

    periodHeading: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 14,
    },

    sectionEyebrow: {
        fontFamily: "Manrope_700Bold",
        fontSize: 8,
        letterSpacing: 1.2,
        color: colors.primaryDark,
        marginBottom: 2,
    },

    sectionTitle: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 27,
        lineHeight: 32,
        color: colors.wine,
    },

    // RESUMO

    statsRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 13,
        paddingHorizontal: 3,
    },

    statItem: {
        flex: 1,
    },

    statTop: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
        marginBottom: 5,
    },

    statLabel: {
        fontFamily: "Manrope_700Bold",
        fontSize: 8,
        letterSpacing: 0.8,
        color: colors.textSecondary,
    },

    statValueRow: {
        flexDirection: "row",
        alignItems: "baseline",
        gap: 6,
        flexWrap: "wrap",
    },

    statValue: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 34,
        lineHeight: 38,
        color: colors.wine,
    },

    statDescription: {
        fontFamily: "Manrope_400Regular",
        fontSize: 9,
        color: colors.textSecondary,
    },

    statDivider: {
        width: 1,
        height: 47,
        backgroundColor: colors.border,
        marginHorizontal: 17,
    },

    mainDivider: {
        height: 1,
        backgroundColor: colors.border,
        marginVertical: 21,
    },

    // GRÁFICO

    chartSection: {
        width: "100%",
    },

    chartHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    chartLegend: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },

    legendDot: {
        width: 7,
        height: 7,
        borderRadius: 4,
        backgroundColor: colors.primary,
    },

    legendText: {
        fontFamily: "Manrope_500Medium",
        fontSize: 9,
        color: colors.textSecondary,
    },

    chartDescription: {
        fontFamily: "Manrope_400Regular",
        fontSize: 10,
        color: colors.textSecondary,
        marginTop: 3,
    },

    chartContainer: {
        marginTop: 13,
        width: "100%",
    },

    chartLabels: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 1,
        marginTop: 5,
    },

    chartDay: {
        fontFamily: "Manrope_500Medium",
        fontSize: 8,
        color: colors.textLight,
    },

    // HISTÓRICO

   historyHeading: {
    width: "100%",
    marginBottom: 9,
},

historyTitleContainer: {
    width: "100%",
},

historyTopLine: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 2,
},

historyCount: {
    fontFamily: "Manrope_500Medium",
    fontSize: 8,
    color: colors.textSecondary,
    textAlign: "right",
},
    historyList: {
        width: "100%",
    },

    activityItem: {
        minHeight: 66,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingVertical: 10,
    },

    activityDate: {
        width: 43,
        height: 43,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF3F6",
        borderRadius: 13,
        marginRight: 12,
    },

    activityDay: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 21,
        lineHeight: 22,
        color: colors.wine,
    },

    activityMonth: {
        fontFamily: "Manrope_700Bold",
        fontSize: 7,
        letterSpacing: 0.7,
        color: colors.primaryDark,
    },

    activityInfo: {
        flex: 1,
        justifyContent: "center",
    },

    activityTitle: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 10,
        color: colors.text,
    },

    activityStatus: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        marginTop: 4,
    },

    activityDescription: {
        fontFamily: "Manrope_400Regular",
        fontSize: 8,
        color: colors.textSecondary,
    },

    activityDuration: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 9,
        color: colors.primaryDark,
        marginLeft: 5,
    },

    // RODAPÉ

    footer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        marginTop: 23,
    },

    footerText: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 17,
        color: colors.wine,
    },
});

export default styles;
