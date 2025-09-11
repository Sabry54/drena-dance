import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Instructors from "./components/Instructors";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Courses />
      <Instructors />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
