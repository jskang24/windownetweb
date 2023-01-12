// import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Contact from "./pages/Contact";
import Opportunities from "./pages/Opportunites";
import OurProduct from "./pages/OurProduct";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/product" element={<OurProduct />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </Router>
  );
}

export default App;
