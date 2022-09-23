import { ThemeProvider as Provider } from "next-themes";
import { darkTheme } from "@/../stitches.config";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider
      attribute="class"
      defaultTheme="system"
      value={{
        light: "light",
        dark: darkTheme.className,
      }}
    >
      {children}
    </Provider>
  );
};
