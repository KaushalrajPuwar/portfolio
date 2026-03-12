import { CONFIG } from './config';
import GalaxyBackground from './components/GalaxyBackground';
import DotNav from './components/DotNav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* WebGL star field — fixed behind all content */}
      <GalaxyBackground />
      <DotNav />
      <div className="relative z-[2]">
        <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      {CONFIG.SHOW_PUBLICATIONS && <Publications />}
      <Contact />
      <Footer />
      </div>
    </div>
  );
}

export default App;
