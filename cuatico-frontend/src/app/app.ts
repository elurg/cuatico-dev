import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Navbar } from './core/navbar/navbar';
import { Card } from './core/card/card';
import { Sidebar } from './core/sidebar/sidebar';
import { Searchbar } from "./core/searchbar/searchbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, FormsModule, CommonModule, Navbar],
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