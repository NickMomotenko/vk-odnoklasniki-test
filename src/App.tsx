import { Navigate, Route, Routes } from "react-router-dom";

import { ButtonPage } from "./pages/ButtonPage";
import { CounterPage } from "./pages/CounterPage";

import { Navigation } from "./components/Navigation";

export const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<CounterPage />} />
        <Route path="/buttons" element={<ButtonPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
