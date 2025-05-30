import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulo',
  imports: [CommonModule],
  templateUrl: './modulo.html'
})
export class Modulo {
  @Input() titulo!: string;
  @Input() numero!: number;
  @Input() estado!: 'habilitado'| 'deshabilitado';

  constructor(private router: Router) {}

  onClick() {
    if (this.estado === 'habilitado') {
      this.router.navigate(['/modulo', this.numero]);
    }
  }
}
