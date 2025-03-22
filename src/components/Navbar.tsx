
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo px-6 md:px-10 py-4",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a 
          href="#" 
          className="font-serif text-lg md:text-xl text-foreground transition-opacity hover:opacity-80 relative"
        >
          <span className="relative">
            A <span className="text-wedding-accent">&</span> B
            <div className="absolute -top-2 -right-4 w-5 h-5 opacity-70 rose-tiny"></div>
          </span>
        </a>

        <nav className="flex space-x-6 items-center">
          <a 
            href="#details" 
            className="hidden md:block text-foreground/80 hover:text-wedding-accent transition-colors"
          >
            Details
          </a>
          <a 
            href="#schedule" 
            className="hidden md:block text-foreground/80 hover:text-wedding-accent transition-colors"
          >
            Schedule
          </a>
          <a 
            href="#rsvp" 
            className="btn-wedding-outline py-2 px-4 relative group"
          >
            RSVP
            <div className="absolute -top-1 -right-1 w-4 h-4 opacity-0 group-hover:opacity-70 transition-opacity duration-300 rose-tiny"></div>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
