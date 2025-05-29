import { Routes } from '@angular/router';
import { Courses } from './components/courses/courses';
import { Dashboard } from './views/dashboard/dashboard_estudiante';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'courses',
    component: Courses
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' }
];