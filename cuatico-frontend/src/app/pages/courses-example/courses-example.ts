import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import components
import { CourseCard, CourseCardData } from '../../components/course-card/course-card';
import { Button, Icon } from '../../components/ui';

@Component({
  selector: 'app-courses-example',
  standalone: true,
  imports: [
    CommonModule,
    CourseCard,
    Button,
    Icon
  ],
  templateUrl: './courses-example.html'
})
export class CoursesExampleComponent {
  // Filtros de cursos
  filters = {
    category: 'all',
    level: 'all',
    modality: 'all'
  };

  // Datos de ejemplo de cursos
  courses: CourseCardData[] = [
    {
      id: 1,
      title: 'Diseño UX/UI',
      instructor: 'Carlos Ruiz',
      instructorAvatar: 'assets/Diana.png',
      price: 249,
      modality: 'online',
      duration: '6 semanas',
      lessons: 24,
      startDate: '22 de Mayo',
      thumbnail: 'assets/curso.avif',
      description: 'Aprende los principios del diseño de experiencia de usuario y crea interfaces intuitivas y atractivas.',
      category: 'Diseño',
      level: 'intermediate',
      rating: 4.8,
      enrolled: false
    },
    {
      id: 2,
      title: 'Machine Learning',
      instructor: 'Ana García',
      instructorAvatar: 'assets/Diana.png',
      price: 299,
      modality: 'online',
      duration: '8 semanas',
      lessons: 32,
      startDate: '15 de Mayo',
      progress: 45,
      thumbnail: 'assets/curso.avif',
      description: 'Aprende los fundamentos del Machine Learning y cómo aplicarlos en proyectos reales.',
      category: 'Programación',
      level: 'advanced',
      rating: 4.9,
      enrolled: true
    },
    {
      id: 3,
      title: 'Desarrollo Web Full Stack',
      instructor: 'Miguel Hernández',
      instructorAvatar: 'assets/Diana.png',
      price: 349,
      modality: 'in-person',
      duration: '12 semanas',
      lessons: 48,
      startDate: '1 de Junio',
      thumbnail: 'assets/curso.avif',
      description: 'Conviértete en un desarrollador web completo dominando tanto el frontend como el backend.',
      category: 'Programación',
      level: 'beginner',
      rating: 4.7,
      enrolled: false
    },
    {
      id: 4,
      title: 'Marketing Digital',
      instructor: 'Laura Martínez',
      instructorAvatar: 'assets/Diana.png',
      price: 199,
      modality: 'online',
      duration: '4 semanas',
      lessons: 16,
      startDate: '10 de Mayo',
      progress: 75,
      thumbnail: 'assets/curso.avif',
      description: 'Aprende estrategias efectivas de marketing digital para aumentar la visibilidad de tu marca.',
      category: 'Marketing',
      level: 'intermediate',
      rating: 4.5,
      enrolled: true
    }
  ];

  // Métodos para manejar eventos
  onNavigateToCourse(courseId: number): void {
    console.log(`Navegando al curso ${courseId}`);
    // Implementar navegación
  }

  onEnrollInCourse(courseId: number): void {
    console.log(`Inscribiéndose en el curso ${courseId}`);
    // Implementar inscripción
    
    // Simulación de inscripción
    this.courses = this.courses.map(course => {
      if (course.id === courseId) {
        return { ...course, enrolled: true, progress: 0 };
      }
      return course;
    });
  }

  onAddToFavorites(courseId: number): void {
    console.log(`Añadiendo curso ${courseId} a favoritos`);
    // Implementar añadir a favoritos
  }

  // Métodos para filtrar cursos
  setFilter(type: 'category' | 'level' | 'modality', value: string): void {
    this.filters[type] = value;
  }

  get filteredCourses(): CourseCardData[] {
    return this.courses.filter(course => {
      // Filtrar por categoría
      if (this.filters.category !== 'all' && course.category !== this.filters.category) {
        return false;
      }
      
      // Filtrar por nivel
      if (this.filters.level !== 'all' && course.level !== this.filters.level) {
        return false;
      }
      
      // Filtrar por modalidad
      if (this.filters.modality !== 'all' && course.modality !== this.filters.modality) {
        return false;
      }
      
      return true;
    });
  }
}