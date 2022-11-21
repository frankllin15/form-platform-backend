import { styled } from "@stitches/react";
import {
  Controller,
  useFieldArray,
  UseFieldArrayProps,
  useFormContext,
} from "react-hook-form";
import { Button, ButtonIcon } from "../common/Button";
import { Input } from "../common/Input";
import { Select } from "../common/Select";
import { Title } from "../common/Title";
import { FormOptions } from "./FormOption";
import { useState } from "react";
import { Box } from "../common/Box";
import { useEffect } from "react";
import { Separator } from "../common/Separator";
import { Switch } from "../common/Switch";
import { TrashIcon } from "@radix-ui/react-icons";
import { AsideController } from "./AsideController";

const types = [
  {
    label: "Texto",
    value: "text",
  },
  {
    label: "Número",
    value: "number",
  },
  {
    label: "Radio",
    value: "radio",
  },
  {
    label: "Data",
    value: "date",
  },
  {
    label: "Opções",
    value: "options",
  },

  {
    label: "Opções múltiplas",
    value: "multipleOptions",
  },

  {
    label: "Escala",
    value: "scale",
  },

  {
    label: "Escala múltipla",
    value: "multipleScale",
  },
];

// tipos de questões que podem ter uma op
export const typesUnique = ["text", "number", "date", "paragraph"];

type Props = UseFieldArrayProps & {
  label: string;
  onRemoveQuestion: () => void;
};

const Wrapper = styled("div", {
  padding: "1rem .5rem",
  margin: "1rem 0",
  borderRadius: "8px",
  // border: "1px solid $border",
  backgroundColor: "$backgroundSecondary",
});

const FieldWrapper = styled("div", {
  display: "flex",
  alignItems: "flex-end",
  gap: "1rem",
  flexWrap: "nowrap",
});

const SwitchLabel = styled("label", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  "& > span": {
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "$textSecondaryD",
  },
});

export const FormQuestion = ({
  name,
  rules,
  label,
  onRemoveQuestion,
}: Props) => {
  const { register, resetField, control, setValue } = useFormContext();
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

  const [selectType, setSelectType] = useState("text");

  const handleSelectType = (value: string) => {
    setSelectType(value);
    setValue(`${name}.questionTypeId`, 1);
    removeOption(Array.from({ length: options.length - 1 }, (_, i) => i + 1)); // remove all options except the first one
  };

  return (
    <Box
      css={{
        backgroundColor: "$backgroundSecondary",
        padding: "1rem",
        borderRadius: "8px",
        margin: "1rem 0",
        position: "relative",
      }}
      gap="medium"
      direction="column"
    >
      <FieldWrapper>
        <Input
          fullWidth
          placeholder="Título da pergunta"
          {...register(`${name}.label` as const)}
        />
        <Select
          value={selectType}
          onChange={handleSelectType}
          options={types}
          placeholder="Tipo"
        />
      </FieldWrapper>
      <Box gap="medium" fullWidth align="start" direction="column">
        {/* <Label>Possiveis respostas </Label> */}
        {options.map((option, index) => (
          <FormOptions
            label={`Resposta ${index + 1}`}
            onRemoveOption={() => removeOption(index)}
            key={option.id}
            name={`${name}.options.${index}`}
            questionType={selectType}
          />
        ))}

        {!typesUnique.includes(selectType) && (
          <Button type="button" onClick={() => appendOption({})}>
            Adionar option
          </Button>
        )}
      </Box>
      <Separator orientation="horizontal" />
      <Box gap="medium" align="center" justify="end">
        <ButtonIcon size={25} icon={TrashIcon} onClick={onRemoveQuestion} />
        <SwitchLabel>
          <span>Obrigatório</span>
          <Controller
            name={`${name}.required`}
            defaultValue={false}
            control={control}
            render={({ field }) => (
              <Switch
                defaultChecked={field.value}
                onCheckedChange={field.onChange}
                {...field}
              />
            )}
          />
          {/* <Switch
            {...register(`${name}.required` as const, {})}
            defaultChecked={false}
          /> */}
        </SwitchLabel>
        {/* <Switch /> */}
      </Box>
    </Box>
  );
};
