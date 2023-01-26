import Home from "../pages/home/Home";
import About from "../pages/about/About";
import OurWork from "../pages/our-work/OurWork";
import ContactUs from "../pages/contact-us/ContactUs";

// OurWork project details PH
import Menantea from "../pages/our-work/project-details/production-house/menantea/Menantea";
import Indihome from "../pages/our-work/project-details/production-house/indihome/Indihome";
import Traveloka from "../pages/our-work/project-details/production-house/traveloka/Traveloka";
import WongTilar from "../pages/our-work/project-details/production-house/wongtilar/WongTilar";

// OurWork project details BS
import Abnon from "../pages/our-work/project-details/belinsky-studio/abnon/Abnon";
import Royce from "../pages/our-work/project-details/belinsky-studio/royce/Royce";
import Graduation from "../pages/our-work/project-details/belinsky-studio/graduation/Graduation";
import Kumaw from "../pages/our-work/project-details/belinsky-studio/kumaw/Kumaw";
import Owen from "../pages/our-work/project-details/belinsky-studio/owen/Owen";
import Couple from "../pages/our-work/project-details/belinsky-studio/couple/Couple";
import JeromeBatik from "../pages/our-work/project-details/belinsky-studio/jeromebatik/JeromeBatik";
import Prince from "../pages/our-work/project-details/belinsky-studio/prince/Prince";
import LinkedIn from "../pages/our-work/project-details/belinsky-studio/linkedin/LinkedIn";

// miscellanous components
import TnC from "../pages/termscondition/TnC";

// Studio
import Studio1 from "../pages/studio/studio-1/Studio1";
import Studio2 from "../pages/studio/studio-2/Studio2";
import PodcastStudio from "../pages/studio/studio-podcast/PodcastStudio";

export const routesData = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/ourwork",
    element: <OurWork />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },

  //additional
  {
    path: "/termsconditions",
    element: <TnC />,
  },

  // studios
  {
    path: "/studio-1",
    element: <Studio1 />,
  },
  {
    path: "/studio-2",
    element: <Studio2 />,
  },
  {
    path: "/studio-podcast",
    element: <PodcastStudio />,
  },

  // production house
  {
    path: "/ourwork/menantea",
    element: <Menantea />,
  },
  {
    path: "/ourwork/tvindihome",
    element: <Indihome />,
  },
  {
    path: "/ourwork/traveloka",
    element: <Traveloka />,
  },
  {
    path: "/ourwork/wongtilar",
    element: <WongTilar />,
  },

  // belinsky studio
  {
    path: "/ourwork/abnon",
    element: <Abnon />,
  },
  {
    path: "/ourwork/royce",
    element: <Royce />,
  },
  {
    path: "/ourwork/owen",
    element: <Owen />,
  },
  {
    path: "/ourwork/couple",
    element: <Couple />,
  },
  {
    path: "/ourwork/graduation",
    element: <Graduation />,
  },
  {
    path: "/ourwork/jeromebatik",
    element: <JeromeBatik />,
  },
  {
    path: "/ourwork/prince",
    element: <Prince />,
  },
  {
    path: "/ourwork/linkedin",
    element: <LinkedIn />,
  },
  {
    path: "/ourwork/kumaw",
    element: <Kumaw />,
  },
];
