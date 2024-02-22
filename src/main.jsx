import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import RequestTracker from "./assets/assets.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <RequestTracker />
  </React.StrictMode>
);
