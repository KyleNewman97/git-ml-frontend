import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./tailwind.css";
import { RepoHome } from "./pages/repo/RepoHome";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RepoHome />
    </StrictMode>
);
