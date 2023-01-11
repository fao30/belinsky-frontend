import "./App.css";
import { BelinskyStudio } from "./components/BelinskyStudio/BelinskyStudio";
import Navbar from "./components/navbar/Navbar";
import { ProductionHouse } from "./components/ProductionHouse/ProductionHouse";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ProductionHouse />
      <BelinskyStudio />
    </>
  );
}

export default App;
