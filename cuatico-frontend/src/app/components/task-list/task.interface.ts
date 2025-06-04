export interface Task {
  id: number;
  title: string;
  description?: string;
  dueIn: string;
  dueDate: Date;
  status: 'En Progreso' | 'Pendiente' | 'Completada';
  type: 'algorithm' | 'design' | 'research' | 'quiz';
  priority: 'alta' | 'media' | 'baja';
  course?: string;
} 