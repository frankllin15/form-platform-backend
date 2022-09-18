import { styled } from "@stitches/react";
import { blue, green, red, whiteA } from "@radix-ui/colors";

export const Button = styled("button", {
  minWidth: "min-content",
  height: "2rem",
  padding: "4px 8px",
  borderRadius: "4px",
  border: "none",
  fontWeight: "500",
  fontSize: "0.875rem",
  "&:hover": {
    cursor: "pointer",
  },
  defaultVariants: {
    color: "primary",
  },
  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
    },
    size: {
      small: {
        height: "1.5rem",
        fontSize: "0.75rem",
      },
      big: {
        height: "2.5rem",
        fontSize: "1rem",
      },
    },
    color: {
      primary: {
        backgroundColor: blue.blue10,
        color: whiteA.whiteA12,
        "&:hover": {
          backgroundColor: blue.blue11,
        },
        "&:active": {
          backgroundColor: blue.blue11,
        },
        "&:focus": {
          boxShadow: `0 0 0 2px ${whiteA.whiteA6}`,
        },
      },
      danger: {
        backgroundColor: red.red10,
        color: whiteA.whiteA12,
        "&:hover": {
          backgroundColor: red.red9,
        },
        "&:active": {
          backgroundColor: red.red9,
        },
        "&:focus": {
          boxShadow: `0 0 0 2px ${whiteA.whiteA6}`,
        },
      },
      success: {
        backgroundColor: green.green9,
        color: whiteA.whiteA12,
        "&:hover": {
          backgroundColor: green.green8,
        },
      },
    },
  },
});
