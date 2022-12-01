import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { AppLayout } from "../modules/app/components";
import { AppGlobalStyles } from "../modules/shared/styles/styled-components/Elements";
import Theme from "../modules/shared/styles/styled-components/Theme";
import "../modules/shared/styles/globals.scss";
import "antd/dist/antd.less";
import "../../configureAmplify";
import App from "./App";
import { apolloClient } from "../modules/shared/lib/apollo";

const container = document.createElement("div");

document.body.appendChild(container);

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={Theme.light}>
        <AppLayout>
          <AppGlobalStyles>
            <App />
          </AppGlobalStyles>
        </AppLayout>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
