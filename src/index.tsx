import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrototypeC } from "./screens/PrototypeC";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <PrototypeC />
  </StrictMode>,
);
