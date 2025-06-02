import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../core/card/card';
import { Router } from '@angular/router';
import { Header } from '../header/header';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.html',
  imports: [CommonModule, Card, Header]
})
export class Courses {
   constructor(readonly router: Router) {}

  irADetalle(id: number) {
    this.router.navigate(['/cursos', id]);
  }
}
