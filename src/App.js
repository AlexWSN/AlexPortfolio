import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificate from "./components/Certificate";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      {/* Container background */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Imaginea de background */}
        <img
          src={`${process.env.PUBLIC_URL}/images/background.jpg`}
          alt="background"
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        />

        <div className="pt-20 relative">
          <Hero />
          <About />
          <Projects />
          <Certificate />
          <Experience />
          <Contact />
        </div>
      </div>
    </>
  );
}


export default App;
