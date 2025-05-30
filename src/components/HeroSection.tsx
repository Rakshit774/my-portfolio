import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-cyan-950/20"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-float" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-300 dark:bg-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-float" style={{
        animationDelay: '4s'
      }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Name with staggered animation */}
          <div className="overflow-hidden">
            <h1 className={`text-6xl md:text-8xl font-bold font-space transition-all duration-1000 ${isVisible ? 'animate-text-reveal' : 'opacity-0 translate-y-full'}`} style={{
            animationDelay: '0.2s'
          }}>
              <span className="gradient-text">Rakshit</span>
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <h1 className={`text-6xl md:text-8xl font-bold font-space transition-all duration-1000 ${isVisible ? 'animate-text-reveal' : 'opacity-0 translate-y-full'}`} style={{
            animationDelay: '0.4s'
          }}>
              <span className="gradient-text">Awasthi</span>
            </h1>
          </div>

          {/* Tagline */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
          animationDelay: '0.8s'
        }}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
              Creative Web Developer | Passionate About
            </p>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
              Animations & Interactive UI
            </p>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
          animationDelay: '1.2s'
        }}>
            <button onClick={() => document.getElementById('about')?.scrollIntoView({
            behavior: 'smooth'
          })} className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
        animationDelay: '1.6s'
      }}>
          <div className="flex flex-col items-center space-y-2">
            
            
          </div>
        </div>
      </div>
    </section>;
};