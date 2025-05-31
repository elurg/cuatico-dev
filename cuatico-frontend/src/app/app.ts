import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Navbar } from './core/navbar/navbar';
import { Sidebar } from './core/sidebar/sidebar';
import { Footer } from './core/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, FormsModule, CommonModule, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  usuario = { nombre: '' , email: '', telefono: ''};
  protected title = 'cuatico-frontend';
  currentRoute: string = '';

  constructor(public router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }
}