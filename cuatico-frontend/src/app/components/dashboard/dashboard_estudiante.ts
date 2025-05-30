import { Component } from '@angular/core';
import { Card } from '../../core/card/card';
import { Calendario } from '../../core/calendario/calendario';

@Component({
  selector: 'app-dashboard_estudiante',
  imports: [Card,Calendario],
  templateUrl: './dashboard_estudiante.html'
})
export class Dashboard {
  protected title = 'cuatico-frontend';
}
