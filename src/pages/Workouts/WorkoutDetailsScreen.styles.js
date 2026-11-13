import { StyleSheet, Platform } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },

    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 35,
    },

    backButton: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        paddingVertical: 9,
        paddingRight: 12,
        gap: 8,
    },

    backText: {
        fontFamily: "Manrope_500Medium",
        fontSize: 12,
        color: colors.wine,
    },

    header: {
        paddingTop: 20,
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },

    eyebrowRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 9,
        marginBottom: 12,
    },

    eyebrowLine: {
        width: 22,
        height: 1,
        backgroundColor: colors.primaryDark,
    },

    eyebrow: {
        fontFamily: "Manrope_700Bold",
        fontSize: 9,
        letterSpacing: 2,
        color: colors.primaryDark,
    },

    titleRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
    },

    titleContent: {
        flex: 1,
    },

    title: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 39,
        lineHeight: 44,
        color: colors.wine,
    },

    subtitle: {
        marginTop: 5,
        fontFamily: "Manrope_400Regular",
        fontSize: 12,
        lineHeight: 20,
        color: colors.textSecondary,
    },

    flowerIcon: {
        width: 55,
        height: 55,
        borderRadius: 28,
        backgroundColor: colors.backgroundSecondary,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: colors.border,
    },

    categoryTag: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        gap: 7,
        marginTop: 17,
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: 20,
        backgroundColor: colors.primaryLight,
    },

    categoryText: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 10,
        color: colors.wine,
    },

    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 27,
        marginBottom: 17,
    },

    sectionTitle: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 27,
        color: colors.wine,
    },

    sectionSubtitle: {
        fontFamily: "Manrope_400Regular",
        fontSize: 11,
        color: colors.textSecondary,
        marginTop: 2,
    },

    counter: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 28,
        color: colors.primaryDark,
    },

    loading: {
        alignItems: "center",
        paddingVertical: 35,
        gap: 10,
    },

    loadingText: {
        fontFamily: "Manrope_400Regular",
        fontSize: 11,
        color: colors.textSecondary,
    },

    exerciseItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        paddingVertical: 16,
        paddingHorizontal: 12,
        marginBottom: 10,
        backgroundColor: colors.surface,
        borderRadius: 17,
        borderWidth: 1,
        borderColor: colors.border,
        gap: 11,
    },

    exerciseNumber: {
        width: 35,
        height: 35,
        borderRadius: 18,
        backgroundColor: colors.backgroundSecondary,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
    },

    exerciseNumberText: {
        fontFamily: "Manrope_700Bold",
        fontSize: 10,
        color: colors.wine,
    },

    exerciseContent: {
        flex: 1,
        minWidth: 0,
        paddingTop: 3,
    },

    exerciseName: {
        fontFamily: "Manrope_700Bold",
        fontSize: 12,
        color: colors.text,
    },

    exerciseDescription: {
        fontFamily: "Manrope_400Regular",
        fontSize: 10,
        lineHeight: 16,
        color: colors.textSecondary,
        marginTop: 5,
    },

    exerciseMetadata: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        marginTop: 10,
    },

    metadataItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },

    metadataText: {
        fontFamily: "Manrope_500Medium",
        fontSize: 9,
        color: colors.textSecondary,
    },

    exerciseActions: {
        gap: 7,
        paddingTop: 2,
    },

    actionButton: {
        width: 30,
        height: 30,
        borderRadius: 10,
        backgroundColor: colors.backgroundSecondary,
        alignItems: "center",
        justifyContent: "center",
    },

    exerciseMediaContainer: {
        marginTop: 12,
        alignSelf: "flex-start",
        width: "100%",
    },

    exerciseMediaImage: {
        width: "100%",
        height: 125,
        borderRadius: 12,
        backgroundColor: colors.backgroundSecondary,
    },

    exerciseVideoBadge: {
        flexDirection: "row",
        alignItems: "center",
        gap: 9,
        paddingHorizontal: 12,
        paddingVertical: 11,
        borderRadius: 11,
        backgroundColor: colors.backgroundSecondary,
        borderWidth: 1,
        borderColor: colors.border,
    },

    exerciseVideoText: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 10,
        color: colors.wine,
    },

    emptyState: {
        alignItems: "center",
        paddingHorizontal: 25,
        paddingVertical: 32,
        borderRadius: 20,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
    },

    emptyIcon: {
        width: 58,
        height: 58,
        borderRadius: 30,
        backgroundColor: colors.backgroundSecondary,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 14,
    },

    emptyTitle: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 24,
        color: colors.wine,
    },

    emptyDescription: {
        fontFamily: "Manrope_400Regular",
        fontSize: 11,
        lineHeight: 19,
        color: colors.textSecondary,
        textAlign: "center",
        marginTop: 5,
    },

    addButton: {
        minHeight: 49,
        borderRadius: 15,
        backgroundColor: colors.wine,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 9,
        marginTop: 18,
    },

    addButtonText: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 12,
        color: "#FFFFFF",
    },

    footer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        marginTop: 30,
    },

    footerText: {
        fontFamily: "Manrope_400Regular",
        fontSize: 10,
        color: colors.textSecondary,
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(65, 35, 48, 0.38)",
        justifyContent: "center",
        padding: 17,
    },

    modalContent: {
        maxHeight: "90%",
        backgroundColor: colors.offWhite,
        borderRadius: 23,
        padding: 21,
    },

    modalHeader: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: 20,
    },

    modalEyebrow: {
        fontFamily: "Manrope_700Bold",
        fontSize: 8,
        letterSpacing: 1.5,
        color: colors.primaryDark,
    },

    modalTitle: {
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 29,
        color: colors.wine,
        marginTop: 3,
    },

    closeButton: {
        width: 34,
        height: 34,
        borderRadius: 18,
        backgroundColor: colors.backgroundSecondary,
        alignItems: "center",
        justifyContent: "center",
    },

    inputLabel: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 10,
        color: colors.wine,
        marginBottom: 7,
        marginTop: 13,
    },

    input: {
        minHeight: 45,
        borderRadius: 11,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.surface,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontFamily: "Manrope_400Regular",
        fontSize: 11,
        color: colors.text,
    },

    fieldRow: {
        flexDirection: "row",
        gap: 11,
    },

    fieldColumn: {
        flex: 1,
    },

    textArea: {
        minHeight: 85,
        textAlignVertical: "top",
    },

    mediaSection: {
        marginTop: 12,
    },

    mediaDescription: {
        fontFamily: "Manrope_400Regular",
        fontSize: 10,
        lineHeight: 17,
        color: colors.textSecondary,
        marginBottom: 12,
    },

    mediaButtonsRow: {
        flexDirection: "row",
        gap: 9,
    },

    mediaButton: {
        flex: 1,
        minHeight: 43,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 7,
        paddingHorizontal: 7,
        borderRadius: 11,
        backgroundColor: colors.backgroundSecondary,
        borderWidth: 1,
        borderColor: colors.border,
    },

    mediaButtonText: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 9,
        color: colors.wine,
    },

    mediaLoading: {
        flexDirection: "row",
        alignItems: "center",
        gap: 9,
        marginTop: 13,
    },

    mediaEmpty: {
        minHeight: 85,
        alignItems: "center",
        justifyContent: "center",
        gap: 7,
        marginTop: 12,
        borderRadius: 13,
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: colors.border,
        backgroundColor: colors.surface,
    },

    mediaEmptyText: {
        fontFamily: "Manrope_400Regular",
        fontSize: 10,
        color: colors.textLight,
    },

    mediaPreviewContainer: {
        marginTop: 13,
        padding: 8,
        borderRadius: 14,
        backgroundColor: colors.backgroundSecondary,
        borderWidth: 1,
        borderColor: colors.border,
    },

    mediaPreviewImage: {
        width: "100%",
        height: 155,
        borderRadius: 10,
        backgroundColor: colors.surface,
    },

    mediaVideoPreview: {
        minHeight: 120,
        alignItems: "center",
        justifyContent: "center",
        gap: 9,
        borderRadius: 10,
        backgroundColor: colors.primaryLight,
    },

    mediaVideoText: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 11,
        color: colors.wine,
    },

    removeMediaButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        alignSelf: "flex-end",
        marginTop: 9,
        paddingHorizontal: 11,
        paddingVertical: 8,
        borderRadius: 9,
        backgroundColor: colors.wine,
    },

    removeMediaText: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 9,
        color: "#FFFFFF",
    },

    saveButton: {
        minHeight: 48,
        borderRadius: 13,
        backgroundColor: colors.wine,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        marginTop: 23,
        marginBottom: 8,
    },

    saveButtonDisabled: {
        opacity: 0.6,
    },

    saveButtonText: {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 11,
        color: "#FFFFFF",
    },

    imageViewerOverlay: {
        flex: 1,
        backgroundColor: "rgba(25, 15, 20, 0.97)",
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
    },

    imageViewerImage: {
        width: "100%",
        height: "100%",
    },

    imageViewerClose: {
        position: "absolute",
        top: Platform.OS === "android" ? 45 : 55,
        right: 20,
        zIndex: 2,
        width: 42,
        height: 42,
        borderRadius: 22,
        backgroundColor: "rgba(255, 255, 255, 0.16)",
        alignItems: "center",
        justifyContent: "center",
    },

    // MODAL PERSONALIZADO
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
});

export default styles;