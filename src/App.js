import "./App.css";
import { BelinskyStudio } from "./components/BelinskyStudio/BelinskyStudio";
import Navbar from "./components/navbar/Navbar";
import { ProductionHouse } from "./components/ProductionHouse/ProductionHouse";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
