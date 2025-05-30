
import { Badge } from '@/components/ui/badge';

interface ProjectStatusBadgeProps {
  status: string;
}

export const ProjectStatusBadge = ({ status }: ProjectStatusBadgeProps) => {
  switch (status) {
    case 'completed':
      return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">✅ Completed</Badge>;
    case 'wip':
      return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">🚧 Work in Progress</Badge>;
    case 'planned':
      return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">🧪 Coming Soon</Badge>;
    default:
      return null;
  }
};
