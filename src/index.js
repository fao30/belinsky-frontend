import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { routesData } from "./store/Routes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Navbar />
      <Routes>
        {routesData?.map((e) => {
          return <Route path={e?.path} element={e?.element} />;
        })}
      </Routes>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);
