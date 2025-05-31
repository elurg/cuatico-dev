import { Component } from '@angular/core';
import { Card } from '../../core/card/card';
import { Calendar } from '../../core/calendar/calendar';

@Component({
  selector: 'app-dashboard_estudiante',
  imports: [Card,Calendar],
  templateUrl: './dashboard_estudiante.html'
})
export class Dashboard {
  protected title = 'cuatico-frontend';
}
