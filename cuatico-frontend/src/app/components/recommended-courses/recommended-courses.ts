import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CourseCardHybrid, CourseData } from '../course-card-hybrid/course-card-hybrid';

interface RecommendedCourse {
  id: number;
  title: string;
  instructor: string;
  price: number;
  startDate: string;
  thumbnail: string;
  duration: string;
  modality: string;
}

@Component({
  selector: 'recommended-courses',
  standalone: true,
  imports: [CommonModule, RouterModule, CourseCardHybrid],
  templateUrl: './recommended-courses.html'
})
export class RecommendedCourses {
  @Input() courses: RecommendedCourse[] = [];

  constructor(private router: Router) {}

  get hybridCourses(): CourseData[] {
    return this.courses.map(course => ({
      id: course.id,
      titulo: course.title,
      profesor: course.instructor,
      precio: course.price,
      modalidad: course.modality.toLowerCase() === 'remoto' ? 'remoto' : 'presencial',
      duracion: course.duration,
      fecha: course.startDate,
      thumbnail: course.thumbnail
    }));
  }

  onNavigate(courseId: number) {
    this.router.navigate(['/curso', courseId]);
  }

  onEnroll(courseId: number) {
    this.router.navigate(['/inscripcion', courseId]);
  }
}