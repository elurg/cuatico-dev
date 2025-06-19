import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Header } from 'src/app/components/header/header';

import { CourseCardHybrid, CourseData } from 'src/app/components/course-card-hybrid/course-card-hybrid';

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
  selector: 'app-new-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, Header, CourseCardHybrid],
  templateUrl: './new-courses.html'
})



export class NewCourses {
  // Filtros
  selectedModality: string = 'all';
  selectedPriceRange: string = 'all';
  searchTerm: string = '';
  
  // Paginación
  currentPage: number = 1;
  itemsPerPage: number = 8;
  totalPages: number = 1;

  // Datos de cursos usando el nuevo formato
  allCourses: CourseData[] = [
    {
      id: 1,
      titulo: 'Machine Learning',
      profesor: 'Ana García',
      precio: 299,
      modalidad: 'remoto',
      fecha: '15 de Mayo',
      thumbnail: 'assets/curso.avif',
      duracion: '8 semanas',
      descripcion: 'Aprende los fundamentos del aprendizaje automático'
    },
    {
      id: 2,
      titulo: 'Diseño UX/UI',
      profesor: 'Carlos Ruiz',
      precio: 249,
      modalidad: 'presencial',
      fecha: '22 de Mayo',
      thumbnail: 'assets/curso.avif',
      duracion: '6 semanas',
      descripcion: 'Domina el diseño de experiencias de usuario'
    },
    {
      id: 3,
      titulo: 'Desarrollo Web Full Stack',
      profesor: 'María López',
      precio: 399,
      modalidad: 'remoto',
      fecha: '1 de Junio',
      thumbnail: 'assets/curso.avif',
      duracion: '12 semanas',
      descripcion: 'Conviértete en desarrollador full stack'
    },
    {
      id: 4,
      titulo: 'Marketing Digital',
      profesor: 'Juan Pérez',
      precio: 199,
      modalidad: 'presencial',
      fecha: '8 de Junio',
      thumbnail: 'assets/curso.avif',
      duracion: '4 semanas',
      descripcion: 'Estrategias modernas de marketing digital'
    },
    {
      id: 5,
      titulo: 'Data Science con Python',
      profesor: 'Elena García',
      precio: 349,
      modalidad: 'remoto',
      fecha: '15 de Junio',
      thumbnail: 'assets/curso.avif',
      duracion: '10 semanas',
      descripcion: 'Análisis de datos con Python y sus librerías'
    },
    {
      id: 6,
      titulo: 'Fotografía Digital',
      profesor: 'Roberto Silva',
      precio: 149,
      modalidad: 'presencial',
      fecha: '22 de Junio',
      thumbnail: 'assets/curso.avif',
      duracion: '3 semanas',
      descripcion: 'Técnicas avanzadas de fotografía digital'
    }
  ];

  filteredCourses: CourseData[] = [];

  constructor(private router: Router) {
    this.filterCourses();
  }

  filterCourses() {
    let filtered = [...this.allCourses];

    // Filtrar por modalidad
    if (this.selectedModality !== 'all') {
      filtered = filtered.filter(course => course.modalidad === this.selectedModality);
    }

    // Filtrar por precio
    if (this.selectedPriceRange !== 'all') {
      filtered = filtered.filter(course => {
        const price = course.precio || 0;
        switch (this.selectedPriceRange) {
          case 'free': return price === 0;
          case 'low': return price > 0 && price <= 200;
          case 'medium': return price > 200 && price <= 400;
          case 'high': return price > 400;
          default: return true;
        }
      });
    }

    // Filtrar por término de búsqueda
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(course => 
        course.titulo.toLowerCase().includes(term) ||
        course.profesor.toLowerCase().includes(term) ||
        (course.descripcion && course.descripcion.toLowerCase().includes(term))
      );
    }

    this.filteredCourses = filtered;
    this.totalPages = Math.ceil(this.filteredCourses.length / this.itemsPerPage);
    this.currentPage = 1;
  }

  navigateToCourse(courseId: number) {
    this.router.navigate(['/curso', courseId]);
  }

  enrollInCourse(courseId: number) {
    // Lógica para inscribirse en el curso
    console.log('Inscribirse en curso:', courseId);
    // Aquí podrías mostrar un modal de confirmación o redirigir a una página de pago
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
