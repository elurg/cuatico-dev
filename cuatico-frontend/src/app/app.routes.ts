import { Login } from './views/login/login';
import { Routes } from '@angular/router';
import { Courses } from './components/courses/courses';
import { Dashboard } from './views/dashboard/dashboard_estudiante';
import { Register } from './views/register/register';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'courses',
    component: Courses
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'register',
    component: Register
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  {path: '**', redirectTo: 'login' }
];