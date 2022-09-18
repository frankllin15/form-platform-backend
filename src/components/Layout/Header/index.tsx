import { Button } from "@/components/common/Button";
import { Switch } from "@/components/common/Switch";
import { styled } from "@stitches/react";
import { useTheme } from "next-themes";
import Link from "next/link";

const HeaderWrapper = styled("header", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "60px",
  padding: "0 1.5rem",
});

const ButtonWrapper = styled("div", {
  display: "flex",
  gap: "1rem",
  alignItems: "center",
});

export const Header = () => {
  const { theme, setTheme } = useTheme();
  function toggleTheme(checked: boolean) {
    console.log("value", checked);
    setTheme(checked ? "dark" : "light");
  }

  return (
    <HeaderWrapper>
      <h1>Form platform</h1>
      <nav></nav>
      <ButtonWrapper>
        <Link href="/form/new">
          <Button color="success">Novo Form</Button>
        </Link>
        <Switch
          aria-label="Dark mode"
          value={theme}
          onCheckedChange={toggleTheme}
        />
      </ButtonWrapper>
    </HeaderWrapper>
  );
};
