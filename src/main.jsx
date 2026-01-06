import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import One from "./ExerciseOne.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <One />
  </StrictMode>
);
