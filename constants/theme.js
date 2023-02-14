export const COLORS = {
  dark: "#0D1117",
  gray: "#21262D",
  mint: "#22F1BF",
  purple: "#7371FF",
  white: "#FFFFFF",
  forestGreen: "#228B22",
  darkGoldenrod: "#B8860B",
  sienna: "#A0522D",
  burnOrange: "#CC5500",
  oliveGreen: "#808000",
};


export const defaultTheme = {
    name: "Default",
    backgroundColor: COLORS.dark,
    secondaryColor: COLORS.gray,
    textColor: COLORS.forestGreen,
    iconColor: COLORS.darkGoldenrod,
    labelColor: COLORS.white,
  }

export const darkAltTheme = {
    name: "Dark Alt",
    backgroundColor: COLORS.dark,
    secondaryColor: COLORS.gray,
    textColor: COLORS.mint,
    iconColor: COLORS.purple,
    labelColor: COLORS.white,
  }

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
  header: 30,
};

export const FONTS = {
  bold: "InterBold",
  semiBold: "InterSemiBold",
  medium: "InterMedium",
  regular: "InterRegular",
  light: "InterLight",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.oliveGreen,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    shadowRadius: 9.5,

    elevation: 14,
  },
};
