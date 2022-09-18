import { SummaryForm } from "types/Form";
import { styled } from "@stitches/react";
type Props = {
  item: SummaryForm;
};

const Box = styled("div", {
  width: "200px",
  height: "80px",
  padding: "8px",
  borderRadius: "10px",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fafafa",
  color: "#18181b",
  variants: {
    theme: {
      dark: {
        backgroundColor: "#18181b",
        color: "#fafafa",
      },
    },
  },
  h2: {
    fontSize: "1rem",
  },
});

export const FormCard = () => {
  return (
    <Box>
      <h2>FormCard</h2>
      <p>Descrição</p>
    </Box>
  );
};
