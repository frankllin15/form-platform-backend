import { ConfigProvider } from "antd";
import ptBR from "antd/es/locale/pt_BR";

export const AntdProvider = ({ children }: { children: React.ReactNode }) => {
  return <ConfigProvider locale={ptBR}>{children}</ConfigProvider>;
};
