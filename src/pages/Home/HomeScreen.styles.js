
import { StyleSheet, Platform } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAFB",
  },

  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 14,
    paddingBottom: 35,
  },

  // Cabeçalho
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 36,
  },

  brand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  logoMark: {
    width: 43,
    height: 43,
    borderRadius: 15,
    backgroundColor: "#F8E8EE",
    alignItems: "center",
    justifyContent: "center",
  },

  brandName: {
    fontSize: 23,
    fontWeight: "700",
    color: colors.wine,
    letterSpacing: 0.3,
  },

  brandSubtitle: {
    fontSize: 7,
    color: colors.textSecondary,
    letterSpacing: 1.7,
    marginTop: 3,
  },

  notificationButton: {
    width: 42,
    height: 42,
    borderRadius: 15,
    backgroundColor: "#F8E8EE",
    alignItems: "center",
    justifyContent: "center",
  },

  notificationDot: {
    position: "absolute",
    top: 9,
    right: 10,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.primaryDark,
  },

  // Boas-vindas
  greeting: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 29,
    minHeight: 150,
  },

  greetingText: {
    flex: 1,
    zIndex: 2,
  },

  eyebrow: {
    color: colors.primaryDark,
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 2,
    marginBottom: 11,
  },

  greetingTitle: {
    fontSize: 31,
    fontWeight: "700",
    color: colors.wine,
    lineHeight: 37,
    letterSpacing: -1,
  },

  greetingHighlight: {
    color: colors.primaryDark,
    fontStyle: "italic",
  },

  greetingDate: {
    color: colors.textSecondary,
    fontSize: 11,
    marginTop: 12,
    textTransform: "capitalize",
  },

  greetingFlower: {
    width: 105,
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    marginRight: -23,
    overflow: "hidden",
  },

  // Treino
  workoutSection: {
    backgroundColor: colors.wine,
    borderRadius: 25,
    minHeight: 235,
    padding: 23,
    marginBottom: 34,
    overflow: "hidden",
    position: "relative",
    ...Platform.select({
      web: {
        boxShadow: "0px 9px 23px rgba(120, 59, 83, 0.19)",
      },
      default: {
        elevation: 5,
        shadowColor: colors.wine,
        shadowOpacity: 0.18,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
      },
    }),
  },

  workoutDecoration: {
    position: "absolute",
    right: -46,
    bottom: -48,
    opacity: 0.16,
    transform: [{ rotate: "-15deg" }],
  },

  workoutTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  workoutLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  workoutEyebrow: {
    color: "#F8DDE6",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1.8,
  },

  workoutNumber: {
    color: "#D9A5B7",
    fontSize: 13,
    letterSpacing: 2,
    fontWeight: "600",
  },

  workoutTitle: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "700",
    lineHeight: 30,
    letterSpacing: -0.4,
  },

  workoutDescription: {
    color: "#F1DCE4",
    fontSize: 11,
    lineHeight: 18,
    marginTop: 9,
  },

  workoutButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#FFF8FA",
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderRadius: 13,
    marginTop: 20,
  },

  workoutButtonText: {
    fontSize: 11,
    color: colors.wine,
    fontWeight: "700",
  },

  workoutBottomLine: {
    position: "absolute",
    height: 2,
    width: 48,
    backgroundColor: "#E9B9CA",
    bottom: 0,
    left: 23,
  },

  // Cabeçalhos de seção
  sectionHeading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  sectionTitle: {
    color: colors.wine,
    fontSize: 19,
    fontWeight: "700",
    letterSpacing: -0.3,
  },

  sectionSubtitle: {
    color: colors.textSecondary,
    fontSize: 10,
    marginTop: 5,
  },

  // Semana
  weekContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  dayItem: {
    alignItems: "center",
    gap: 9,
  },

  dayName: {
    color: colors.textSecondary,
    fontSize: 10,
    fontWeight: "600",
  },

  dayNameActive: {
    color: colors.primaryDark,
    fontWeight: "800",
  },

  dayCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F8EDF1",
    borderWidth: 1,
    borderColor: "#F0DDE4",
    alignItems: "center",
    justifyContent: "center",
  },

  dayCircleActive: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.primaryDark,
  },

  dayNumber: {
    color: colors.wine,
    fontSize: 11,
    fontWeight: "600",
  },

  dayNumberActive: {
    color: "#FFFFFF",
  },

  dayDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#EAD5DE",
  },

  dayDotActive: {
    backgroundColor: colors.primaryDark,
  },

  divider: {
    height: 1,
    backgroundColor: "#F0E1E6",
    marginBottom: 28,
  },

  // Atalhos
  shortcuts: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    rowGap: 25,
    marginBottom: 30,
  },

  shortcut: {
    width: "33.33%",
    alignItems: "center",
    gap: 9,
  },

  shortcutIcon: {
    width: 48,
    height: 48,
    borderRadius: 17,
    backgroundColor: "#F8E9EE",
    alignItems: "center",
    justifyContent: "center",
  },

  shortcutLabel: {
    color: colors.wine,
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
  },

  // Frase
  quoteSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: "#F0E1E6",
    paddingTop: 20,
    paddingBottom: 10,
  },

  quoteOrnament: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#F8E9EE",
    alignItems: "center",
    justifyContent: "center",
  },

  quoteTextContainer: {
    flex: 1,
  },

  quoteText: {
    color: colors.wine,
    fontSize: 12,
    fontWeight: "700",
  },

  quoteSubtitle: {
    color: colors.textSecondary,
    fontSize: 10,
    marginTop: 4,
  },

  // Navegação
  bottomNavigation: {
    height: 73,
    backgroundColor: "#FFFEFD",
    borderTopWidth: 1,
    borderTopColor: "#F1E4E9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 8,
    paddingBottom: Platform.OS === "web" ? 4 : 7,
  },

  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },

  navLabel: {
    color: "#B9A5AD",
    fontSize: 9,
  },

  navActive: {
    color: colors.primaryDark,
    fontSize: 9,
    fontWeight: "700",
  },

  addButton: {
    width: 49,
    height: 49,
    borderRadius: 18,
    backgroundColor: colors.primaryDark,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -23,
    borderWidth: 4,
    borderColor: "#FFFAFB",
    ...Platform.select({
      web: {
        boxShadow: "0px 4px 11px rgba(120, 59, 83, 0.20)",
      },
      default: {
        elevation: 5,
        shadowColor: colors.wine,
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
      },
    }),
  },
});

export default styles;
