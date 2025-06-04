import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Card2 } from '../../core/card2/card2';
import { MiniCalendar } from '../mini-calendar/mini-calendar';
import { UserStatsComponent } from '../user-stats/user-stats.component';
import { TaskList } from '../task-list/task-list';
import { Task } from '../task-list/task.interface';
import { RecommendedCourses } from '../recommended-courses/recommended-courses';

interface User {
  username: string;
  role: string;
}
import { UserStatsComponent } from '../user-stats/user-stats.component';
import { TaskList } from '../task-list/task-list';
import { Task } from '../task-list/task.interface';
import { RecommendedCourses } from '../recommended-courses/recommended-courses';

interface User {
  username: string;
  role: string;
}

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    Card2,
    MiniCalendar,
    UserStatsComponent,
    TaskList,
    RecommendedCourses
  ],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  user: User = {
  user: User = {
    username: 'Juan',
    role: 'Pro'
  };

  tasks: Task[] = [
    {
      id: 1,
      title: 'Diseñar interfaz de usuario',
      description: 'Crear wireframes y mockups para la nueva interfaz',
      type: 'design',
      status: 'En Progreso',
      priority: 'alta',
      dueIn: '2 días',
      course: 'UX/UI Design'
    },
    {
      id: 2,
      title: 'Implementar autenticación',
      description: 'Integrar sistema de login con OAuth',
      type: 'algorithm',
      status: 'En Progreso',
      priority: 'alta',
      dueIn: '3 días',
      course: 'Backend Development'
    },
    {
      id: 3,
      title: 'Investigar APIs',
      description: 'Analizar APIs disponibles para integración',
      type: 'research',
      status: 'En Progreso',
      priority: 'media',
      dueIn: '5 días',
      course: 'API Integration'
    },
    {
      id: 4,
      title: 'Completar quiz de React',
      description: 'Resolver cuestionario sobre hooks',
      type: 'quiz',
      status: 'En Progreso',
      priority: 'baja',
      dueIn: '1 semana',
      course: 'React Advanced'
    }
  ];

  recommendedCourses = [
    {
      id: 5,
      title: 'Curso de Figma UX/UI',
      instructor: 'Diana Henao',
      price: 200,
      startDate: '5 de julio',
      thumbnail: 'assets/curso.avif',
      duration: '4 semanas',
      modality: 'remoto'
    },
    {
      id: 6,
      title: 'Diseño de Interfaces Avanzado',
      instructor: 'Diana Henao',
      price: 250,
      startDate: '12 de julio',
      thumbnail: 'assets/curso.avif',
      duration: '6 semanas',
      modality: 'presencial'
    }
  ];

  constructor(private router: Router) {}

  irADetalle(id: number) {
    this.router.navigate(['/cursos', id]);
  }

  onTaskStatusChanged(task: Task) {
    const taskIndex = this.tasks.findIndex(t => t.id === task.id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = task;
    }
  }

  onTaskStatusChanged(task: Task) {
    const taskIndex = this.tasks.findIndex(t => t.id === task.id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = task;
    }
  }
}
