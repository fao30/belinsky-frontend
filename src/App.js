
import "./index.css";
import { Route, Routes } from "react-router-dom";

// router components
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import OurWork from "./pages/our-work/OurWork";
import Contact from "./pages/contact-us/Contact";

// OurWork project details
import Abnon from "./pages/our-work/project-details/abnon/Abnon";
import Menantea from "./pages/our-work/project-details/menantea/Menantea";

// miscellanous components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <Navbar />
{/* <<<<<<< HEAD */}
      // <Home />
      // <OurWork />
=======
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/ourwork/menantea" element={<Menantea />} />
        <Route path="/ourwork/abnon" element={<Abnon />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
{/* >>>>>>> 641a2303b40dd70f6ef2364250e57ae7bc71b767 */}
    </>
  );
}

export default App;
