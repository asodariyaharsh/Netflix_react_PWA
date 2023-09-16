import React from "react";
import Home from "./pages/home";
import "./styles/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopPicks from "./pages/top-picks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-picks" element={<TopPicks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
