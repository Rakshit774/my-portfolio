
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectOverlayProps {
  githubUrl?: string;
  liveUrl?: string;
  onProjectLink: (url: string) => void;
}

export const ProjectOverlay = ({ githubUrl, liveUrl, onProjectLink }: ProjectOverlayProps) => {
  return (
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex space-x-3">
          {githubUrl && githubUrl !== '#' && (
            <Button 
              size="sm" 
              variant="secondary" 
              className="rounded-full"
              onClick={() => onProjectLink(githubUrl)}
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
          )}
          {liveUrl && liveUrl !== '#' && (
            <Button 
              size="sm" 
              className="rounded-full"
              onClick={() => onProjectLink(liveUrl)}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
