import { Routes, Route } from "react-router-dom";

import { Dashboard } from "./Dashboard";
import { LandingPage } from "./LandingPage";
import { LoginPage } from "./LoginPage";
import { NotFound } from "./NotFound";
import { Profile } from "./Profile";
import { RegisterPage } from "./RegisterPage";
import { Tasks } from "./Tasks";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}