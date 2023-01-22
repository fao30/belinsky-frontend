import "./index.css";
import { Route, Routes } from "react-router-dom";

// router components
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import OurWork from "./pages/our-work/OurWork";
import ContactUs from "./pages/contact-us/ContactUs";

// OurWork project details
import Abnon from "./pages/our-work/project-details/belinsky-studio/abnon/Abnon";
import Menantea from "./pages/our-work/project-details/production-house/menantea/Menantea";

// miscellanous components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import TnC from "./pages/termscondition/TnC";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/ourwork/menantea" element={<Menantea />} />
        <Route path="/ourwork/abnon" element={<Abnon />} />
        <Route path="/termsconditions" element={<TnC />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
