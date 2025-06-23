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
  @Input() estado!: 'habilitado' | 'deshabilitado';
  @Input() nota?: number;

  expandido = false; // <- Nuevo estado

  constructor(private router: Router) {}

  toggleExpandir() {
    if (this.estado === 'habilitado') {
      this.expandido = !this.expandido;
    }
  }

  onClick() {
    this.router.navigate(['/modulo', this.numero]);
  }
}

