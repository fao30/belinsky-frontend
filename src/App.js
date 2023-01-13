import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { BelinskyStudio } from "./pages/belinsky-studio/BelinskyStudio";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <BelinskyStudio />
      <Footer />
    </>
  );
}

export default App;
