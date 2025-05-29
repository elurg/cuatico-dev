import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Tarjeta } from './components/tarjeta/tarjeta';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Tarjeta],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'cuatico-frontend';
}
