import { styled } from "@stitches/react";
import {
  useFieldArray,
  UseFieldArrayProps,
  useFormContext,
} from "react-hook-form";
import { Box } from "../common/Box";
import { Button, ButtonIcon } from "../common/Button";
import ButtonRadio, { ButtonRadioInput } from "../common/ButtonRadio";
import { Input } from "../common/Input";
import { typesUnique } from "./FormQuestion";
import { Cross1Icon } from "@radix-ui/react-icons";

type Props = UseFieldArrayProps & {
  onRemoveOption: () => void;
  label: string;
  questionType: string;
};

const OptionsWrapper = styled("div", {
  display: "flex",
  gap: "1rem",
  alignItems: "flex-end",
  padding: ".5rem 0 1rem",
  borderRadius: "4px",
  // border: "1px solid $border",
});

const Label = styled("label", {
  padding: "0 4px",
  top: "-0.575rem",
  left: "8px",
});

export const FormOptions = ({
  name,
  rules,
  onRemoveOption,
  questionType,
}: Props) => {
  const { register, watch } = useFormContext();
  const field = watch(name.replace(/\.\d$/, ""));

  return (
    <Box
      justify="end"
      gap="medium"
      align="center"
      fullWidth
      // css={{
      //   padding: ".5rem 0 1rem",
      //   borderRadius: "4px",
      //   backgroundColor: "red",
      // }}
    >
      {questionType === "text" ? (
        <Input
          disabled
          placeholder="Resposta"
          {...register(`${name}.text` as const)}
          fullWidth
        />
      ) : (
        questionType === "radio" && (
          <Box fullWidth gap="small" align="center">
            <ButtonRadio disabled value={""} label={""} onChange={() => {}} />
            <Input
              placeholder="Resposta"
              {...register(`${name}.text` as const)}
              fullWidth
            />
          </Box>
        )
      )}
      {field.length > 1 && (
        <ButtonIcon
          onClick={onRemoveOption}
          type="button"
          cursor="pointer"
          icon={Cross1Icon}
        />
      )}
    </Box>
  );
};
