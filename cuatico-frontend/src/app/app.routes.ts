import { Login } from './components/login/login';
import { Routes } from '@angular/router';
import { Courses } from './components/courses/courses';
import { Dashboard } from './components/dashboard/dashboard_estudiante';
import { Register } from './components/register/register';
import { Perfil } from './components/perfil/perfil';
import { Courseid } from './components/courseid/courseid';
import { Certificado } from './core/certificado/certificado';
import { Insignias } from './components/insignias/insignias';
import { Feedback } from './components/feedback/feedback';
import { Horario } from './components/horario/horario';
import { Calificaciones } from './components/calificaciones/calificaciones';
import { Tareas } from './components/tareas/tareas';
import { Moduloid } from './components/moduloid/moduloid';
import { EditProfile } from './components/edit-profile/edit-profile';

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

  {
    path: 'perfil',
    component: Perfil
  },

  {
    path: 'courses/:id',
    component: Courseid
  },

    {
    path: 'modulo/:id',
    component: Moduloid
  },


  {
    path: 'certificado',
    component: Certificado
  },

   {
    path: 'edit-profile',
    component: EditProfile
  },

   {
    path: 'insignias',
    component: Insignias
  },

  {
    path: 'feedback',
    component: Feedback
  },

  {
    path: 'horario',
    component: Horario
  },
  
    {
    path: 'calificaciones',
    component: Calificaciones
  },

    {
    path: 'tareas',
    component: Tareas
  },



  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: '**', redirectTo: 'login' }
];