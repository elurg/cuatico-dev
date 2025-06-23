# Componente CourseCard

El componente `CourseCard` es un componente reutilizable para mostrar información de cursos en la aplicación Cuatico. Está diseñado para ser flexible y adaptarse a diferentes contextos de uso.

## Características

- Dos variantes: `detailed` (detallada) y `compact` (compacta)
- Soporte para mostrar progreso del curso
- Opción para mostrar u ocultar el precio
- Manejo de eventos para navegación, inscripción y favoritos
- Visualización de modalidad del curso (online/presencial)
- Soporte para niveles de dificultad (principiante, intermedio, avanzado)
- Visualización de información del instructor con avatar
- Visualización de detalles como número de lecciones, duración y fecha de inicio

## Uso

```html
<app-course-card
  [course]="courseData"
  [variant]="'detailed'"
  [showProgress]="true"
  [showPrice]="true"
  (navigate)="onNavigateToCourse($event)"
  (enroll)="onEnrollInCourse($event)"
  (favorite)="onAddToFavorites($event)">
</app-course-card>
```

## Interfaz de datos

El componente espera un objeto `CourseCardData` con la siguiente estructura:

```typescript
export interface CourseCardData {
  id: number;
  title: string;
  instructor: string;
  instructorAvatar?: string;
  price?: number;
  modality: 'online' | 'in-person';
  duration?: string;
  lessons?: number;
  startDate?: string;
  progress?: number;
  thumbnail?: string;
  description?: string;
  category?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  rating?: number;
  enrolled?: boolean;
}
```

## Propiedades de entrada

| Propiedad | Tipo | Valor predeterminado | Descripción |
|-----------|------|----------------------|-------------|
| course | CourseCardData | (requerido) | Datos del curso a mostrar |
| variant | 'compact' \| 'detailed' | 'detailed' | Variante de visualización |
| showProgress | boolean | false | Indica si se debe mostrar la barra de progreso |
| showPrice | boolean | true | Indica si se debe mostrar el precio |

## Eventos de salida

| Evento | Tipo | Descripción |
|--------|------|-------------|
| navigate | EventEmitter<number> | Se emite cuando se hace clic en la tarjeta, con el ID del curso |
| enroll | EventEmitter<number> | Se emite cuando se hace clic en el botón de inscripción, con el ID del curso |
| favorite | EventEmitter<number> | Se emite cuando se hace clic en el botón de favoritos, con el ID del curso |

## Ejemplo de uso en un componente

```typescript
import { Component } from '@angular/core';
import { CourseCard, CourseCardData } from '../components/course-card/course-card';

@Component({
  selector: 'app-courses-page',
  standalone: true,
  imports: [CourseCard],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <app-course-card
        *ngFor="let course of courses"
        [course]="course"
        [variant]="'detailed'"
        [showProgress]="course.enrolled"
        [showPrice]="!course.enrolled"
        (navigate)="onNavigateToCourse($event)"
        (enroll)="onEnrollInCourse($event)"
        (favorite)="onAddToFavorites($event)">
      </app-course-card>
    </div>
  `
})
export class CoursesPageComponent {
  courses: CourseCardData[] = [
    {
      id: 1,
      title: 'Diseño UX/UI',
      instructor: 'Carlos Ruiz',
      instructorAvatar: 'assets/carlos.jpg',
      price: 249,
      modality: 'online',
      duration: '6 semanas',
      lessons: 24,
      startDate: '22 de Mayo',
      thumbnail: 'assets/uxui.jpg',
      category: 'Diseño',
      level: 'intermediate',
      rating: 4.8,
      enrolled: false
    },
    {
      id: 2,
      title: 'Machine Learning',
      instructor: 'Ana García',
      price: 299,
      modality: 'online',
      duration: '8 semanas',
      lessons: 32,
      startDate: '15 de Mayo',
      progress: 45,
      thumbnail: 'assets/ml.jpg',
      description: 'Aprende los fundamentos del Machine Learning y cómo aplicarlos en proyectos reales.',
      category: 'Programación',
      level: 'advanced',
      rating: 4.9,
      enrolled: true
    }
  ];

  onNavigateToCourse(courseId: number): void {
    console.log(`Navegando al curso ${courseId}`);
    // Implementar navegación
  }

  onEnrollInCourse(courseId: number): void {
    console.log(`Inscribiéndose en el curso ${courseId}`);
    // Implementar inscripción
  }

  onAddToFavorites(courseId: number): void {
    console.log(`Añadiendo curso ${courseId} a favoritos`);
    // Implementar añadir a favoritos
  }
}
```

## Dependencias

Este componente utiliza los siguientes componentes UI:

- Card
- Button
- Badge
- Progress
- Avatar
- Icon

Asegúrate de que estos componentes estén disponibles en tu aplicación.