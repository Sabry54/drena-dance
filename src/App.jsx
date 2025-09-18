import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Instructors from "./components/Instructors";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Histoire from "./pages/Histoire";
import MeninosDoSemba from "./pages/MeninosDoSemba";
import CoursPage from "./pages/Cours";
import AfterWork from "./pages/AfterWork";
import Gallerie from "./pages/Gallerie";
import Agenda from "./pages/Agenda";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Courses />
              <Instructors />
              <Contact />
            </>
          }
        />
        <Route path="/histoire" element={<Histoire />} />
        <Route path="/meninos-do-semba" element={<MeninosDoSemba />} />
        <Route path="/cours" element={<CoursPage />} />
        <Route path="/after-work" element={<AfterWork />} />
        <Route path="/gallerie" element={<Gallerie />} />
        <Route path="/agenda" element={<Agenda />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
