
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 700,
  threshold = 0.1,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add class after a delay
            setTimeout(() => {
              element.classList.add('in-view');
            }, delay);
            if (once) observer.unobserve(element);
          } else if (!once) {
            element.classList.remove('in-view');
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay, threshold, once]);

  // Set initial styles based on direction
  let initialStyles = {};
  if (direction === 'up') {
    initialStyles = { transform: 'translateY(20px)' };
  } else if (direction === 'down') {
    initialStyles = { transform: 'translateY(-20px)' };
  } else if (direction === 'left') {
    initialStyles = { transform: 'translateX(20px)' };
  } else if (direction === 'right') {
    initialStyles = { transform: 'translateX(-20px)' };
  }

  const inViewStyles = { 
    opacity: 1, 
    transform: 'translate(0, 0)',
    transition: `opacity ${duration}ms cubic-bezier(0.19, 1, 0.22, 1), transform ${duration}ms cubic-bezier(0.19, 1, 0.22, 1)`
  };

  return (
    <div
      ref={ref}
      className={cn("animate-on-scroll", className)}
      style={{ ...initialStyles }}
      data-animate-on-scroll
    >
      {children}
    </div>
  );
};

export default FadeIn;
