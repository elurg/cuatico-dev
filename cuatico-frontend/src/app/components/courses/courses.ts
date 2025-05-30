import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../../core/sidebar/sidebar';
import { Card } from '../../core/card/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.html',
  imports: [CommonModule, Card]
})
export class Courses {
   constructor(private router: Router) {}

  irADetalle(id: number) {
    this.router.navigate(['/courses', id]);
  }
}
