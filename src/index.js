import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./components/App/App";
import { ScreenSizeProvider } from "./contexts/ScreenSizeContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ScreenSizeProvider>
      <App />
    </ScreenSizeProvider>
  </React.StrictMode>
);