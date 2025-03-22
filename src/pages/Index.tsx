
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import RSVPForm from "@/components/RSVPForm";
import FadeIn from "@/components/animations/FadeIn";
import { Calendar, MapPin, Clock, Heart } from "lucide-react";

const Index = () => {
  useEffect(() => {
    document.title = "Anna & Ben Wedding | RSVP";
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20">
        <FadeIn delay={100}>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/3 left-1/4 w-1 h-1 rounded-full bg-wedding-accent/70 animate-pulse-subtle"></div>
            <div className="absolute top-2/3 left-3/4 w-1.5 h-1.5 rounded-full bg-wedding-accent/50 animate-pulse-subtle" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/4 left-3/5 w-1 h-1 rounded-full bg-wedding-accent/40 animate-pulse-subtle" style={{ animationDelay: "1.5s" }}></div>
            <div className="absolute top-3/4 left-1/5 w-1 h-1 rounded-full bg-wedding-accent/60 animate-pulse-subtle" style={{ animationDelay: "0.7s" }}></div>
          </div>
        </FadeIn>
        
        <FadeIn>
          <p className="text-sm uppercase tracking-widest mb-4 text-foreground/70">Save the date</p>
        </FadeIn>
        
        <FadeIn delay={200}>
          <h1 className="heading-xl mb-4">
            Anna <span className="subtle-accent">&</span> Ben
          </h1>
        </FadeIn>
        
        <FadeIn delay={300}>
          <p className="text-xl font-light text-foreground/80 max-w-md mx-auto mb-8">
            Request the pleasure of your company as they celebrate their marriage
          </p>
        </FadeIn>
        
        <FadeIn delay={400}>
          <div className="glass-panel py-4 px-8 rounded-lg mb-8">
            <time className="font-serif text-2xl">June 15, 2024</time>
          </div>
        </FadeIn>
        
        <FadeIn delay={500}>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <a href="#details" className="btn-wedding-outline">
              View Details
            </a>
            <a href="#rsvp" className="btn-wedding">
              RSVP Now
            </a>
          </div>
        </FadeIn>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <FadeIn delay={700}>
            <div className="animate-bounce">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Details Section */}
      <section id="details" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-2 text-foreground/70">Wedding</p>
              <h2 className="heading-lg">Event Details</h2>
              <div className="divider"></div>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={100} direction="up">
              <div className="glass-panel rounded-2xl p-8 text-center hover:shadow-md transition-shadow duration-500">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-wedding-primary/30">
                  <Calendar className="h-8 w-8 text-foreground/70" />
                </div>
                <h3 className="heading-md mb-4">The Date</h3>
                <p className="text-foreground/70 mb-2">Saturday</p>
                <p className="text-xl font-medium">June 15, 2024</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={200} direction="up">
              <div className="glass-panel rounded-2xl p-8 text-center hover:shadow-md transition-shadow duration-500">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-wedding-secondary/30">
                  <MapPin className="h-8 w-8 text-foreground/70" />
                </div>
                <h3 className="heading-md mb-4">The Venue</h3>
                <p className="text-foreground/70 mb-2">Celebration at</p>
                <p className="text-xl font-medium">Rosewood Gardens</p>
                <p className="text-foreground/70 mt-2 text-sm">
                  123 Blossom Lane<br />
                  San Francisco, CA
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={300} direction="up">
              <div className="glass-panel rounded-2xl p-8 text-center hover:shadow-md transition-shadow duration-500">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-wedding-accent/20">
                  <Clock className="h-8 w-8 text-foreground/70" />
                </div>
                <h3 className="heading-md mb-4">Schedule</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-foreground/70">Ceremony</p>
                    <p className="font-medium">3:00 PM</p>
                  </div>
                  <div>
                    <p className="text-foreground/70">Reception</p>
                    <p className="font-medium">5:30 PM</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Schedule Section */}
      <section id="schedule" className="py-24 px-6 bg-wedding-primary/10">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-2 text-foreground/70">Timeline</p>
              <h2 className="heading-lg">Wedding Day Schedule</h2>
              <div className="divider"></div>
            </div>
          </FadeIn>
          
          <div className="relative">
            <div className="absolute left-1/2 -ml-px h-full w-0.5 bg-wedding-accent/20"></div>
            
            <div className="space-y-16">
              <FadeIn delay={100} direction="left">
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex-grow text-right mr-8 md:mr-12 pr-4">
                      <h3 className="font-serif text-xl">Guest Arrival</h3>
                      <p className="text-foreground/60 mt-1">Please arrive 30 minutes before the ceremony</p>
                    </div>
                    <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-wedding-primary border-4 border-background">
                      <span className="font-mono text-sm">1</span>
                    </div>
                    <div className="flex-grow ml-8 md:ml-12 pl-4">
                      <time className="font-mono text-xl">2:30 PM</time>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={200} direction="right">
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex-grow text-right mr-8 md:mr-12 pr-4">
                      <h3 className="font-serif text-xl">Ceremony</h3>
                      <p className="text-foreground/60 mt-1">Exchange of vows in the garden</p>
                    </div>
                    <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-wedding-secondary border-4 border-background">
                      <span className="font-mono text-sm">2</span>
                    </div>
                    <div className="flex-grow ml-8 md:ml-12 pl-4">
                      <time className="font-mono text-xl">3:00 PM</time>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={300} direction="left">
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex-grow text-right mr-8 md:mr-12 pr-4">
                      <h3 className="font-serif text-xl">Cocktail Hour</h3>
                      <p className="text-foreground/60 mt-1">Enjoy drinks and hors d'oeuvres</p>
                    </div>
                    <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-wedding-accent border-4 border-background">
                      <span className="font-mono text-sm">3</span>
                    </div>
                    <div className="flex-grow ml-8 md:ml-12 pl-4">
                      <time className="font-mono text-xl">4:00 PM</time>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={400} direction="right">
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex-grow text-right mr-8 md:mr-12 pr-4">
                      <h3 className="font-serif text-xl">Reception & Dinner</h3>
                      <p className="text-foreground/60 mt-1">Celebration with food, speeches, and dancing</p>
                    </div>
                    <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-wedding-primary border-4 border-background">
                      <span className="font-mono text-sm">4</span>
                    </div>
                    <div className="flex-grow ml-8 md:ml-12 pl-4">
                      <time className="font-mono text-xl">5:30 PM</time>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={500} direction="left">
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex-grow text-right mr-8 md:mr-12 pr-4">
                      <h3 className="font-serif text-xl">Cake Cutting</h3>
                      <p className="text-foreground/60 mt-1">Sharing of the wedding cake</p>
                    </div>
                    <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-wedding-secondary border-4 border-background">
                      <span className="font-mono text-sm">5</span>
                    </div>
                    <div className="flex-grow ml-8 md:ml-12 pl-4">
                      <time className="font-mono text-xl">8:00 PM</time>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={600} direction="right">
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex-grow text-right mr-8 md:mr-12 pr-4">
                      <h3 className="font-serif text-xl">Farewell</h3>
                      <p className="text-foreground/60 mt-1">End of the celebration</p>
                    </div>
                    <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-wedding-accent border-4 border-background">
                      <span className="font-mono text-sm">6</span>
                    </div>
                    <div className="flex-grow ml-8 md:ml-12 pl-4">
                      <time className="font-mono text-xl">11:00 PM</time>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      
      {/* RSVP Section */}
      <section id="rsvp" className="py-24 px-6">
        <div className="container mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-2 text-foreground/70">Please Respond</p>
              <h2 className="heading-lg">RSVP</h2>
              <div className="divider"></div>
              <p className="text-foreground/70 max-w-xl mx-auto">
                We would be honored to have you join us on our special day. 
                Please let us know if you can attend by May 15, 2024.
              </p>
            </div>
          </FadeIn>
          
          <div className="max-w-3xl mx-auto">
            <div className="glass-panel rounded-2xl p-8 md:p-12">
              <RSVPForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 text-center text-foreground/60">
        <FadeIn>
          <div className="container mx-auto">
            <div className="flex justify-center items-center mb-6">
              <Heart className="h-5 w-5 text-wedding-accent mr-2" />
              <h3 className="font-serif text-xl">Anna & Ben</h3>
            </div>
            <p className="max-w-md mx-auto mb-8">
              Thank you for being part of our love story. We can't wait to celebrate with you!
            </p>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} · Wedding of Anna & Ben · All rights reserved
            </p>
          </div>
        </FadeIn>
      </footer>
    </div>
  );
};

export default Index;
