import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import registerServiceWorker from "./serviceWorkerRegistration";

// Render your React component instead
const root = createRoot(document.getElementById("root"));
root.render(<App />);

registerServiceWorker();
