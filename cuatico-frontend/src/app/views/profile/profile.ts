import { Component } from '@angular/core';
import { Sidebar } from "../../core/sidebar/sidebar";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [Sidebar, RouterModule],
  templateUrl: './profile.html'
})
export class Profile {
  user = {
    name: 'Juan Pérez',
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


  
}
