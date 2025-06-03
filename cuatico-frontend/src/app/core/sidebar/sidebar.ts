import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  imports: [RouterModule, NgClass],
  standalone: true,
})
export class Sidebar {
  cursosOpen = false;

  constructor(readonly router: Router) { }

  isActive(route: string): boolean {
    return this.router.isActive(route, {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }

  isCursosSubrouteActive(): boolean {
    return this.router.url.startsWith('/cursos');
  }

  toggleCursos() {
    this.cursosOpen = !this.cursosOpen;
    this.router.navigate(['/cursos']);
  }


  closeCursos() {
    this.cursosOpen = false;
  }
}