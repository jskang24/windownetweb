import Navbar from "./components/NavBar";
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
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/mission" component={Mission} />
        <Route path="/contact" component={Contact} />
        <Route path="/opportunities" component={Opportunities} />
        <Route path="/product" component={OurProduct} />
        <Route path="/testimonials" component={Testimonials} />
      </Routes>
    </Router>
  );
}

export default App;
