
import { useEffect, useRef, useState } from 'react';

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-orange-500' },
    { name: 'React.js', level: 88, color: 'from-blue-500 to-cyan-500' },
    { name: 'GSAP', level: 80, color: 'from-green-500 to-teal-500' },
    { name: 'Locomotive.js', level: 75, color: 'from-purple-500 to-pink-500' },
    { name: 'Responsive Design', level: 92, color: 'from-indigo-500 to-purple-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills one by one
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => new Set([...prev, skill.name]));
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto section-padding">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold font-space gradient-text mb-6">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring creative ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`transition-all duration-700 ${
                isVisible ? 'animate-slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {skill.level}%
                </span>
              </div>
              
              <div className="skill-bar">
                <div
                  className={`skill-progress bg-gradient-to-r ${skill.color} ${
                    animatedSkills.has(skill.name) ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    width: animatedSkills.has(skill.name) ? `${skill.level}%` : '0%',
                    transitionDelay: '0.5s'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid Visual */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 transition-all duration-1000 ${
          isVisible ? 'animate-scale-in' : 'opacity-0'
        }`} style={{ animationDelay: '0.8s' }}>
          {skills.map((skill, index) => (
            <div
              key={`visual-${skill.name}`}
              className="flex flex-col items-center p-6 glass-effect rounded-xl hover:scale-105 transition-transform duration-300 group"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center mb-3 group-hover:animate-float`}>
                <span className="text-white text-xl font-bold">
                  {skill.name.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">
                {skill.name.split('/')[0]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
