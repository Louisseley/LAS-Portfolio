import React from "react";
import Navbar from "./layout/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Educations from "./sections/Educations.jsx";
import Experience from "./sections/Experience.jsx";
import Seminars from "./sections/Seminars.jsx";
import Trivia from "./sections/Trivia.jsx";
import Contact from "./sections/Contact.jsx";
function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Educations />
        <Experience />
        <Seminars />
        <Trivia />
        <Contact />
      </main>
    </div>
  );
}

export default App;
