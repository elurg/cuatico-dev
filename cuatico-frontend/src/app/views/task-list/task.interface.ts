export interface Task {
  id: number;
  title: string;
  description: string;
  type: 'algorithm' | 'design' | 'research' | 'quiz';
  status: 'En Progreso' | 'Pendiente' | 'Completada';
  priority: 'alta' | 'media' | 'baja';
  dueIn: string;
  course: string;
} 