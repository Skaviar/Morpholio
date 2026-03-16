import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="h-full scrollbar-hide overflow-y-scroll m-0">
      <App />
    </div>
  </React.StrictMode>
);
