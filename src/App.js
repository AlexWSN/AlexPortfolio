import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificate from "./components/Certificate";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


function App() {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
  };

  return (
    <>
      <Navbar />
      <div style={backgroundStyle}>
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
