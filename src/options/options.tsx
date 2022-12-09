import React from "react";
import { createRoot } from "react-dom/client";
import "../styles/styles.scss";
import App from "./App";

const container = document.createElement("div");

document.body.appendChild(container);

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
