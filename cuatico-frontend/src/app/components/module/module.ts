import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module',
  imports: [CommonModule],
  templateUrl: './module.html',
  standalone: true
})
export class Module {
  @Input() titulo!: string;
  @Input() numero!: number;
  @Input() estado!: 'habilitado'| 'deshabilitado';
  @Input() nota?: number;

  constructor(private router: Router) {}

  onClick() {
    if (this.estado === 'habilitado') {
      this.router.navigate(['/modulo', this.numero]);
    }
  }
}
