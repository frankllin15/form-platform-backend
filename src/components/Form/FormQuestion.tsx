import { styled } from "@stitches/react";
import {
  useFieldArray,
  UseFieldArrayProps,
  useFormContext,
} from "react-hook-form";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { FormOptions } from "./FormOption";

type Props = UseFieldArrayProps & {
  label: string;
  onRemoveQuestion: () => void;
};

const Wrapper = styled("div", {
  position: "relative",
  padding: "1rem .5rem",
  margin: "1rem 0",
  borderRadius: "4px",
  border: "1px solid $border",
});

const Label = styled("label", {
  position: "absolute",
  backgroundColor: "$background",
  padding: "0 4px",
  top: "-0.575rem",
  left: "8px",
});

export const FormQuestion = ({
  name,
  rules,
  label,
  onRemoveQuestion,
}: Props) => {
  const { register } = useFormContext();
  const {
    fields: options,
    append: appendOption,
    prepend,
    remove: removeOption,
    swap,
    move,
    insert,
  } = useFieldArray({
    name: `${name}.options`,
    rules,
  });

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        fullWidth
        label="Título da pergunta"
        {...register(`${name}.title` as const)}
      />
      {/* <FormOptions
            name={`${name}.${index}.options`}
            questionIndex={index}
          /> */}

      <Wrapper>
        <Label>Possiveis respostas </Label>
        {options.map((option, index) => (
          <FormOptions
            label={`Resposta ${index + 1}`}
            onRemoveOption={removeOption}
            key={option.id}
            name={`${name}.options.${index}`}
          />
        ))}
        <Button type="button" onClick={() => appendOption({})}>
          Adionar option
        </Button>
      </Wrapper>
      <Button onClick={onRemoveQuestion} color="danger">
        Excluir
      </Button>
    </Wrapper>
  );
};
