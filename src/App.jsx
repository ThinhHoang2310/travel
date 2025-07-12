import React, { useRef } from "react";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const homeRef = useRef(null);
  const mainRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar
        onHomeClick={() => scrollToSection(homeRef)}
        onMainClick={() => scrollToSection(mainRef)}
      />

      <section ref={homeRef}>
        <Home />
      </section>
      <section ref={mainRef}>
        <Main />
      </section>
      <Footer />
    </>
  );
};

export default App;
