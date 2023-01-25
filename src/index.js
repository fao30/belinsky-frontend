import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { routesData } from "./store/Routes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const Index = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        {routesData?.map((e) => {
          return <Route path={e?.path} element={e?.element} />;
        })}
      </Routes>
      <Footer />
    </HashRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
