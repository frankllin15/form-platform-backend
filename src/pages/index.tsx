import type { NextPage } from "next";

import { styled } from "@stitches/react";
import { useTheme } from "next-themes";
import { FormCard } from "@/components/FormCard";

const Container = styled("div", {
  display: "flex",
  flexDirection: "row",
  padding: "2rem 1.5rem",
});

const FormCardWrapper = styled("div", {
  display: "flex",
  gap: ".5rem",
  alignItems: "center",
  justifyContent: "flex-start",
});

const Home: NextPage = () => {
  return (
    <Container>
      <FormCardWrapper>
        {new Array(3).fill(0).map((_, index) => (
          <FormCard key={index} />
        ))}
      </FormCardWrapper>
    </Container>
  );
};

export default Home;
