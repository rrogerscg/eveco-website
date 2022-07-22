import Navbar from "./components/Navbar";
import Home from "./pages/Home";
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
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
