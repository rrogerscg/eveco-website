import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import {Routes, Route} from "react-router-dom";
import InfoPanel from "./components/InfoPanel/InfoPanel";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="body-container">
            <Routes>
                <Route path="/eveco-website" element={<Home />} />
                <Route path="/eveco-website/services" element={<Services />} />
                <Route path="/eveco-website/projects" element={<Projects />} />
                <Route path="/eveco-website/team" element={<Team />} />
                <Route path="/eveco-website/pricing" element={<Pricing />} />
                <Route path="/eveco-website/contact" element={<Contact />} />
            </Routes>
        </div>
        <div className="content-container">
            <InfoPanel component={<Footer />}/>
        </div>
    </div>
  );
}

export default App;
