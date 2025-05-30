
import { useEffect, useRef, useState } from 'react';

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const timelineData = [
    {
      year: '2020',
      title: '10th Grade',
      institution: 'Army Public School',
      grade: '93%',
      icon: '📘'
    },
    {
      year: '2022',
      title: '12th Grade',
      institution: 'Army Public School',
      grade: '80%',
      icon: '📗'
    },
    {
      year: '2023–Present',
      title: 'B.Tech CSE',
      institution: 'JUET, Guna',
      grade: 'Ongoing',
      icon: '🎓'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold font-space gradient-text mb-8">
              About Me
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently pursuing <span className="font-semibold text-purple-600 dark:text-purple-400">B.Tech in CSE at JUET Guna</span>, 
                I'm passionate about making cool-looking animated websites. 
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Continuous learning drives me—I love upgrading my skills in creative environments. 
                I specialize in creating immersive web experiences using modern technologies like 
                <span className="font-semibold text-blue-600 dark:text-blue-400"> React.js, GSAP, and Locomotive.js</span>.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm actively seeking <span className="font-semibold text-green-600 dark:text-green-400">internship opportunities</span> 
                where I can contribute to exciting projects and continue growing as a developer.
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0'
          }`}>
            <h3 className="text-2xl font-bold font-space mb-8 text-center">Education Timeline</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start transition-all duration-700 ${
                      isVisible ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-gray-800 rounded-full border-4 border-purple-500 flex items-center justify-center text-xl z-10">
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="ml-6 glass-effect rounded-lg p-6 flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                          {item.year}
                        </h4>
                        <span className="text-sm font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded">
                          {item.grade}
                        </span>
                      </div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
