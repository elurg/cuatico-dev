import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Tarjeta } from '../../components/tarjeta/tarjeta';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Calendario } from '../../components/calendario/calendario';

@Component({
  selector: 'app-dashboard_estudiante',
  imports: [RouterOutlet, Navbar, Tarjeta, Sidebar, Calendario],
  templateUrl: './dashboard_estudiante.html'
})
export class Dashboard {
  protected title = 'cuatico-frontend';
}
