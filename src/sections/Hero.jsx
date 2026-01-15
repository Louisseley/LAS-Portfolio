import React from "react";
import { useMemo } from "react";
import { Button1 } from "../components/Button1";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Facebook,
  PhoneCall,
  ChevronDown,
} from "lucide-react";
import { AnimatedButton } from "../components/AnimatedButton.jsx";

const SocialMedia = [
  { icon: Github, href: "https://github.com/Louisseley" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/louisse-angelo-sapaula-06410128a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61574563096281#",
  },
  {
    icon: PhoneCall,
    href: "Wa.me/+639561393132",
  },
];

const skills = [
  "React",
  "Tailwind CSS",
  "Axios",
  "JavaScript",
  "Git",
  "GitHub Actions",
  "Project Management",
  "Teamwork",
  "Time Management",
  "Critical Thinking",
  "Adaptability",
  "Problem Solving",
  "Project Management",
  "Leadership",
  "Software and Hardware Fundamentals",
  "Microsoft Word",
  "Microsoft PowerPoint",
  "Microsoft Excel",
  "Visual Studio Code",
  "Arduino IDE",
];

const Hero = () => {
  const dots = useMemo(
    () =>
      Array.from({ length: 30 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 5,
      })),
    []
  );
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      id="about"
    >
      <div className="absolute inset-0">
        <img
          src="/bg-hero.jpg"
          alt="Hero Cover"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto pl-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 ietms-center">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
              Louisse Angelo{" "}
              <span className="text-primary glow-text">Sapaula</span>
            </h1>
            <div className="animate-fade-in animation-delay-200">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Computer Engineer
              </span>
            </div>
            <p className="text-lg  pr-3 text-muted-foreground max-w-lg animate-fade-in animation-delay-200 tracking-wide">
              A motivated Computer Engineer graduate with a foundation with
              hardware and software development. I'm ready to use my technical
              skills to help the company grow and contribute to the industry.
              I'm ready to discover and explore new technology, face challenges
              and continuously enhancing my skills for the better future of the
              company and personal professional growth.
            </p>

            <div className="flex flex-wrap gap-5 animate-fade-in animation-delay-300">
              <Button1 href="#contact" size="xl">
                Contact me <ArrowRight className="w-5 h-5" />
              </Button1>

              <AnimatedButton link="https://drive.google.com/drive/folders/1UbaLThVd61ztN0GpcDjmZH22esICQDrM?usp=drive_link">
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400 mx-auto mt-10 ">
              {SocialMedia.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300 mt-5 md:mt-0">
            <div lassName="relative max-w-md mx-auto">
              <div
                className="absolute inset-0
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl px-0 md:p-2 glow-border mx-2 md:mx-auto w-87.5 md:w-full">
                <img
                  src="/LA-pic.png"
                  alt="LA Profile"
                  className="w-[80%] md:w-[90%] h-[80%] aspect-4/5 object-cover rounded-2xl"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-4 right-5 md:-right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-xl text-primary">Fresh Graduate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-md text-muted-foreground mb-3 text-center">
            Skills I learned:
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 mt-6 ml-3
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
