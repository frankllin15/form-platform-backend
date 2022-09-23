import { styled } from "@stitches/react";
import { blackA, blue, green, red, violet, whiteA } from "@radix-ui/colors";
import * as React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
  children?: never;
  color?: string;
}

export const Button = styled("button", {
  minWidth: "max-content",
  maxWidth: "max-content",
  height: "2rem",
  padding: "4px 8px",
  borderRadius: "4px",
  border: "none",
  fontWeight: "500",
  fontSize: "1rem",
  transition: "all 200ms",

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
        maxWidth: "100%",
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
        backgroundColor: violet.violet10,
        color: whiteA.whiteA12,
        "&:hover": {
          backgroundColor: violet.violet9,
        },
        "&:active": {
          backgroundColor: violet.violet8,
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
      info: {
        backgroundColor: blue.blue10,
        color: whiteA.whiteA12,
        "&:hover": {
          backgroundColor: blue.blue9,
        },
        "&:active": {
          backgroundColor: blue.blue8,
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

type ButtonIconProps = React.ComponentProps<typeof ButtonPrimitive> & {
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  size?: string | number;
  cursor?: string;
  color?: string;
};

const ButtonPrimitive = styled("button", {
  all: "unset",
  "&:hover": {
    cursor: "pointer",
    opacity: 0.8,
  },
  "&:focus": {
    boxShadow: `0 0 0 2px ${blackA.blackA11}`,
  },
});
export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ icon: Icon, size = 16, cursor = "pointer", color, ...props }, ref) => {
    return (
      <ButtonPrimitive ref={ref} {...props}>
        <Icon color={color || "#000"} height={size} width={size} />
      </ButtonPrimitive>
    );
  }
);

ButtonIcon.displayName = "ButtonIcon";
