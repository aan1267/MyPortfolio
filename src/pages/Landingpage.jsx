import React from "react";
import About from "../components/About"
import Projects from "../components/Projects";
import Contact from "../components/Contact"
import Skills from "../components/Skills";
import Hero from "../components/Hero";
import ScrollTop from "../components/ScrollTop";

function Landingpage() {
  return (
    <div className="max-w-[1200px] min-h-screen px-6 mx-auto overflow-hidden">
      <Hero/>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Landingpage;
