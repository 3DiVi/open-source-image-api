import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    blue: {
      100: "#276EFB",
      200: "#276EFB",
      300: "#276EFB",
      400: "#276EFB",
      500: "#276EFB",
      600: "#3778FB",
    },
    bgSecondary: { 100: "#29303D" },
    active: { 100: "#276EFB" },
    textPrimary: { 100: "#F7F8F8" },
    textSecondary: { 100: "#838594" },
    page: { 100: "#0c121d" },
    lightGreen: { 100: "#6CBC62", 200: "#70C270" },
  },
  styles: {
    global: {
      body: {
        fontFamily: "IBM Plex Sans",
      },
    },
  },
});

export default theme;
