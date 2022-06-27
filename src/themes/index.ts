import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    fourth?: Palette["primary"];
    tertiary?: Palette["primary"];
  }
  interface PaletteOptions {
    fourth?: PaletteOptions["primary"];
    tertiary?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    secondary?: string;
    tertiary?: string;
  }
  interface SimplePaletteColorOptions {
    secondary?: string;
    tertiary?: string;
  }
}

//button override
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    fourth: true;
    tertiary: true;
  }
}

let theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Lato, sans-serif",
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#43B47C",
      light: "#E6F5EE",
    },
    secondary: {
      main: "#7bb0e0",
      light: "#B5DCFF",
    },
    tertiary: {
      main: "#FFD965",
      light: "#F7F59F",
    },
    fourth: {
      light: "#cccccc",
      main: "#333333",
      secondary: "#6d6d6d",
      tertiary: "#848484",
    },
  },
});

let buttonTheme = createTheme(theme, {
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            "&:hover": {
              backgroundColor: theme.palette.primary.main,
            },
          },
        },
        {
          props: { variant: "contained" },
          style: { color: "#fff" },
        },
      ],
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          [theme.breakpoints.up("md")]: {
            fontSize: "1.6rem",
          },
          [theme.breakpoints.down("md")]: {
            fontSize: "1.2rem",
          },
          lineHeight: 1,
          padding: "5px 9px",
          minWidth: "15rem",
          width: "max-content",
          height: "4rem",
          fontWeight: "bold",
          cursor: "pointer",
        },
      },
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  },
});

export { buttonTheme };
export default theme;
