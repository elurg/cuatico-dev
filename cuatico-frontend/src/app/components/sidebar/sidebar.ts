import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { NgClass, CommonModule } from '@angular/common';
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
  standalone: true,
  imports: [CommonModule, RouterModule, NgClass],
})
export class Sidebar implements OnInit {
  cursosOpen = false;
  sidebarOpenMobile = false;

  constructor(public router: Router) {}

  ngOnInit() {
    this.cursosOpen = this.router.url.startsWith('/cursos');
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.cursosOpen = this.router.url.startsWith('/cursos');
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

  toggleCursos() {
    this.cursosOpen = !this.cursosOpen;
    this.router.navigate(['/cursos']);
  }

  toggleSidebarMobile() {
    this.sidebarOpenMobile = !this.sidebarOpenMobile;
  }

  closeSidebarMobile() {
    this.sidebarOpenMobile = false;
  }
}
