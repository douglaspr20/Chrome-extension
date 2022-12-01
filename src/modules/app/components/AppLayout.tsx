import { Layout } from "antd";
const { Content, Footer } = Layout;

export const AppLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh", width: "100%", padding: "20px" }}>
      <Layout className="site-layout main-wrapper">
        <Content>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          {"Copyright © "}
          <a color="red" href="https://chameleon.co" target="_blank">
            Chameleon Collective Inc
          </a>{" "}
          {new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};
