import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


  
  
@Component({
  selector: 'app-edit-profile',
  imports: [BrowserModule, FormsModule, RouterModule],
  templateUrl: './edit-profile.html'
})
export class EditProfile {
  // Variable para controlar la pestaña activa
  activeTab: string = 'profile';

  // Variables para el perfil
  user = {
    name: '',
    email: '',
    phone: '',
    address: '',
    avatar: 'https://via.placeholder.com/150'
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