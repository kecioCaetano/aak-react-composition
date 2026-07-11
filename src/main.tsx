import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import SplitPaneApp from "./SplitPaneApp.tsx";
import Amount from "./Amount.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <SplitPaneApp /> */}
    <Amount />
  </StrictMode>,
);
