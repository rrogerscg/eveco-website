import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="container">
            <Routes>
                <Route path="/eveco-website" element={<Home />} />
                <Route path="/eveco-website/services" element={<Services />} />
                <Route path="/eveco-website/projects" element={<Projects />} />
                <Route path="/eveco-website/about" element={<About />} />
                <Route path="/eveco-website/contact" element={<Contact />} />
                <Route path="/eveco-website/pricing" element={<Pricing />} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
