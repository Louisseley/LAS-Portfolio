import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const experience = [
  {
    title: "Special Program for Employment of Students",
    company: "Engineering Office Municipality of Bulakan, Bulacan",
    date: "June 17, 2022 - September 2, 2022",
  },
  {
    title: "Software Engineer Intern",
    company: "IntelliSeven Technology Solutions Inc.",
    date: "June 17, 2022 - September 2, 2022",
  },
  {
    title: "Marketing Associate",
    company: "VIP Express Forwarder",
    date: "July 10, 2025 - October 30, 2025",
  },
];

const Experience = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % experience.length);
  };

  const previous = () => {
    setActiveIdx((prev) => (prev - 1 + experience.length) % experience.length);
  };
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-200 h-200 bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div className="container mx-auto  px-6 relative z-10">
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-2 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Professional Experience
          </h2>
          <span
            className="text-foreground/50
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            Experience that shaped my skills and career path.
          </span>
        </div>

        <div className="max-w-3xl mx-auto">
          <div key={activeIdx} className="relative animation-slide-right">
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in transition-all animation-delay-200">
              <div className="absolute -top-4 px-2 py-1 rounded-md bg-primary flex items-center justify-center bg-primary/50">
                <p className="text-md">{experience[activeIdx].date}</p>
              </div>
              <div className="text-left px-3">
                <h3 className="text-2xl font-semibold mb-2 text-primary">
                  {experience[activeIdx].title}
                </h3>
                <p className="text-muted-foreground">
                  {experience[activeIdx].company}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={previous}
            className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
          >
            <ChevronLeft />
          </button>

          <div className="flex gap-2">
            {experience.map((_, idx) => (
              <button
                onClick={() => setActiveIdx(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === activeIdx
                    ? "w-8 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
