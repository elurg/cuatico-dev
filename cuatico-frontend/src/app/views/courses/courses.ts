import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardHybrid, CourseData } from '../../components/course-card-hybrid/course-card-hybrid';
import { Router } from '@angular/router';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, CourseCardHybrid],
  templateUrl: './courses.html'
})
export class Courses {
  constructor(readonly router: Router) {}

  misCursos: CourseData[] = [
    {
      id: 1,
      titulo: 'UX Research',
      profesor: 'Diana',
      modalidad: 'presencial',
      lecciones: '14',
      duracion: '6 semanas',
      fecha: '19 de Abril',
      progreso: 95,
      thumbnail: 'assets/curso.avif'
    },
    {
      id: 2,
      titulo: 'Diseño Web',
      profesor: 'Diana',
      modalidad: 'remoto',
      lecciones: '10',
      duracion: '4 semanas',
      fecha: '26 de Abril',
      progreso: 30,
      thumbnail: 'assets/curso.avif'
    },
    {
      id: 3,
      titulo: 'UI Design',
      profesor: 'Diana',
      modalidad: 'presencial',
      lecciones: '12',
      duracion: '8 semanas',
      fecha: '3 de Mayo',
      progreso: 80,
      thumbnail: 'assets/curso.avif'
    },
    {
      id: 4,
      titulo: 'Design System',
      profesor: 'Diana',
      modalidad: 'remoto',
      lecciones: '8',
      duracion: '4 semanas',
      fecha: '10 de Mayo',
      progreso: 65,
      thumbnail: 'assets/curso.avif'
    }
  ];

  irADetalle(id: number) {
    this.router.navigate(['/cursos', id]);
  }

  onNavigateToCourse(courseId: number) {
    this.irADetalle(courseId);
  }

  onEnrollInCourse(courseId: number) {
    console.log('Continuar curso:', courseId);
    this.irADetalle(courseId);
  }
}
