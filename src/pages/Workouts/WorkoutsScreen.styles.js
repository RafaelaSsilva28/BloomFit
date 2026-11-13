import { StyleSheet, Platform } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#FFFAFB",
    },

    scrollContent: {
        width: "100%",
        paddingHorizontal: 18,
        paddingTop: 18,
        paddingBottom: 35,
    },

    // CABEÇALHO EDITORIAL
    header: {
        width: "100%",
        minHeight: 132,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFF6F8",
        borderRadius: 23,
        borderWidth: 1,
        borderColor: "#F6E6EC",
        paddingHorizontal: 17,
        paddingVertical: 15,
        marginBottom: 27,
        overflow: "hidden",
    },

    headerText: {
        flex: 1,
        minWidth: 0,
        justifyContent: "center",
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
        borderRadius: 2,
    },

    eyebrow: {
        fontFamily: "Manrope_700Bold",
        fontSize: 8,
        letterSpacing: 1.25,
        color: colors.primaryDark,
    },

    eyebrowDot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: "#D9A5B7",
    },

    title: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 43,
        lineHeight: 47,
        color: colors.wine,
        letterSpacing: -0.6,
    },

    subtitleRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
        marginTop: 1,
        maxWidth: 225,
    },

    subtitleAccent: {
        width: 2,
        height: 25,
        borderRadius: 2,
        backgroundColor: "#D99AAE",
    },

    subtitle: {
        flex: 1,
        fontFamily: "Manrope_400Regular",
        fontSize: 9,
        lineHeight: 15,
        color: colors.textSecondary,
    },

    // COMPOSIÇÃO FLORAL
    flowerComposition: {
        width: 76,
        height: 84,
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 1,
    },

    flowerOuterRing: {
        position: "absolute",
        width: 74,
        height: 74,
        borderRadius: 37,
        borderWidth: 1,
        borderColor: "#E9C7D2",
    },

    headerFlower: {
        width: 57,
        height: 57,
        borderRadius: 29,
        backgroundColor: "#F7E6EC",
        borderWidth: 1,
        borderColor: "#F0D5DF",
        alignItems: "center",
        justifyContent: "center",
    },

    flowerDot: {
        position: "absolute",
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: colors.primaryDark,
        right: 5,
        top: 9,
        borderWidth: 2,
        borderColor: "#FFF6F8",
    },

    // DESTAQUE
    highlight: {
        width: "100%",
        minHeight: 185,
        borderRadius: 23,
        backgroundColor: colors.wine,
        padding: 19,
        justifyContent: "center",
        overflow: "hidden",
        marginBottom: 27,
        position: "relative",
    },

    highlightDecoration: {
        position: "absolute",
        right: -30,
        bottom: -35,
        opacity: 0.19,
    },

    highlightContent: {
        zIndex: 1,
        width: "100%",
    },

    highlightLabel: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
        marginBottom: 15,
    },

    highlightEyebrow: {
        fontFamily: "Manrope_700Bold",
        color: "#F9DDE7",
        fontSize: 9,
        letterSpacing: 1.5,
        flexShrink: 1,
    },

    highlightTitle: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 31,
        lineHeight: 35,
        color: "#FFFFFF",
        flexShrink: 1,
    },

    highlightDescription: {
        fontFamily: "Manrope_400Regular",
        color: "#F2DCE4",
        fontSize: 10,
        lineHeight: 16,
        marginTop: 9,
        flexShrink: 1,
    },

    // ABAS
    tabs: {
        flexDirection: "row",
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        marginBottom: 20,
        gap: 0,
    },

    tab: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 12,
        paddingHorizontal: 4,
    },

    tabActive: {
        borderBottomWidth: 2,
        borderBottomColor: colors.wine,
    },

    tabText: {
        fontFamily: "Manrope_500Medium",
        fontSize: 11,
        color: colors.textSecondary,
        textAlign: "center",
    },

    tabTextActive: {
        fontFamily: "Manrope_700Bold",
        color: colors.wine,
    },

    // PESQUISA
    searchContainer: {
        width: "100%",
        minHeight: 52,
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#F1E1E6",
        paddingHorizontal: 14,
        flexDirection: "row",
        alignItems: "center",
        gap: 9,
        marginBottom: 17,
    },

    searchInput: {
        flex: 1,
        minWidth: 0,
        fontFamily: "Manrope_400Regular",
        fontSize: 11,
        color: colors.text,
        paddingVertical: 8,
    },

    // CATEGORIAS
    categories: {
        gap: 8,
        paddingRight: 8,
        paddingBottom: 8,
    },

    category: {
        paddingHorizontal: 14,
        paddingVertical: 9,
        borderRadius: 30,
        backgroundColor: "#F7EDF0",
        borderWidth: 1,
        borderColor: "#F3E3E8",
    },

    categoryActive: {
        backgroundColor: colors.wine,
        borderColor: colors.wine,
    },

    categoryText: {
        fontFamily: "Manrope_500Medium",
        fontSize: 10,
        color: colors.textSecondary,
    },

    categoryTextActive: {
        fontFamily: "Manrope_600SemiBold",
        color: "#FFFFFF",
    },

    // TÍTULO DA LISTA
    sectionHeading: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 21,
        marginBottom: 15,
        gap: 10,
        width: "100%",
    },

    sectionTitle: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 25,
        lineHeight: 29,
        color: colors.wine,
    },

    sectionSubtitle: {
        fontFamily: "Manrope_400Regular",
        fontSize: 10,
        color: colors.textSecondary,
        marginTop: 3,
        flexShrink: 1,
    },

    resultsCount: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 25,
        color: colors.primaryDark,
        flexShrink: 0,
    },

    // TREINOS PRONTOS
    workoutItem: {
        width: "100%",
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderRadius: 17,
        padding: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#F2E4E8",
        alignItems: "center",
        gap: 11,
    },

    workoutIcon: {
        width: 46,
        height: 52,
        flexShrink: 0,
        borderRadius: 15,
        backgroundColor: "#F9EAF0",
        alignItems: "center",
        justifyContent: "center",
    },

    workoutInfo: {
        flex: 1,
        minWidth: 0,
    },

    workoutNameRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 5,
        width: "100%",
    },

    workoutName: {
        flex: 1,
        flexShrink: 1,
        fontFamily: "Manrope_700Bold",
        fontSize: 12,
        lineHeight: 18,
        color: colors.wine,
    },

    workoutDescription: {
        fontFamily: "Manrope_400Regular",
        fontSize: 10,
        color: colors.textSecondary,
        marginTop: 5,
        lineHeight: 15,
        flexShrink: 1,
    },

    workoutMetadata: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        columnGap: 12,
        rowGap: 7,
        marginTop: 11,
    },

    metadataItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },

    metadataText: {
        fontFamily: "Manrope_400Regular",
        fontSize: 9,
        color: colors.textSecondary,
    },

    levelText: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 9,
        color: colors.primaryDark,
        marginTop: 8,
        letterSpacing: 0.3,
    },

    // ESTADO VAZIO
    emptyState: {
        alignItems: "center",
        paddingVertical: 40,
        paddingHorizontal: 10,
        gap: 10,
    },

    emptyTitle: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 14,
        color: colors.wine,
        textAlign: "center",
    },

    emptyDescription: {
        fontFamily: "Manrope_400Regular",
        fontSize: 10,
        color: colors.textSecondary,
        textAlign: "center",
        flexShrink: 1,
    },

    // ESTADO VAZIO - MEUS TREINOS
    customEmpty: {
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 35,
        paddingHorizontal: 5,
        width: "100%",
    },

    customFlower: {
        height: 140,
        width: 140,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F9EDF1",
        borderRadius: 80,
        marginBottom: 22,
        overflow: "hidden",
    },

    customTitle: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 28,
        color: colors.wine,
        textAlign: "center",
        flexShrink: 1,
    },

    customDescription: {
        fontFamily: "Manrope_400Regular",
        fontSize: 11,
        color: colors.textSecondary,
        textAlign: "center",
        lineHeight: 20,
        marginTop: 10,
        maxWidth: 280,
        width: "100%",
    },

    createButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 9,
        backgroundColor: colors.wine,
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderRadius: 30,
        marginTop: 22,
        maxWidth: "100%",
    },

    createButtonText: {
        fontFamily: "Manrope_600SemiBold",
        color: "#FFFFFF",
        fontSize: 11,
    },

    // ATALHO DE CRIAÇÃO
    createShortcut: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
        paddingHorizontal: 2,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.border,
        marginTop: 13,
        gap: 10,
    },

    createShortcutIcon: {
        width: 43,
        height: 43,
        flexShrink: 0,
        borderRadius: 14,
        backgroundColor: "#F8E8ED",
        alignItems: "center",
        justifyContent: "center",
    },

    createShortcutText: {
        flex: 1,
        minWidth: 0,
    },

    createShortcutTitle: {
        fontFamily: "Manrope_600SemiBold",
        color: colors.wine,
        fontSize: 11,
        flexShrink: 1,
    },

    createShortcutDescription: {
        fontFamily: "Manrope_400Regular",
        color: colors.textSecondary,
        fontSize: 9,
        marginTop: 4,
        flexShrink: 1,
    },

    // FRASE FINAL
    bottomQuote: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 9,
        marginTop: 27,
        paddingHorizontal: 5,
    },

    bottomQuoteText: {
        fontFamily: "Manrope_500Medium",
        color: colors.primaryDark,
        fontSize: 10,
        fontStyle: "italic",
        letterSpacing: 0.2,
        flexShrink: 1,
        textAlign: "center",
    },

    // MEUS TREINOS
    customWorkoutItem: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 18,
        paddingVertical: 15,
        paddingHorizontal: 13,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#F2E4E8",
        gap: 12,
    },

    customWorkoutTouchable: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        minWidth: 0,
    },

    customWorkoutMetadata: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        columnGap: 12,
        rowGap: 5,
        marginTop: 10,
    },

    workoutActions: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 9,
        flexShrink: 0,
    },

    actionButton: {
        width: 33,
        height: 33,
        borderRadius: 11,
        backgroundColor: "#F9EDF1",
        alignItems: "center",
        justifyContent: "center",
    },

    loadingContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 45,
        gap: 12,
    },

    loadingText: {
        fontFamily: "Manrope_400Regular",
        fontSize: 10,
        color: colors.textSecondary,
    },

    // MODAL DE CADASTRO
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(61, 35, 46, 0.38)",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 18,
        paddingVertical: 25,
    },

    modalContent: {
        width: "100%",
        maxWidth: 440,
        maxHeight: "90%",
        backgroundColor: "#FFFAFB",
        borderRadius: 25,
        padding: 21,
        borderWidth: 1,
        borderColor: "#F2DDE5",
    },

    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 23,
    },

    modalHeaderText: {
        flex: 1,
        paddingRight: 10,
    },

    modalEyebrow: {
        fontFamily: "Manrope_700Bold",
        fontSize: 8,
        letterSpacing: 1.2,
        color: colors.primaryDark,
        marginBottom: 4,
    },

    modalTitle: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 32,
        lineHeight: 37,
        color: colors.wine,
    },

    modalSubtitle: {
        fontFamily: "Manrope_400Regular",
        fontSize: 10,
        color: colors.textSecondary,
        marginTop: 3,
    },

    modalClose: {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: "#F7E8ED",
        alignItems: "center",
        justifyContent: "center",
    },

    inputLabel: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 10,
        color: colors.wine,
        marginBottom: 8,
        marginTop: 13,
    },

    formInput: {
        width: "100%",
        minHeight: 47,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#F0DFE5",
        borderRadius: 13,
        paddingHorizontal: 13,
        paddingVertical: 11,
        fontFamily: "Manrope_400Regular",
        fontSize: 11,
        color: colors.text,
    },

    formTextArea: {
        minHeight: 88,
        paddingTop: 12,
    },

    formCategories: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },

    formCategory: {
        paddingHorizontal: 12,
        paddingVertical: 9,
        borderRadius: 20,
        backgroundColor: "#F7EDF0",
        borderWidth: 1,
        borderColor: "#F0DFE5",
    },

    formCategoryActive: {
        backgroundColor: colors.wine,
        borderColor: colors.wine,
    },

    formCategoryText: {
        fontFamily: "Manrope_500Medium",
        fontSize: 9,
        color: colors.textSecondary,
    },

    formCategoryTextActive: {
        fontFamily: "Manrope_600SemiBold",
        color: "#FFFFFF",
    },

    saveButton: {
        width: "100%",
        minHeight: 49,
        backgroundColor: colors.wine,
        borderRadius: 25,
        marginTop: 25,
        marginBottom: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 9,
    },

    saveButtonDisabled: {
        opacity: 0.65,
    },

    saveButtonText: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 11,
        color: "#FFFFFF",
    },

    // MODAL PERSONALIZADO DE AVISOS
    dialogOverlay: {
        flex: 1,
        backgroundColor: "rgba(61, 35, 46, 0.48)",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 24,
    },

    dialogContent: {
        width: "100%",
        maxWidth: 370,
        alignItems: "center",
        backgroundColor: colors.offWhite,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: colors.border,
        paddingHorizontal: 24,
        paddingTop: 27,
        paddingBottom: 22,
        ...Platform.select({
            web: {
                boxShadow: "0px 12px 35px rgba(75, 42, 56, 0.18)",
            },
            default: {
                elevation: 12,
            },
        }),
    },

    dialogIcon: {
        width: 58,
        height: 58,
        borderRadius: 29,
        backgroundColor: colors.backgroundSecondary,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15,
    },

    dialogIconDanger: {
        backgroundColor: "#FBECEF",
    },

    dialogIconSuccess: {
        backgroundColor: "#EDF4EE",
    },

    dialogIconWarning: {
        backgroundColor: "#FBF2E7",
    },

    dialogEyebrow: {
        fontFamily: "Manrope_700Bold",
        fontSize: 8,
        letterSpacing: 1.7,
        color: colors.primaryDark,
        marginBottom: 7,
    },

    dialogTitle: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 30,
        lineHeight: 35,
        color: colors.wine,
        textAlign: "center",
    },

    dialogMessage: {
        fontFamily: "Manrope_400Regular",
        fontSize: 11,
        lineHeight: 19,
        color: colors.textSecondary,
        textAlign: "center",
        marginTop: 9,
    },

    dialogActions: {
        width: "100%",
        flexDirection: "row",
        gap: 9,
        marginTop: 23,
    },

    dialogCancelButton: {
        flex: 1,
        minHeight: 45,
        borderRadius: 13,
        backgroundColor: colors.backgroundSecondary,
        borderWidth: 1,
        borderColor: colors.border,
        alignItems: "center",
        justifyContent: "center",
    },

    dialogCancelText: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 10,
        color: colors.wine,
    },

    dialogConfirmButton: {
        flex: 1,
        minHeight: 45,
        borderRadius: 13,
        backgroundColor: colors.wine,
        alignItems: "center",
        justifyContent: "center",
    },

    dialogDeleteButton: {
        backgroundColor: colors.danger,
    },

    dialogConfirmText: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 10,
        color: "#FFFFFF",
    },
            // DIAS PROGRAMADOS
    customWorkoutDays: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 8,
        color: colors.primaryDark,
        marginTop: 7,
        letterSpacing: 0.4,
    },

    daysDescription: {
        fontFamily: "Manrope_400Regular",
        fontSize: 9,
        lineHeight: 15,
        color: colors.textSecondary,
        marginTop: -3,
        marginBottom: 12,
    },

    daysContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 7,
        width: "100%",
    },

    dayButton: {
        minWidth: 40,
        paddingHorizontal: 9,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: "#F7EDF0",
        borderWidth: 1,
        borderColor: "#F0DFE5",
        alignItems: "center",
        justifyContent: "center",
    },

    dayButtonSelected: {
        backgroundColor: colors.wine,
        borderColor: colors.wine,
    },

    dayButtonText: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 9,
        color: colors.textSecondary,
    },

    dayButtonTextSelected: {
        color: "#FFFFFF",
    },

    // COMPATIBILIDADE COM WORKOUTSSCREEN.JS

    // CABEÇALHO
    headerTitle: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 29,
        lineHeight: 34,
        color: colors.wine,
        marginTop: 5,
    },

    headerSubtitle: {
        fontFamily: "Manrope_400Regular",
        fontSize: 10,
        lineHeight: 15,
        color: colors.textSecondary,
        marginTop: 3,
    },

    // DESTAQUE
    highlightCard: {
        width: "100%",
        minHeight: 185,
        borderRadius: 23,
        backgroundColor: colors.wine,
        padding: 19,
        justifyContent: "center",
        overflow: "hidden",
        marginBottom: 22,
        position: "relative",
    },

    highlightTextContainer: {
        zIndex: 1,
        width: "100%",
    },

    // ABAS
    tabsContainer: {
        flexDirection: "row",
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        marginBottom: 20,
    },

    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: colors.wine,
    },

    activeTabText: {
        fontFamily: "Manrope_700Bold",
        color: colors.wine,
    },

    // CATEGORIAS
    categoriesContainer: {
        gap: 8,
        paddingRight: 8,
        paddingBottom: 8,
    },

    categoryButton: {
        paddingHorizontal: 14,
        paddingVertical: 9,
        borderRadius: 30,
        backgroundColor: "#F7EDF0",
        borderWidth: 1,
        borderColor: "#F3E3E8",
    },

    activeCategoryButton: {
        backgroundColor: colors.wine,
        borderColor: colors.wine,
    },

    activeCategoryText: {
        fontFamily: "Manrope_600SemiBold",
        color: "#FFFFFF",
    },

    // SEÇÃO
    section: {
        width: "100%",
    },

    sectionHeader: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginTop: 21,
        marginBottom: 15,
        gap: 10,
        width: "100%",
    },

    sectionEyebrow: {
        fontFamily: "Manrope_700Bold",
        fontSize: 8,
        letterSpacing: 1.5,
        color: colors.primaryDark,
        marginBottom: 3,
    },

    sectionCount: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 19,
        color: colors.primaryDark,
    },

    // TREINOS PRONTOS
    workoutCard: {
        width: "100%",
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderRadius: 17,
        padding: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#F2E4E8",
        alignItems: "center",
        gap: 11,
    },

    workoutIconContainer: {
        width: 46,
        height: 52,
        flexShrink: 0,
        borderRadius: 15,
        backgroundColor: "#F9EAF0",
        alignItems: "center",
        justifyContent: "center",
    },

    workoutCategory: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 9,
        color: colors.primaryDark,
        letterSpacing: 0.3,
        marginBottom: 3,
    },

    workoutMeta: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        columnGap: 12,
        rowGap: 7,
        marginTop: 11,
    },

    metaItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },

    metaText: {
        fontFamily: "Manrope_400Regular",
        fontSize: 9,
        color: colors.textSecondary,
    },

    // MEUS TREINOS
    customWorkoutCard: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 18,
        paddingVertical: 15,
        paddingHorizontal: 13,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#F2E4E8",
        gap: 12,
    },

    customWorkoutMain: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        minWidth: 0,
    },

    customWorkoutActions: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 9,
        flexShrink: 0,
    },

    customWorkoutDays: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 8,
        color: colors.primaryDark,
        marginTop: 7,
        letterSpacing: 0.4,
    },

    // ESTADO VAZIO
    emptyIcon: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#F9EDF1",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 12,
    },

    emptyButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 9,
        backgroundColor: colors.wine,
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderRadius: 30,
        marginTop: 22,
        maxWidth: "100%",
    },

    emptyButtonText: {
        fontFamily: "Manrope_600SemiBold",
        color: "#FFFFFF",
        fontSize: 11,
    },

    bottomSpacing: {
        height: 25,
    },

    // MODAL DE CADASTRO
    modalContainer: {
        width: "100%",
        maxWidth: 440,
        maxHeight: "90%",
        backgroundColor: "#FFFAFB",
        borderRadius: 25,
        padding: 21,
        borderWidth: 1,
        borderColor: "#F2DDE5",
    },

    modalCloseButton: {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: "#F7E8ED",
        alignItems: "center",
        justifyContent: "center",
    },

    modalInput: {
        width: "100%",
        minHeight: 47,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#F0DFE5",
        borderRadius: 13,
        paddingHorizontal: 13,
        paddingVertical: 11,
        fontFamily: "Manrope_400Regular",
        fontSize: 11,
        color: colors.text,
    },

    descriptionInput: {
        minHeight: 88,
        paddingTop: 12,
    },

    modalCategories: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },

    modalCategoryButton: {
        paddingHorizontal: 12,
        paddingVertical: 9,
        borderRadius: 20,
        backgroundColor: "#F7EDF0",
        borderWidth: 1,
        borderColor: "#F0DFE5",
    },

    modalCategoryActive: {
        backgroundColor: colors.wine,
        borderColor: colors.wine,
    },

    modalCategoryText: {
        fontFamily: "Manrope_500Medium",
        fontSize: 9,
        color: colors.textSecondary,
    },

    modalCategoryTextActive: {
        fontFamily: "Manrope_600SemiBold",
        color: "#FFFFFF",
    },

    modalFooter: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 9,
        marginTop: 25,
        marginBottom: 5,
    },

    cancelButton: {
        flex: 1,
        minHeight: 49,
        borderRadius: 25,
        backgroundColor: colors.backgroundSecondary,
        borderWidth: 1,
        borderColor: colors.border,
        alignItems: "center",
        justifyContent: "center",
    },

    cancelButtonText: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 11,
        color: colors.wine,
    },

    // MODAL DE MENSAGENS
    dialogContainer: {
        width: "100%",
        maxWidth: 370,
        alignItems: "center",
        backgroundColor: colors.offWhite,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: colors.border,
        paddingHorizontal: 24,
        paddingTop: 27,
        paddingBottom: 22,
        ...Platform.select({
            web: {
                boxShadow: "0px 12px 35px rgba(75, 42, 56, 0.18)",
            },
            default: {
                elevation: 12,
            },
        }),
    },

});

export default styles;