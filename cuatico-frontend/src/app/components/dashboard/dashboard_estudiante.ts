import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../core/navbar/navbar';
import { Card } from '../../core/card/card';
import { Sidebar } from '../../core/sidebar/sidebar';
import { Calendario } from '../../core/calendario/calendario';

@Component({
  selector: 'app-dashboard_estudiante',
  imports: [RouterOutlet, Navbar, Card, Sidebar, Calendario],
  templateUrl: './dashboard_estudiante.html'
})
export class Dashboard {
  protected title = 'cuatico-frontend';
}
