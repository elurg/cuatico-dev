import { Routes } from '@angular/router';
import { Courses } from './components/courses/courses';
import { Dashboard } from './components/dashboard/dashboard';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Profile } from './components/profile/profile';
import { CourseId } from './components/course-id/course-id';
import { ModuleId } from './components/module-id/module-id';
import { Certificate } from './core/certificate/certificate';
import { EditProfile } from './components/edit-profile/edit-profile';
import { Badges } from './components/badges/badges';
import { Feedback } from './components/feedback/feedback';
import { Timetable } from './components/timetable/timetable';
import { Grades } from './components/grades/grades';
import { Calendar } from './core/calendar/calendar';
import { NotFound } from './components/not-found/not-found';
import { NewCourses } from './components/new-courses/new-courses';

export const routes: Routes = [
  {path: 'dashboard',component: Dashboard},
  {path: 'cursos',component: Courses},
  {path: 'login',component: Login},
  {path: 'register',component: Register},
  {path: 'perfil',component: Profile},
  {path: 'cursos/:id',component: CourseId},
  {path: 'modulo/:id',component: ModuleId},
  {path: 'certificado',component: Certificate},
  {path: 'editar-perfil',component: EditProfile},
  {path: 'insignias',component: Badges},
  {path: 'feedback',component: Feedback},
  {path: 'organizacion',component: Timetable},
  {path: 'calificaciones',component: Grades},
  {path: 'calendario',component: Calendar},
  {path: '404',component: NotFound},
  {path: 'nuevoscursos',component: NewCourses},

  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: '**', redirectTo: '404' }
];