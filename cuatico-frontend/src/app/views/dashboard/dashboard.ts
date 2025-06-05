import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Card2 } from '../../components/card2/card2';
import { UserStatsComponent } from '../user-stats/user-stats.component';
import { TaskList } from '../task-list/task-list';
import { Task } from '../task-list/task.interface';
import { RecommendedCourses } from '../../components/recommended-courses/recommended-courses';
import { MiniCalendar } from 'src/app/components/mini-calendar/mini-calendar';

interface User {
  username: string;
  role: string;
}

interface RecommendedCourse {
  id: number;
  title: string;
  instructor: string;
  price: number;
  startDate: string;
  thumbnail: string;
  duration: string;
  modality: 'presencial' | 'remoto';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, Card2, UserStatsComponent, TaskList, RecommendedCourses, MiniCalendar],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  user: User = {
    username: 'Juan',
    role: 'Estudiante'
  };

  tasks: Task[] = [
    {
      id: 1,
      title: 'Completar ejercicio de algoritmos',
      description: 'Resolver los problemas de programación dinámica',
      type: 'algorithm',
      status: 'Pendiente',
      priority: 'alta',
      dueIn: '2 días',
      course: 'Algoritmos Avanzados'
    },
    {
      id: 2,
      title: 'Diseñar wireframes',
      description: 'Crear los wireframes para la nueva funcionalidad',
      type: 'design',
      status: 'En Progreso',
      priority: 'media',
      dueIn: '3 días',
      course: 'Diseño UX'
    },
    {
      id: 3,
      title: 'Investigación de mercado',
      description: 'Analizar la competencia y tendencias actuales',
      type: 'research',
      status: 'Pendiente',
      priority: 'baja',
      dueIn: '5 días',
      course: 'Marketing Digital'
    }
  ];

  recommendedCourses: RecommendedCourse[] = [
    {
      id: 1,
      title: 'Machine Learning',
      instructor: 'Ana García',
      price: 299,
      startDate: '15 de Mayo',
      thumbnail: 'assets/curso.avif',
      duration: '8 semanas',
      modality: 'remoto'
    },
    {
      id: 2,
      title: 'Diseño UX/UI',
      instructor: 'Carlos Ruiz',
      price: 249,
      startDate: '22 de Mayo',
      thumbnail: 'assets/curso.avif',
      duration: '6 semanas',
      modality: 'presencial'
    }
  ];

  onTaskStatusChanged(updatedTask: Task) {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  onTaskAdded(newTask: Task) {
    this.tasks = [...this.tasks, newTask];
  }

  irADetalle(id: number) {
    this.router.navigate(['/curso', id]);
  }

  constructor(private router: Router) {}
}
