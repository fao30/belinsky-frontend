import "./index.css";
import { Route, Routes } from "react-router-dom";

// router components
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import OurWork from "./pages/our-work/OurWork";
import ContactUs from "./pages/contact-us/ContactUs";

// OurWork project details PH
import Menantea from "./pages/our-work/project-details/production-house/menantea/Menantea";
import Indihome from "./pages/our-work/project-details/production-house/indihome/Indihome";
import Traveloka from "./pages/our-work/project-details/production-house/traveloka/Traveloka";
import WongTilar from "./pages/our-work/project-details/production-house/wongtilar/WongTilar";

// OurWork project details BS
import Abnon from "./pages/our-work/project-details/belinsky-studio/abnon/Abnon";
import Royce from "./pages/our-work/project-details/belinsky-studio/royce/Royce";
import Graduation from "./pages/our-work/project-details/belinsky-studio/graduation/Graduation";
import Kumaw from "./pages/our-work/project-details/belinsky-studio/kumaw/Kumaw";
import Owen from "./pages/our-work/project-details/belinsky-studio/owen/Owen";
import Couple from "./pages/our-work/project-details/belinsky-studio/couple/Couple";
import JeromeBatik from "./pages/our-work/project-details/belinsky-studio/jeromebatik/JeromeBatik";
import Prince from "./pages/our-work/project-details/belinsky-studio/prince/Prince";
import LinkedIn from "./pages/our-work/project-details/belinsky-studio/linkedin/LinkedIn";

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
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/ourwork/menantea" element={<Menantea />} />
        <Route path="/ourwork/tvindihome" element={<Indihome />} />
        <Route path="/ourwork/traveloka" element={<Traveloka />} />
        <Route path="/ourwork/wongtilar" element={<WongTilar />} />
        <Route path="/ourwork/abnon" element={<Abnon />} />
        <Route path="/ourwork/royce" element={<Royce />} />
        <Route path="/ourwork/owen" element={<Owen />} />
        <Route path="/ourwork/couple" element={<Couple />} />
        <Route path="/ourwork/graduation" element={<Graduation />} />
        <Route path="/ourwork/jeromebatik" element={<JeromeBatik />} />
        <Route path="/ourwork/prince" element={<Prince />} />
        <Route path="/ourwork/linkedin" element={<LinkedIn />} />
        <Route path="/ourwork/kumaw" element={<Kumaw />} />
        <Route path="/termsconditions" element={<TnC />} />
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
