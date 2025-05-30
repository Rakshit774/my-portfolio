
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProjectStatusBadge } from './ProjectStatusBadge';
import { ProjectOverlay } from './ProjectOverlay';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  status: string;
  videoUrl?: string;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
  onProjectLink: (url: string) => void;
}

export const ProjectCard = ({ project, index, isVisible, onProjectLink }: ProjectCardProps) => {
  return (
    <Card
      className={`group hover:shadow-xl transition-all duration-500 overflow-hidden ${
        isVisible ? 'animate-scale-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <CardContent className="p-0">
        {/* Project Image/Video */}
        <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 relative overflow-hidden">
          {/* Show video for any project that has a videoUrl */}
          {project.videoUrl ? (
            <video
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              muted
              loop
              autoPlay
              playsInline
              poster={project.imageUrl}
            >
              <source src={project.videoUrl} type="video/mp4" />
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </video>
          ) : project.imageUrl ? (
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                {project.status === 'completed' ? 'Click to View' : 'Coming Soon'}
              </span>
            </div>
          )}
          
          {/* Overlay */}
          <ProjectOverlay 
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            onProjectLink={onProjectLink}
          />
        </div>

        {/* Project Info */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>
            <ProjectStatusBadge status={project.status} />
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            {project.githubUrl && project.githubUrl !== '#' && (
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1"
                onClick={() => onProjectLink(project.githubUrl!)}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            )}
            {project.liveUrl && project.liveUrl !== '#' && (
              <Button 
                size="sm" 
                className="flex-1"
                onClick={() => onProjectLink(project.liveUrl!)}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Project
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
