import { MantineThemeOverride } from "@mantine/core";

const palette: MantineThemeOverride["colors"] = {
  grayUI: [
    "#F9FAFB", // gray50
    "#F3F4F6", // gray100
    "#E5E7EB", // gray200
    "#D1D5DB", // gray300
    "#9CA3AF", // gray400
    "#6B7280", // gray500
    "#4B5563", // gray600
    "#374151", // gray700
    "#1F2937", // gray800
    "#111827", // gray900
  ],
};

export const theme: MantineThemeOverride = {
  fontFamily: "Montserrat",
  colorScheme: "light",
  primaryShade: 8,
  primaryColor: "gray",
  colors: palette,
  components: {
    Button: {
      styles: {
        root: {
          fontFamily: "Montserrat",
        },
      },
    },
    Input: {
      styles: {
        input: {
          "height": "42px",
          "fontSize": "14px",
          "fontFamily": "Montserrat",
          "&[disabled]": {
            color: "black",
            fontWeight: 800,
          },
        },
      },
    },
    Select: {
      styles: {
        input: { height: "42px", fontSize: "14px", fontFamily: "Montserrat" },
      },
    },
    Title: {
      styles: {
        root: { fontFamily: "Montserrat" },
      },
    },
    Menu: {
      styles: {
        dropdown: { padding: 0 },
        item: { height: "36px" },
        itemLabel: { color: palette.grayUI?.[7], fontWeight: 400, fontSize: "14px", lineHeight: "20px" },
      },
    },
  },
};
