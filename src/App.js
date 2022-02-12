import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";

export default function() {
  return (
    <div className="App">
      <Navbar />
      <Section
        dataAos="fade"
        title="Section 1"
        subtitle={dummyText}
        dark={true}
        id="section1"
      />
      <Section
        dataAos="flip-right"
        title="Section 2"
        subtitle={dummyText}
        dark={false}
        id="section2"
      />

      <Section
        dataAos="slide-up"
        title="Section 3"
        subtitle={dummyText}
        dark={true}
        id="section3"
      />
      <Section
        dataAos="zoom-in-right"
        title="Section 4"
        subtitle={dummyText}
        dark={false}
        id="section4"
      />
      <Section
        dataAos="zoom-out-right"
        title="Section 5"
        subtitle={dummyText}
        dark={true}
        id="section5"
      />
    </div>
  );
}
