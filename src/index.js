import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// react-router-dom
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
