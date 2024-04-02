import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./Menu";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="flex flex-col lg:flex-row m-2">
      <Menu />
    </div>
  </React.StrictMode>
);
