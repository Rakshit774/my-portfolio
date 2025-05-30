import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // EmailJS configuration - Updated with your public key
  const EMAILJS_PUBLIC_KEY = '0hTRSRXVKQJPAzMrN';

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto section-padding">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold font-space gradient-text mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm actively seeking internship opportunities and exciting projects. Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <ContactInfo isVisible={isVisible} />
          <ContactForm isVisible={isVisible} />
        </div>

        {/* Footer */}
        <div className={`text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`} style={{ animationDelay: '1s' }}>
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Rakshit Awasthi. Crafted with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </section>
  );
};
