// Main colors used for themes
export const COLORS = {
  dark: "#0D1117",
};

// Size variables
export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
  header: 30,
};

// Font sizes
export const FONTS = {
  bold: "InterBold",
  semiBold: "InterSemiBold",
  medium: "InterMedium",
  regular: "InterRegular",
  light: "InterLight",
};

// Shadow designs
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
    shadowColor: COLORS.purple,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 14,
  },
  dark: {
    shadowColor: COLORS.oliveGreen,
    shadowOffset: {
      width: 100,
      height: 100,
    },
    shadowOpacity: 100,
    shadowRadius: 100,

    elevation: 14,
  },
};
