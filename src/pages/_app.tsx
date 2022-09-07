import "../styles/globals.css";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import { ComposeProviders } from "../components/common/ComposeProvider";
import { AntdProvider } from "../context/AntdProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ComposeProviders with={[AntdProvider]}>
      <Component {...pageProps} />
    </ComposeProviders>
  );
}

export default MyApp;
