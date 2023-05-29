import React from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Main from "../components/Min";
import Contact from "../components/Contact";
import TripFlow from "../components/TripFlow";

export default function Home() {
  return (
    <>
      <Navbar />
      <Section />
      <Main />
      <About />
      <TripFlow/>
      <Contact/>
    </>
  );
}
