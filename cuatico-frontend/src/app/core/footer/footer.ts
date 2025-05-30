import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html'
})
export class Footer {
  currentYear = new Date().getFullYear();
  socialLinks = [
    { name: 'Facebook', icon: 'facebook', url: '#' },
    { name: 'Instagram', icon: 'instagram', url: '#' },
    { name: 'LinkedIn', icon: 'linkedin', url: '#' }
  ];
}