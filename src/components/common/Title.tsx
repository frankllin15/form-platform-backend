import { styled } from "@stitches/react";

type Props = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
};

export const Title = styled("h1", {
  color: "$textD",
  defaultVariants: {
    size: "medium",
  },
  variants: {
    weight: {
      bold: {
        fontWeight: "bold",
      },
      normal: {
        fontWeight: "normal",
      },
    },
    size: {
      small: {
        fontSize: "1.25rem",
      },
      medium: {
        fontSize: "1.5rem",
      },
      large: {
        fontSize: "2rem",
      },
    },
  },
});
