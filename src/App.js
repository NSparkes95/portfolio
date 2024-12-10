import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ClickerGame from "./components/ClickGame";
import "./styles/Global.css";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <ClickerGame />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;