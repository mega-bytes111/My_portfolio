import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useScroll, motion } from "framer-motion";


function App() {

  const { scrollYProgress } = useScroll();


  return (
    <div className="bg-black text-white min-h-screen">


      {/* 🔥 Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="
          fixed 
          top-0 
          left-0 
          right-0 
          h-1 
          bg-blue-500 
          origin-left 
          z-[60]
        "
      />


      {/* 🌐 Navbar */}
      <Navbar />


      {/* 🚀 Sections */}
      <Hero />

      <About />

      <Skills />

      <Projects />

      <Experience />

      {/* 💻 Coding Profiles */}
      <CodingProfiles />

      <Contact />


      {/* 👣 Footer */}
      <Footer />


    </div>
  );
}

export default App;