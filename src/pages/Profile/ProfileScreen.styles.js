
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
        paddingBottom: 35,
    },

    // CABEÇALHO

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 25,
    },

    headerEyebrow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
        marginBottom: 2,
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

    headerTitle: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 43,
        lineHeight: 47,
        color: colors.wine,
    },

    headerSubtitle: {
        fontFamily: "Manrope_400Regular",
        fontSize: 9,
        color: colors.textSecondary,
        marginTop: 3,
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
        marginLeft: 8,
    },

    // PERFIL

    profileSection: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF6F8",
        borderWidth: 1,
        borderColor: "#F3E1E8",
        borderRadius: 21,
        padding: 15,
        marginBottom: 28,
    },

    avatarArea: {
        width: 72,
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 13,
    },

    avatarOuter: {
        width: 65,
        height: 65,
        borderRadius: 33,
        borderWidth: 1,
        borderColor: "#E8C6D2",
        alignItems: "center",
        justifyContent: "center",
    },

    avatar: {
        width: 55,
        height: 55,
        borderRadius: 28,
        backgroundColor: "#F3DFE7",
        alignItems: "center",
        justifyContent: "center",
    },

    avatarFlower: {
        position: "absolute",
        right: 0,
        bottom: 0,
        width: 25,
        height: 25,
        borderRadius: 13,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        alignItems: "center",
        justifyContent: "center",
    },

    profileInfo: {
        flex: 1,
        minWidth: 0,
    },

    profileGreeting: {
        fontFamily: "Manrope_700Bold",
        fontSize: 7,
        letterSpacing: 1,
        color: colors.primaryDark,
        marginBottom: 3,
    },

    profileName: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 19,
        lineHeight: 23,
        color: colors.wine,
    },

    profileDescription: {
        fontFamily: "Manrope_400Regular",
        fontSize: 8,
        lineHeight: 13,
        color: colors.textSecondary,
        marginTop: 3,
    },

    editButton: {
        width: 29,
        height: 29,
        borderRadius: 15,
        backgroundColor: "#F7E6EC",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
    },

    // SEÇÕES

    sectionHeading: {
        marginBottom: 11,
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

    // LISTAS

    optionsList: {
        marginBottom: 25,
    },

    optionItem: {
        minHeight: 62,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingVertical: 9,
    },

    optionIcon: {
        width: 38,
        height: 38,
        borderRadius: 13,
        backgroundColor: "#FFF1F5",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    optionInfo: {
        flex: 1,
        minWidth: 0,
    },

    optionTitle: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 10,
        color: colors.text,
    },

    optionDescription: {
        fontFamily: "Manrope_400Regular",
        fontSize: 8,
        color: colors.textSecondary,
        marginTop: 3,
    },

    // RODAPÉ

    footer: {
        alignItems: "center",
        paddingTop: 8,
        paddingBottom: 12,
    },

    footerFlower: {
        width: 39,
        height: 39,
        borderRadius: 20,
        backgroundColor: "#F8E9EE",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,
    },

    footerTitle: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 23,
        color: colors.wine,
    },

    footerSubtitle: {
        fontFamily: "Manrope_400Regular",
        fontSize: 9,
        color: colors.textSecondary,
        marginTop: -2,
    },

    footerVersion: {
        fontFamily: "Manrope_700Bold",
        fontSize: 7,
        letterSpacing: 1.5,
        color: colors.textLight,
        marginTop: 11,
    },
});

export default styles;
