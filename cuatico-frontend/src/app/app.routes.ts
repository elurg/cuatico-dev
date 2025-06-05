import { Routes } from '@angular/router';
import { Courses } from './views/courses/courses';
import { Dashboard } from './views/dashboard/dashboard';
import { Login } from './views/login/login';
import { Register } from './views/register/register';
import { Profile } from './views/profile/profile';
import { CourseId } from './views/course-id/course-id';
import { ModuleId } from './views/module-id/module-id';
import { Certificate } from './components/certificate/certificate';
import { EditProfile } from './views/edit-profile/edit-profile';
import { Badges } from './views/badges/badges';
import { Feedback } from './views/feedback/feedback';
import { Timetable } from './views/timetable/timetable';
import { Grades } from './views/grades/grades';
import { Calendar } from './components/calendar/calendar';
import { NotFound } from './views/not-found/not-found';
import { NewCourses } from './views/new-courses/new-courses';

export const routes: Routes = [
  {path: 'dashboard',component: Dashboard},
  {path: 'cursos',component: Courses},
  {path: 'login',component: Login},
  {path: 'register',component: Register},
  {path: 'perfil',component: Profile},
  {
    path: 'cursos/:id',
    component: CourseId,
    runGuardsAndResolvers: 'always'
  },
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