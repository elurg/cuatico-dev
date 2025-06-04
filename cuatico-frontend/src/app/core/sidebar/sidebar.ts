import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
import { filter } from 'rxjs/operators';

interface CourseModule {
  title: string;
  number: number;
  status: string;
  grade?: number;
}

interface CourseProgress {
  completedLessons: string;
  studyTime: string;
  overallProgress: string;
}

interface Course {
  title: string;
  image: string;
  progress: CourseProgress;
  modules: CourseModule[];
}

interface CourseData {
  [key: string]: Course;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  imports: [RouterModule, NgClass],
  standalone: true,
})
export class Sidebar implements OnInit {
   sidebarAbierto = false;

  toggleSidebar(): void {
    this.sidebarAbierto = !this.sidebarAbierto;
  }


  cursosOpen = false;

  constructor(readonly router: Router) { }

  ngOnInit() {
    // Inicializar el estado del menú basado en la ruta actual
    this.cursosOpen = this.router.url.startsWith('/cursos');

    // Escuchar cambios de ruta para actualizar el estado del menú
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.router.url.startsWith('/cursos')) {
        this.cursosOpen = true;
      }
    });
  }

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