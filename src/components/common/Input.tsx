import { styled } from "@stitches/react";
import { forwardRef } from "react";

const InputWrapper = styled("div", {
  position: "relative",
  margin: "1rem 0",
});
const InputField = styled("input", {
  all: "unset",
  boxSizing: "border-box",
  minWidth: "200px",
  // height: "1.7rem",
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontWeight: "500",
  fontSize: "0.875rem",
  "&::placeholder": {
    color: "$textSecondary",
  },
  "&:focus": {
    boxShadow: `0 0 0 1px #ccc`,
  },
  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
    },
    invalid: {
      true: {
        border: "1px solid red",
      },
    },
  },
});

const IputLabel = styled("label", {
  position: "absolute",
  top: "-0.575rem",
  left: "8px",
  display: "block",
  fontSize: "0.875rem",
  fontWeight: "500",
  marginBottom: "4px",
  backgroundColor: "$background",

  padding: "0 4px",
  variants: {
    // error: {
    //   true: {
    //     color: "red",
    //     border: "1px solid red",
    //   },
    // },
  },
});

const InputHelper = styled("span", {
  display: "block",
  fontSize: "0.75rem",
  fontWeight: "400",
  marginTop: "4px",
  color: "$textSecondary",
  marginLeft: "8px",
  variants: {
    error: {
      true: {
        color: "red",
      },
    },
  },
});

type InputProps = {
  label: string;
  helper?: string;
  error?: {
    message?: string;
    type?: string;
  };
  placeholder?: string;
  fullWidth?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helper, error, ...props }, ref) => {
    return (
      <InputWrapper>
        <IputLabel>{label}</IputLabel>
        <InputField {...props} ref={ref} invalid={!!error} />

        {error?.message ? (
          <InputHelper error>{error.message}</InputHelper>
        ) : (
          helper && <InputHelper>{helper}</InputHelper>
        )}
      </InputWrapper>
    );
  }
);

Input.displayName = "Input";
