import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { BelinskyStudio } from "./pages/belinsky-studio/BelinskyStudio";
import { ProductionHouse } from "./pages/production-house/ProductionHouse";
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
