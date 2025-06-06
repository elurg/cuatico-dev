import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, FormsModule, CommonModule, Navbar, Footer],
  templateUrl: './app.html',
 })
export class App {
  usuario = { nombre: '', email: '', telefono: '' };
  protected title = 'cuatico-frontend';
  currentRoute: string = '';

  constructor(public router: Router) {
       
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }
}