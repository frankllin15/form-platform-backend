import { styled } from "@stitches/react";
import {
  useFieldArray,
  UseFieldArrayProps,
  useFormContext,
} from "react-hook-form";
import { Button } from "../common/Button";
import { Input } from "../common/Input";

type Props = UseFieldArrayProps & {
  onRemoveOption: () => void;
  label: string;
};

const OptionsWrapper = styled("div", {
  position: "relative",
  padding: "1rem .5rem",
  borderRadius: "4px",
  border: "1px solid $border",
  margin: "1rem 0",
});

const Label = styled("label", {
  position: "absolute",
  backgroundColor: "$background",
  padding: "0 4px",
  top: "-0.575rem",
  left: "8px",
});

export const FormOptions = ({ name, rules, onRemoveOption, label }: Props) => {
  const { register } = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      name,
      rules,
    }
  );

  console.log("fields", fields);
  console.log("name", name);

  return (
    <OptionsWrapper>
      <Label>{label}</Label>
      <Input
        placeholder="Resposta"
        label="Título da opção"
        {...register(`${name}.text` as const)}
        fullWidth
      />
      <Button color="danger" onClick={onRemoveOption}>
        Excluir option
      </Button>
    </OptionsWrapper>
  );
};
