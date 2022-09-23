import { blue } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const { styled, getCssText, createTheme, globalCss } = createStitches({
  theme: {
    colors: {
      primary: blue.blue10,
      white: "#fafafa",
      textD: "#18181b",
      textSecondaryD: "#737373",
      backgroundD: "#e4e4e7",
      backgroundSecondary: "#f4f4f5",
      border: "#ccc"
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 858px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
  }
});

export const darkTheme = createTheme({
  colors: {
    textD: "#fafafa",
    backgroundD: "#18181b",
    textSecondaryD: "#a3a3a3",

  },
});

const GlobalStyles = globalCss({
  body: {
    
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen",
    background: "$backgroundD",
    color: "$textD",
    transition: "background 0.2s ease, color 0.2s ease, backgroundColor 1.2s ease",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },  
    "*, *::before, *::after": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
    },
});


GlobalStyles();
