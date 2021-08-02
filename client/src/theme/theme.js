import {
  createMuiTheme,
  ThemeProvider as ThemeProviderMaterialUI,
  CssBaseline,
} from "@material-ui/core";
import { GlobalCss } from "./globalCss";
import { GlobalScss } from "./globalScss";

export const defaultTheme = createMuiTheme();
export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 767,
      md: 959,
      lg: 1279,
      xl: 1919,
    },
  },
  palette: {
    action: {
      main: "#007AFF",
    },
    primary: {
      close: "#2B273C1A",
      light: "#387DFF1A",
      main: "#FF453A",
      dark: "#26608C",
      contrastText: "#fff",
    },
    secondary: {
      main: "#766DE8",
      contrastText: "#fff",
    },
    text: {
      primary: "#2B273C",
      secondary: "#252E48",
      hint: "#545F7EB3",
    },
    error: {
      main: "#F07379",
    },
    success: {
      main: "#4FDC6F",
    },
    backfround: {
      main: "#F5FAFE",
    },
    shadow: {
      main: "#0000001A",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "html, body": {
          fontSize: "16px",
          fontFamily: "Arial, Helvetica, sans-serif",
          backgroundColor: "#ffffff !important",
        },
      },
    },
    MuiButton: {
      root: {
        textTransform: "initial",
      },
    },
  },
  spacing: 8,
});

export const ThemeProvider = ({ children }) => (
  <ThemeProviderMaterialUI theme={theme}>
    <GlobalCss />
    <GlobalScss />
    <CssBaseline />
    {children}
  </ThemeProviderMaterialUI>
);
