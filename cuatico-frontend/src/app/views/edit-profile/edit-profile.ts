import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LabelInput } from '../../core/label-input/label-input';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [FormsModule, RouterModule, LabelInput],
  templateUrl: './edit-profile.html'
})
export class EditProfile {
  // Variable para controlar la pestaña activa
  activeTab: string = 'profile';

  // Variables para el perfil
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
    bio: ''
  };

  // Variables para cambio de contraseña
  currentPassword = '';
  newPassword = '';
  confirmNewPassword = '';

  // Variables para notificaciones
  emailNotifications = false;
  pushNotifications = false;
  smsNotifications = false;

  // Variables para configuración de la cuenta
  language = 'es';
  theme = 'light';

  // Método para cambiar de pestaña
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
