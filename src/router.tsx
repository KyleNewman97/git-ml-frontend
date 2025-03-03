import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "./tailwind.css";
import { RepoPage } from "./pages/repo/RepoPage";
import { CommitsPage } from "./pages/commits/CommitsPage";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="repo/:repoName">
                    <Route index element={<RepoPage />} />
                    <Route path="commits" element={<CommitsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
