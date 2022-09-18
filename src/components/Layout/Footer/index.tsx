import { styled } from "@stitches/react";

const FooterWrapper = styled("footer", {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "60px",
});

export const Footer = () => {
  return (
    <FooterWrapper>
      <h1>Footer</h1>
    </FooterWrapper>
  );
};
