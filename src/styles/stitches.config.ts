import { createStitches } from "@stitches/react";

export const { styled, getCssText, createTheme, globalCss } = createStitches({
  theme: {
    colors: {
      text: "#18181b",
      textSecondary: "#737373",
      background: "#fafafa",
      border: "#ccc"
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    text: "#fafafa",
    background: "#18181b",
    textSecondary: "#a3a3a3",

  },
});

const GlobalStyles = globalCss({
  body: {
    
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen",
    background: "$background",
    color: "$text",
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
