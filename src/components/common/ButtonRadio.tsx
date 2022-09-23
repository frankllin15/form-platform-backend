import { styled } from "@stitches/react";
import { forwardRef } from "react";

const ButtonRadioWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  maxWidth: "stretch",
  "&:hover": {
    opacity: 0.8,
  },
  variants: {
    checked: {
      true: {
        opacity: 1,
      },
    },
  },
});

const Label = styled("label", {
  fontSize: "0.875rem",
  fontWeight: "500",
  color: "$textD",
  variants: {
    color: {
      secondary: {
        color: "#666",
      },
    },
    size: {
      small: {
        fontSize: "0.75rem",
      },
    },
  },
});

const InputWrapper = styled("div", {});

export type ButtonRadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  value: string;
  defaultChecked?: boolean;
  onChange: (value: any) => void;
};
export const ButtonRadioInput = styled("input", {
  cursor: "pointer",
  "&:checked + label": {
    color: "$textD",
  },
});

const ButtonRadio = forwardRef<HTMLInputElement, ButtonRadioProps>(
  ({ label, defaultChecked, value, name, ...props }: ButtonRadioProps, ref) => {
    return (
      <ButtonRadioWrapper>
        <ButtonRadioInput
          ref={ref}
          {...props}
          type="radio"
          name={name}
          checked={defaultChecked}
          value={value}
        />
        <Label color="secondary" size="small">
          {label}
        </Label>
      </ButtonRadioWrapper>
    );
  }
);

ButtonRadio.displayName = "ButtonRadio";

export const MultipleButtonRadio = (props: ButtonRadioProps) => {
  return (
    <ButtonRadioWrapper>
      <ButtonRadioInput
        type="radio"
        name={props.name}
        checked={props.checked}
        // onClick={() => props.onChange(props.checked)}
      />
      <Label color="secondary">{props.label}</Label>
    </ButtonRadioWrapper>
  );
};

export default ButtonRadio;
