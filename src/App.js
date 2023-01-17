import "./index.css";
import { Route, Routes } from "react-router-dom";

// router components
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import OurWork from "./pages/our-work/OurWork";
import Contact from "./pages/contact-us/Contact";

// OurWork project details
import Abnon from "./pages/our-work/belinsky-studio/abnon/Abnon";

// miscellanous components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/ourwork/menantea" />
        <Route path="/ourwork/abnon" element={<Abnon />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
