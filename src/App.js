import "./App.css";
import { BelinskyStudio } from "./pages/belinsky-studio/BelinskyStudio";
import Navbar from "./components/navbar/Navbar";
import ProductionHouse from "./pages/production-house/ProductionHouse";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ProductionHouse />
      <BelinskyStudio />
      <Footer />
    </>
  );
}

export default App;
