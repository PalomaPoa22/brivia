import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home/Home";
import Lista from "./pages/Lista/Lista";
import Editar from "./pages/Editar/Editar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Adicionar from "./pages/Adicionar/Adicionar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lista" element={<Lista />} />
      <Route path="/editar/:id" element={<Editar />} />
      <Route path="/adicionar/" element={<Adicionar />} />
    </Routes>
  
  </BrowserRouter>
);
