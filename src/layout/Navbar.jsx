import React, { useState, useEffect } from "react";
import AvailabilityBadge from "../components/AvailabilityBadge.jsx";
import { Menu, X } from "lucide-react";
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#educations", label: "Educations" },
  { href: "#experience", label: "Experience" },
  { href: "#seminars", label: "Seminars" },
  { href: "#trivia", label: "Trivia" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function handleMobileMenu() {
    setIsMobileOpen((prev) => !prev);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between h-14">
        <a
          href="#"
          className="text-xl font-bold tracking-wide hover:text-primary cursort pointer transition-all duration-150"
        >
          LAS<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-3 py-2 flex items-center gap-1.5">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-5 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <AvailabilityBadge />
        </div>

        <div
          onClick={handleMobileMenu}
          className="md:hidden text-foreground cursor-pointer"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container px-2 py-3 mx-auto flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a
                href={link.href}
                key={idx}
                className="px-5 py-2 text-sm text-muted-foreground hover:text-foreground rounded-sm hover:bg-surface"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
