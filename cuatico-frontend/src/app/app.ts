import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Tarjeta } from './components/tarjeta/tarjeta';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Tarjeta, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'cuatico-frontend';
}
