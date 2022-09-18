import { styled } from "@stitches/react";
import { forwardRef } from "react";

const ButtonRadioWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  height: "1.7rem",
  maxWidth: "stretch",
  marginLeft: ".5rem",
  gap: "0.5rem",
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
  color: "$text",
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
  options: {
    label: string;
    value: string;
    defaultChecked?: boolean;
  }[];
  label: string;
  onChange: (value: any) => void;
};
const ButtonRadioInput = styled("input", {
  width: ".875rem",
  cursor: "pointer",
  "&:checked + label": {
    color: "$text",
  },
});

const ButtonRadio = forwardRef<HTMLInputElement, ButtonRadioProps>(
  ({ label, options, name, ...props }: ButtonRadioProps, ref) => {
    return (
      <InputWrapper>
        <Label>{label}</Label>
        {options.map((option, index) => (
          <ButtonRadioWrapper key={index}>
            <ButtonRadioInput
              ref={ref}
              {...props}
              type="radio"
              name={name}
              checked={option.defaultChecked}
              value={option.value}
            />
            <Label color="secondary" size="small">
              {option.label}
            </Label>
          </ButtonRadioWrapper>
        ))}
      </InputWrapper>
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
