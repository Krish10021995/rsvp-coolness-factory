
import React, { useState } from 'react';
import { Calendar, Heart, CheckCircle2, User, Users, Music, X } from "lucide-react";
import FadeIn from './animations/FadeIn';
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  attending: boolean | null;
  guests: number;
  dietaryRestrictions: string;
  songRequest: string;
}

const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    attending: null,
    guests: 0,
    dietaryRestrictions: '',
    songRequest: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAttendingChange = (attending: boolean) => {
    setFormData((prev) => ({ ...prev, attending }));
  };

  const handleGuestsChange = (num: number) => {
    if (num >= 0 && num <= 3) {
      setFormData((prev) => ({ ...prev, guests: num }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || formData.attending === null) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      toast({
        title: "RSVP Received",
        description: formData.attending 
          ? "Thank you for confirming your attendance. We can't wait to celebrate with you!" 
          : "We're sorry you can't make it. Thank you for letting us know.",
      });
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-8">
          <FadeIn delay={100}>
            <div className="space-y-4">
              <label htmlFor="name" className="block text-sm font-medium text-foreground/80">
                Your Name <span className="text-wedding-accent">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-foreground/40" />
                </div>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-wedding pl-10"
                  placeholder="John & Jane Doe"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="space-y-4">
              <label htmlFor="email" className="block text-sm font-medium text-foreground/80">
                Email Address <span className="text-wedding-accent">*</span>
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-wedding"
                placeholder="your@email.com"
              />
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="space-y-4">
              <span className="block text-sm font-medium text-foreground/80">
                Will you be attending? <span className="text-wedding-accent">*</span>
              </span>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => handleAttendingChange(true)}
                  className={cn(
                    "flex-1 py-3 px-4 rounded-lg border transition-all duration-300 flex items-center justify-center",
                    formData.attending === true
                      ? "border-wedding-accent/50 bg-wedding-accent/5 text-wedding-accent"
                      : "border-border bg-white/50 text-foreground/70 hover:border-wedding-accent/30"
                  )}
                >
                  <CheckCircle2 className={cn(
                    "mr-2 h-5 w-5 transition-opacity",
                    formData.attending === true ? "opacity-100" : "opacity-40"
                  )} />
                  <span>Joyfully Accept</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleAttendingChange(false)}
                  className={cn(
                    "flex-1 py-3 px-4 rounded-lg border transition-all duration-300 flex items-center justify-center",
                    formData.attending === false
                      ? "border-wedding-accent/50 bg-wedding-accent/5 text-wedding-accent"
                      : "border-border bg-white/50 text-foreground/70 hover:border-wedding-accent/30"
                  )}
                >
                  <X className={cn(
                    "mr-2 h-5 w-5 transition-opacity",
                    formData.attending === false ? "opacity-100" : "opacity-40"
                  )} />
                  <span>Regretfully Decline</span>
                </button>
              </div>
            </div>
          </FadeIn>

          {formData.attending && (
            <>
              <FadeIn delay={400}>
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-foreground/80">
                    Number of Additional Guests
                  </label>
                  <div className="flex items-center space-x-4">
                    <button
                      type="button"
                      onClick={() => handleGuestsChange(formData.guests - 1)}
                      className="h-10 w-10 rounded-full border border-border bg-white/50 flex items-center justify-center text-foreground/70 transition-colors hover:border-wedding-accent/30"
                      disabled={formData.guests <= 0}
                    >
                      -
                    </button>
                    <div className="flex items-center justify-center">
                      <Users className="h-5 w-5 text-foreground/40 mr-2" />
                      <span className="text-lg font-medium">{formData.guests}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleGuestsChange(formData.guests + 1)}
                      className="h-10 w-10 rounded-full border border-border bg-white/50 flex items-center justify-center text-foreground/70 transition-colors hover:border-wedding-accent/30"
                      disabled={formData.guests >= 3}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-xs text-foreground/60 italic">Maximum of 3 additional guests</p>
                </div>
              </FadeIn>

              <FadeIn delay={500}>
                <div className="space-y-4">
                  <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-foreground/80">
                    Dietary Restrictions
                  </label>
                  <textarea
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    rows={3}
                    className="input-wedding resize-none"
                    placeholder="Please list any allergies or dietary restrictions..."
                  />
                </div>
              </FadeIn>

              <FadeIn delay={600}>
                <div className="space-y-4">
                  <label htmlFor="songRequest" className="block text-sm font-medium text-foreground/80">
                    Song Request
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Music className="h-5 w-5 text-foreground/40" />
                    </div>
                    <input
                      type="text"
                      id="songRequest"
                      name="songRequest"
                      value={formData.songRequest}
                      onChange={handleChange}
                      className="input-wedding pl-10"
                      placeholder="What song will get you on the dance floor?"
                    />
                  </div>
                </div>
              </FadeIn>
            </>
          )}

          <FadeIn delay={700}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-wedding w-full mt-8 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Heart className="mr-2 h-5 w-5" />
                  Submit RSVP
                </span>
              )}
            </button>
          </FadeIn>
        </form>
      ) : (
        <FadeIn>
          <div className="text-center py-12 px-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-wedding-accent/10 text-wedding-accent rounded-full mb-6">
              {formData.attending ? (
                <CheckCircle2 className="h-10 w-10" />
              ) : (
                <Heart className="h-10 w-10" />
              )}
            </div>
            <h3 className="heading-md mb-4">Thank You!</h3>
            <p className="text-foreground/80 max-w-md mx-auto">
              {formData.attending
                ? "We've received your RSVP and can't wait to celebrate with you on our special day."
                : "We've received your response and we're sorry you can't make it. You'll be missed."}
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-8 text-wedding-accent underline hover:text-wedding-accent/80 transition-colors"
            >
              Edit Response
            </button>
          </div>
        </FadeIn>
      )}
    </div>
  );
};

export default RSVPForm;
