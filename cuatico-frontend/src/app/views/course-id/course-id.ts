import { Component, OnInit, OnDestroy } from '@angular/core';
import { Module } from '../../components/module/module';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription, filter } from 'rxjs';

interface CourseModule {
  title: string;
  number: number;
  status: 'habilitado' | 'deshabilitado';
  grade?: number;
}

interface CourseProgress {
  completedLessons: string;
  studyTime: string;
  overallProgress: string;
}

interface Professor {
  name: string;
  role: string;
  email: string;
  image: string;
}

interface Task {
  title: string;
  dueIn: string;
  status: 'En Progreso' | 'Pendiente';
}

interface Course {
  title: string;
  image: string;
  progress: CourseProgress;
  modules: CourseModule[];
  professor: Professor;
  tasks: Task[];
}

@Component({
  selector: 'app-course-id',
  imports: [Module, CommonModule],
  templateUrl: './course-id.html',
  standalone: true
})
export class CourseId implements OnInit, OnDestroy {
  courseData: Course | null = null;
  private routeSubscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Suscribirse a los cambios de ruta
    this.routeSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const courseId = this.route.snapshot.paramMap.get('id');
      if (courseId) {
        try {
          this.courseData = this.getCourseData(courseId);
        } catch (error) {
          console.error('Error loading course:', error);
          this.router.navigate(['/404']);
        }
      }
    });

    // Cargar datos iniciales
    const initialCourseId = this.route.snapshot.paramMap.get('id');
    if (initialCourseId) {
      try {
        this.courseData = this.getCourseData(initialCourseId);
      } catch (error) {
        console.error('Error loading initial course:', error);
        this.router.navigate(['/404']);
      }
    }
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  getCourseData(courseId: string): Course {
    const courses: { [key: string]: Course } = {
      '1': {
        title: 'Desarrolla tu creatividad',
        image: 'assets/curso.avif',
        progress: {
          completedLessons: '6/8',
          studyTime: '3.5h',
          overallProgress: '95%'
        },
        professor: {
          name: 'Diana Henao',
          role: 'Diseñadora Creativa',
          email: 'dianahenao@cuatico.com',
          image: 'assets/Diana.png'
        },
        modules: [
          {
            title: 'Introducción a la creatividad',
            number: 1,
            status: 'habilitado',
            grade: 100
          },
          {
            title: 'Procesos creativos',
            number: 2,
            status: 'habilitado',
            grade: 90
          },
          {
            title: 'Técnicas de generación de ideas',
            number: 3,
            status: 'habilitado',
            grade: 95
          },
          {
            title: 'Proyecto final creativo',
            number: 4,
            status: 'deshabilitado'
          }
        ],
        tasks: [
          {
            title: 'Proyecto de creatividad',
            dueIn: '2 días',
            status: 'En Progreso'
          },
          {
            title: 'Ejercicio de ideación',
            dueIn: '5 días',
            status: 'Pendiente'
          }
        ]
      },
      '2': {
        title: 'UX Research',
        image: 'assets/curso.avif',
        progress: {
          completedLessons: '5/7',
          studyTime: '2.5h',
          overallProgress: '85%'
        },
        professor: {
          name: 'Diana Henao',
          role: 'Diseño UX/UI',
          email: 'dianahenao@cuatico.com',
          image: 'assets/Diana.png'
        },
        modules: [
          {
            title: 'Diseño de experiencia, interfaz de usuario y estrategia de contenido',
            number: 1,
            status: 'habilitado',
            grade: 80
          },
          {
            title: 'Transformación digital',
            number: 2,
            status: 'habilitado',
            grade: 45
          },
          {
            title: 'Dirección de producto: gestión de proyectos y comunicación',
            number: 3,
            status: 'deshabilitado'
          },
          {
            title: 'Aula de prototipado y lenguajes de desarrollo',
            number: 4,
            status: 'deshabilitado'
          }
        ],
        tasks: [
          {
            title: 'Diseño de Algoritmos',
            dueIn: '2 días',
            status: 'En Progreso'
          },
          {
            title: 'Diseño Web Responsive',
            dueIn: '5 días',
            status: 'Pendiente'
          }
        ]
      },
      '3': {
        title: 'Diseño de Interfaces',
        image: 'assets/curso.avif',
        progress: {
          completedLessons: '4/6',
          studyTime: '2.0h',
          overallProgress: '70%'
        },
        professor: {
          name: 'Diana Henao',
          role: 'UI Designer Senior',
          email: 'dianahenao@cuatico.com',
          image: 'assets/Diana.png'
        },
        modules: [
          {
            title: 'Fundamentos del diseño de interfaces',
            number: 1,
            status: 'habilitado',
            grade: 85
          },
          {
            title: 'Principios de usabilidad y accesibilidad',
            number: 2,
            status: 'habilitado',
            grade: 75
          },
          {
            title: 'Diseño de componentes y sistemas',
            number: 3,
            status: 'habilitado',
            grade: 60
          },
          {
            title: 'Prototipado avanzado',
            number: 4,
            status: 'deshabilitado'
          }
        ],
        tasks: [
          {
            title: 'Sistema de Componentes',
            dueIn: '3 días',
            status: 'En Progreso'
          },
          {
            title: 'Prototipo Interactivo',
            dueIn: '6 días',
            status: 'Pendiente'
          }
        ]
      },
      '4': {
        title: 'Diseño de producto',
        image: 'assets/curso.avif',
        progress: {
          completedLessons: '3/8',
          studyTime: '1.5h',
          overallProgress: '65%'
        },
        professor: {
          name: 'Diana Henao',
          role: 'Product Designer',
          email: 'dianahenao@cuatico.com',
          image: 'assets/Diana.png'
        },
        modules: [
          {
            title: 'Introducción al diseño de producto',
            number: 1,
            status: 'habilitado',
            grade: 70
          },
          {
            title: 'Investigación y análisis de mercado',
            number: 2,
            status: 'habilitado',
            grade: 65
          },
          {
            title: 'Prototipado y validación',
            number: 3,
            status: 'deshabilitado'
          },
          {
            title: 'Lanzamiento y métricas',
            number: 4,
            status: 'deshabilitado'
          }
        ],
        tasks: [
          {
            title: 'Análisis de Mercado',
            dueIn: '4 días',
            status: 'En Progreso'
          },
          {
            title: 'Plan de Lanzamiento',
            dueIn: '7 días',
            status: 'Pendiente'
          }
        ]
      }
    };

    const course = courses[courseId];
    if (!course) {
      throw new Error(`No se encontró el curso con ID ${courseId}`);
    }
    return course;
  }

  solicitarTutoria(): void {
    alert('¡Tutoría solicitada! Te contactaremos pronto.');
  }
}
