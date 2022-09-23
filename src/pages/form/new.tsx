import { Button } from "@/components/common/Button";
import ButtonRadio from "@/components/common/ButtonRadio";
import { Input } from "@/components/common/Input";
import { Select } from "@/components/common/Select";
import { Title } from "@/components/common/Title";
import { FormQuestion } from "@/components/Form/FormQuestion";
import { styled } from "@/../stitches.config";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { NextPage } from "next";
import { useState } from "react";
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { AsideController } from "@/components/Form/AsideController";

const Container = styled("div", {
  padding: "2rem 1.5rem",
  felx: "1",
  minHeight: "100vh",
  width: "100%",

  "@md": {
    maxWidth: "700px",
  },
});
const Form = styled("form", {});

const NewformPage: NextPage = () => {
  const [stage, setStage] = useState("FORM_INFO");
  const methods = useForm({
    defaultValues: {
      title: "",
      description: "",
      questions: [
        {
          title: "",
          text: "",
          options: [
            {
              text: "Op1",
              answer: false,
            },
          ],
        },
        {
          title: "Ques",
          text: "",
          options: [
            {
              text: "",
              answer: false,
            },
          ],
        },
      ],
    },
  });

  const {
    fields: questions,
    append,
    prepend,
    remove,
    swap,
    move,
    insert,
  } = useFieldArray({
    control: methods.control,
    name: "questions",
  });

  return (
    <Container>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit((e) => console.log("Submit", e))}>
          {stage === "FORM_INFO" ? (
            <>
              <Title as="h2">Informações do formulário</Title>
              <Controller
                name="title"
                control={methods.control}
                rules={{ required: "Campo obriatorio" }}
                render={({ field, formState: { errors } }) => (
                  <Input
                    {...field}
                    placeholder="Título do formulário"
                    error={errors.title}
                    helper="Título do formulário"
                    label="Título"
                    fullWidth
                  />
                )}
              />
              <Controller
                name="description"
                control={methods.control}
                rules={{ required: "Campo obriatorio" }}
                render={({ field, formState: { errors } }) => (
                  <Input
                    {...field}
                    placeholder="Descrição do formulário"
                    error={errors.description}
                    helper="Descrição do formulário"
                    label="Descrição"
                    fullWidth
                  />
                )}
              />
              <Button
                type="button"
                onClick={() => setStage("FORM_QUESTIONS")}
                fullWidth
              >
                Próximo
              </Button>
            </>
          ) : (
            stage === "FORM_QUESTIONS" && (
              <>
                <AsideController />
                <Button
                  type="button"
                  onClick={() => setStage("FORM_INFO")}
                  fullWidth
                >
                  Voltar
                </Button>
                <Title
                  size="large"
                  weight="normal"
                  css={{ marginTop: "2rem" }}
                  as="h2"
                >
                  Perguntas
                </Title>

                {questions.map((question, index) => (
                  <FormQuestion
                    label={`Pergunta ${index + 1}`}
                    key={question.id}
                    name={`questions.${index}`}
                    onRemoveQuestion={() => remove(index)}
                  />
                ))}
              </>
            )
          )}

          {/* <FormQuestion label="Questões" name="questions" /> */}

          {/* <Button
            onClick={() =>
              append({
                title: "",
                text: "",
                options: [],
              })
            }
            type="button"
          >
            Adicionar
          </Button> */}
        </Form>
      </FormProvider>
    </Container>
  );
};
export default NewformPage;
