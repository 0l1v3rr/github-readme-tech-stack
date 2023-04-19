import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MultistepProvider } from "./context/MultistepContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MultistepProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MultistepProvider>
);
