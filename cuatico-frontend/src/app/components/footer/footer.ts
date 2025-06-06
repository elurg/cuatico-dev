import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html'
})
export class Footer {
  currentYear = new Date().getFullYear();

  socialLinks = [
    {
      name: 'WhatsApp',
      iconClass: 'fab fa-whatsapp',
      url: 'https://wa.me/34617864986'
    },
    {
      name: 'Email',
      iconClass: 'fas fa-envelope',
      url: 'mailto:somoscuatico@gmail.com'
    },
    {
      name: 'Instagram',
      iconClass: 'fab fa-instagram',
      url: 'https://www.instagram.com/somoscuatico/?locale=es_ES%2F&hl=en'
    },
    {
      name: 'LinkedIn',
      iconClass: 'fab fa-linkedin',
      url: 'https://es.linkedin.com/company/somoscuatico'
    }
  ];
}
