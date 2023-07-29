import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    blue: {
      blue_100: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    blue?: {
      blue_100?: string;
    };
  }
}

const theme = createTheme({
  blue: {
    blue_100: "#0D86F8",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 960,
      lg: 1264,
      xl: 1640,
    },
  },
  palette: {
    primary: {
      main: "#266DD3",
      light: "#BFD7FF",
    },
    text: {
      primary: "#04151F",
      secondary: "#888",
    },
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    h1: {
      fontSize: "28px",
      lineHeight: "42px",
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "32px",
    },
    h4: {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
    },
    body1: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    body2: {
      fontSize: "18px",
      lineHeight: "30px",
    },
    subtitle1: {
      fontSize: "14px",
    },
    button: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "19px",
      textTransform: "none",
    },
  },
});

export default theme;
