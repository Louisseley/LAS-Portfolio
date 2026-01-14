import React from "react";
import { ArrowUpRight } from "lucide-react";

const certificates = [
  {
    title: "Full-Stack Web Developer Bootcamp – Front & Back-End Mastery",
    author: "Academind by Maximilian Schwarzmüller",
    date: "August 28, 2025",
    image: "/udemy-fullstack.jpg",
  },
  {
    title: "Full-Stack Web Developer Bootcamp – Front & Back-End Mastery",
    author: "Emenwa Global",
    date: "November 30, 2025",
    image: "/Udemy-react.jpg",
  },
  {
    title: "DHCA - DoLynk (Cloud Management System Certified Engineer)",
    author: "Dahua Technology",
    date: "May 21, 2025",
    image: "/Dolynk.jpg",
  },
  {
    title: "DHCA - IPVSS(Video Surveillance System Certified Engineer)",
    author: "Dahua Technology",
    date: "May 21, 2025",
    image: "/Ipvs.jpg",
  },
  {
    title:
      "PLANT VISIT(BEYOND THE CLASSROOM: EXPLORING COMPUTER ENGINEERING INDUSTRIES)",
    author:
      "PLDT and Smart Communications Inc., Dahua Technology Limited, & Clark International Airport",
    date: "March 24-25, 2025",
    image: "/PlantVisits.jpg",
  },
  {
    title:
      "SOFTWARE & APP DEVELOPMENT (From Code to Creation: Mastering Software and App Development)",
    author: "Engr. Robert Justin Chavez",
    date: "February 7, 2025",
    image: "/Software.jpg",
  },
  {
    title:
      "HARDWARE DEVELOPMENT ROAD TO EFFICIENCY: EXPLORING THE NLEX TOLL AND TRAFFIC SYSTEM",
    author: "Engr. Ramon A. Soledad",
    date: "Ferbruary 12, 2025",
    image: "/hardware.jpg",
  },
  {
    title:
      "DATA SCIENCE JOURNEY TO INNOVATION: EXPLORING DATA SCIENCE IN COMPUTER ENGINEERING",
    author: "Engr. Yeoj Vincent N. Mariano",
    date: "March 12, 2025",
    image: "/DataScience.jpg",
  },
  {
    title: "MIRCROELECTRONICS MODELING AND TESTBENCH WRITING IN VERILOG",
    author: "Engr. Christian Carr DG. Tac-an",
    date: "March 5, 2025",
    image: "/MicroElectronics.jpg",
  },
];

const Seminars = () => {
  return (
    <section id="seminars" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-3 animate-fade-in animation-delay-100 text-secondary-foreground">
            Seminars and Certifications
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            The journey behind my skills and knowledge development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {certificates.map((certificate, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {certificate.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-foreground text-md mt-2">
                  {certificate.author}
                </p>
                <p className="text-muted-foreground text-sm">
                  {certificate.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Seminars;
