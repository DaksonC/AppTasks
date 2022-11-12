import { Routes, Route } from "react-router-dom";

import { LandingPage } from "./LandingPage";
import { LoginPage } from "./LoginPage";
import { NotFound } from "./NotFound";
import { RegisterPage } from "./RegisterPage";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
