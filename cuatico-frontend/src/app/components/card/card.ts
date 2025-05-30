import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  standalone: true,
  imports: [CommonModule]
})
export class Card {
  @Input() titulo!: string;
  @Input() descripcion?: string;
  @Input() profesor?: string;
  @Input() lecciones?: number | string;
  @Input() duracion?: number | string;
  @Input() precio?: number | string;
  @Input() tipo!: 'venta' | 'curso' | 'certificado';
}
