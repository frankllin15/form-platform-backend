import { styled } from "@/../stitches.config";

export const Box = styled("div", {
  display: "flex",
  variants: {
    align: {
      center: {
        alignItems: "center",
      },
      start: {
        alignItems: "flex-start",
      },
      end: {
        alignItems: "flex-end",
      },
    },
    justify: {
      center: {
        justifyContent: "center",
      },
      start: {
        justifyContent: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
      },
    },
    gap: {
      small: {
        gap: "0.5rem",
      },
      medium: {
        gap: "1rem",
      },
      large: {
        gap: "2rem",
      },
    },
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
    },
    fullWidth: {
      true: {
        width: "100%",
      },
    },
  },
});
