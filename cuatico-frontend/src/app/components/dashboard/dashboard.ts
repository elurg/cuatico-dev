import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Card } from '../../core/card/card';
import { MiniCalendar } from '../mini-calendar/mini-calendar';
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
    Card,
    MiniCalendar,
    UserStatsComponent,
    TaskList,
    RecommendedCourses
  ],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  user: User = {
    username: 'Juan',
    role: 'Pro'
  };

  tasks: Task[] = [
    {
      id: 1,
      title: 'Diseño de Algoritmos',
      description: 'Implementar un algoritmo de ordenamiento eficiente para el proyecto final',
      dueIn: '2 días',
      dueDate: new Date('2024-04-20'),
      status: 'En Progreso',
      type: 'algorithm',
      priority: 'alta',
      course: 'Algoritmos Avanzados'
    },
    {
      id: 2,
      title: 'Diseño Web Responsive',
      description: 'Crear un diseño adaptativo para la landing page del proyecto',
      dueIn: '5 días',
      dueDate: new Date('2024-04-23'),
      status: 'Pendiente',
      type: 'design',
      priority: 'media',
      course: 'Diseño Web'
    },
    {
      id: 3,
      title: 'Investigación UX',
      description: 'Realizar investigación de usuarios y crear personas para el proyecto',
      dueIn: '3 días',
      dueDate: new Date('2024-04-21'),
      status: 'Pendiente',
      type: 'research',
      priority: 'alta',
      course: 'UX Research'
    },
    {
      id: 4,
      title: 'Quiz de Diseño',
      description: 'Completar el cuestionario sobre principios de diseño web',
      dueIn: '1 día',
      dueDate: new Date('2024-04-19'),
      status: 'Pendiente',
      type: 'quiz',
      priority: 'baja',
      course: 'Fundamentos de Diseño'
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
}
