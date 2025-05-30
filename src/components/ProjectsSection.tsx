
import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  const projects = [
    {
      id: 1,
      title: 'Animated Website',
      description: 'A single-page animated site showcasing smooth GSAP transitions and Locomotive.js scroll effects.',
      technologies: ['HTML', 'CSS', 'GSAP', 'Locomotive.js'],
      status: 'completed',
      videoUrl: 'https://ik.imagekit.io/lcbyynjuui/Works1.mp4?tr=orig&updatedAt=1748352950679',
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=450&fit=crop',
      githubUrl: 'https://lnkd.in/gtt2Pzd4',
      liveUrl: 'https://ik.imagekit.io/lcbyynjuui/Works1.mp4?tr=orig&updatedAt=1748352950679'
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'A real-time weather forecast application built with React.js and Weather APIs.',
      technologies: ['React.js', 'API Integration', 'CSS'],
      status: 'completed',
      videoUrl: 'https://ik.imagekit.io/lcbyynjuui/2025-02-27%2015-25-19.mkv/ik-video.mp4?updatedAt=1748352937617',
      imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=450&fit=crop',
      githubUrl: 'https://github.com/Rakshit774/weather2',
      liveUrl: 'https://ik.imagekit.io/lcbyynjuui/2025-02-27%2015-25-19.mkv/ik-video.mp4?updatedAt=1748352937617'
    },
    {
      id: 3,
      title: 'To-Do List App',
      description: 'A task manager with filters, animations, swipe-to-delete functionality, and dark mode.',
      technologies: ['React.js', 'Local Storage', 'CSS Animations'],
      status: 'wip',
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'React + GSAP Projects',
      description: 'More exciting projects combining React.js with GSAP animations are coming soon.',
      technologies: ['React.js', 'GSAP', 'CSS'],
      status: 'planned',
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=450&fit=crop',
    }
  ];

  const handleProjectLink = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto section-padding">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold font-space gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my creative web development projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
              onProjectLink={handleProjectLink}
            />
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`} style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            More exciting projects are in development!
          </p>
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group"
          >
            Let's Work Together
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
