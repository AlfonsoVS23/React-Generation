import { joinPaths } from "@remix-run/router";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, AutoPage } from "./pages";
import OfertaTrucha from "./pages/OfertaTrucha";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Auto" element={<AutoPage />} />
        <Route path="/OfertaTrucha" element={<OfertaTrucha />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
