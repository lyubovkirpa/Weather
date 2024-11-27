import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import HistoryPage from "./pages/historyPage/HistoryPage";
import WeatherProvider from "./context/WeatherContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WeatherProvider>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </HashRouter>
    </WeatherProvider>
  </StrictMode>
);
