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
import { useMutation } from "react-query";
import { createFormMutation } from "@/lib/mutations/form.mutation";

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
      name: "",
      description: "",
      questions: [
        {
          title: "",
          questionTypeId: 1,
          text: "",
          options: [
            {
              text: "Op1",
            },
          ],
        },
      ],
    },
  });

  const { mutate: createForm } = useMutation(createFormMutation, {
    onSuccess: (data) => {
      console.log("success", data);
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

  const handleSubmit = methods.handleSubmit((data) => {
    console.log(data);
    createForm({ authorId: "clafss4t600036csg32wozpi7", ...data });
  });

  return (
    <Container>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit}>
          {stage === "FORM_INFO" ? (
            <>
              <Title as="h2">Informações do formulário</Title>
              <Controller
                name="name"
                control={methods.control}
                rules={{ required: "Campo obriatorio" }}
                render={({ field, formState: { errors } }) => (
                  <Input
                    {...field}
                    placeholder="Título do formulário"
                    error={errors.name}
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

          <Button
            onClick={() =>
              append({
                title: "",
                text: "",
                options: [],
                questionTypeId: 1,
              })
            }
            type="button"
          >
            Adicionar
          </Button>
          <Button type="submit">Enviar</Button>
        </Form>
      </FormProvider>
    </Container>
  );
};
export default NewformPage;
