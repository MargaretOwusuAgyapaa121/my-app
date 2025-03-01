// 
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ErrorBoundary from "./components/Error"; // Import ErrorBoundary
import { BrowserRouter } from "react-router";
import App from "./pages/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
