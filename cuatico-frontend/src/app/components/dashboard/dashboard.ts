import { Component } from '@angular/core';
import { Card } from '../../core/card/card';
import { Router, RouterModule } from '@angular/router';
import { MiniCalendar } from '../mini-calendar/mini-calendar';

@Component({
  selector: 'app-dashboard',
  imports: [Card, RouterModule , MiniCalendar],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  protected title = 'cuatico-frontend';
    user = {
    name: 'Juan Pérez',
    username: 'Juan',
    role: 'Product Designer',
    email: 'juan.perez@email.com',
    phone: '+34 600 123 456',
    address: 'Calle Falsa 123, Madrid',
    memberSince: 'Marzo 2021',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    projects: 245,
    followers: 1200,
    following: 36,
    profileProgress: 75, // Porcentaje de completado del perfil (0-100)
    linkedin: 'https://linkedin.com/in/tuperfil',
    github: 'https://github.com/tuperfil',
  };
   constructor(readonly router: Router) {}
    irADetalle(id: number) {
    this.router.navigate(['/cursos', id]);
  }
}
