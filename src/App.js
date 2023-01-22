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

// Studio
import Studio1 from "./pages/studio/studio-1/Studio1";
import Studio2 from "./pages/studio/studio-2/Studio2";
import PodcastStudio from "./pages/studio/studio-podcast/PodcastStudio";

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
        <Route path="/studio-1" element={<Studio1 />} />
        <Route path="/studio-2" element={<Studio2 />} />
        <Route path="/studio-podcast" element={<PodcastStudio />} />
        <Route path="/termsconditions" element={<TnC />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
