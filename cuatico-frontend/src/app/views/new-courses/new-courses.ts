import { Component } from '@angular/core';
import { Header } from 'src/app/components/header/header';
import { Card } from 'src/app/components/card/card';

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
  imports: [Header,Card],
  templateUrl: './new-courses.html'
})



export class NewCourses {
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
}
