import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ComposeProviders } from "@/providers/ComposeProvider";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { Layout } from "components/Layout";
import { ThemeProvider } from "@/providers/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ComposeProviders with={[ReactQueryProvider, ThemeProvider]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ComposeProviders>
  );
}

export default MyApp;
