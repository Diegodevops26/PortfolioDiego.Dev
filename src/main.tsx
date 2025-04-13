import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Elemento com id 'root' não foi encontrado no HTML.");
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
