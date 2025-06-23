import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
    </>
  );
};

export default Home;
