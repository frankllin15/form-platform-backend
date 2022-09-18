import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { styled } from "@stitches/react";

const Wrapper = styled("div", {
  display: "grid",
  gridTemplateRows: "60px 1fr 60px",
  minHeight: "100vh",
  width: "100%",
});

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer></Footer>
    </Wrapper>
  );
};
