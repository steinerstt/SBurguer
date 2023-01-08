import { Route, Routes } from "react-router";
import { HomePage } from "../pages/home";
import { ProtectRouter } from "./ProtectedRouter";
import { DashboardPage } from "../pages/dashboard";
import { SearchPage } from "../pages/search";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<ProtectRouter />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/search/:textSearch" element={<SearchPage />} />
      </Route>
    </Routes>
  );
};
