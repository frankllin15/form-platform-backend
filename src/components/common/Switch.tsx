import * as SwitchPrimitive from "@radix-ui/react-switch";
import { blackA, violet } from "@radix-ui/colors";
import { styled } from "@stitches/react";
import { forwardRef } from "react";
import { on } from "events";

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: "unset",
  width: 42,
  height: 15,
  backgroundColor: blackA.blackA9,
  borderRadius: "9999px",
  position: "relative",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  "&:focus": { boxShadow: `0 0 0 2px ${blackA.blackA12}` },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  position: "absolute",
  display: "block",
  width: 23,
  height: 23,
  minWidth: "max-content",
  top: -4,
  backgroundColor: "white",
  borderRadius: "9999px",
  boxShadow: `0 2px 2px ${blackA.blackA7}`,
  transition: "transform 100ms",
  transform: "translateX(-2px)",
  willChange: "transform",
  '&[data-state="checked"]': {
    transform: "translateX(19px)",
    backgroundColor: violet.violet10,
  },
});

type SwitchProps = SwitchPrimitive.SwitchProps & {
  label?: string;
};

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (props, forwardedRef) => {
    return (
      <StyledSwitch {...props} ref={forwardedRef}>
        <StyledThumb />
      </StyledSwitch>
    );
  }
);

Switch.displayName = "Switch";
