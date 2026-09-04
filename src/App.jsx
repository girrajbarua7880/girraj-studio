import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Certificates from "./sections/Certificates/Certificates";
import Education from "./sections/Education/Education";
import Contact from "./sections/Contact/Contact";
import Collaboration from "./sections/Collaboration/Collaboration";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Collaboration />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
