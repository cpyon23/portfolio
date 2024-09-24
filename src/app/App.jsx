import Navbar from '../components/Navbar'
import Projects from '../components/pages/Projects';
import Contact from '../components/pages/Contact';
import Home from '../components/pages/Home';
import Work from "../components/pages/Work";
import About from '../components/pages/About';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}

export default App
