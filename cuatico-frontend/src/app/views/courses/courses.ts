import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card2 } from '../../components/card2/card2';
import { Router } from '@angular/router';
import { Header } from 'src/app/components/header/header';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, Card2, Header],
  templateUrl: './courses.html'
})
export class Courses {
   constructor(readonly router: Router) {}

  irADetalle(id: number) {
    this.router.navigate(['/cursos', id]);
  }
}
