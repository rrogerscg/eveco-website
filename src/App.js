import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pricing from "./pages/Projects";
import About from "./pages/About";
import Projects from "./pages/Pricing";
import Contact from "./pages/Contact";

function App() {
    let component;
    switch (window.location.pathname){
        case "/":
            component = <Home />
            break
        case "/pricing":
            component = <Pricing />
            break
        case "/about":
            component = <About />
            break
        case "/projects":
            component = <Projects />
            break
        case "/contact":
            component = <Contact />
            break
    }
  return (
    <div className="App">
      <Navbar />
        <div className="container">
            {component}
        </div>
    </div>
  );
}

export default App;
