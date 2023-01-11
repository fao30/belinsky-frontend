import "./App.css";
import Navbar from "./components/navbar/Navbar";
import OurWork from "./components/navbar/OurWork";
import Home from "./pages/home/Home";
// import OurWork from "./pages/home/OurWork";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <OurWork />
    </>
  );
}

export default App;
