import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  imports: [CommonModule, RouterModule],
  templateUrl: './recommended-courses.html'
})
export class RecommendedCourses {
  @Input() courses: RecommendedCourse[] = [];
} 