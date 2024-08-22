import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { App } from "./App";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { InvisibleFriend } from "./pages/invisibleApp/InvisibleFriend.jsx";
import { NumberAsigner } from "./pages/numberAsigner/invisibleApp/NumberAsigner.jsx";
import TicToe from "./pages/TicTacToe/TicToe.jsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<App />} />
        <Route path="/InvisibleFriend" element={<InvisibleFriend />} />
        <Route path="/NumberAsigner" element={<NumberAsigner />} />
        <Route
          path="/GabrielaPortfolio"
          element={
            <Navigate to="https://gabrielacandio.netlify.app/" replace />
          }
        />
        <Route path="/TicTacToe" element={<TicToe />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
