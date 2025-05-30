import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  standalone: true,
  imports: [CommonModule]
})
export class Card {
  @Input() id!: number;
  @Input() titulo!: string;
  @Input() descripcion?: string;
  @Input() profesor?: string;
  @Input() fecha?: number | string;
  @Input() duracion?: number | string;
  @Input() precio?: number | string;
  @Input() tipo!: 'venta' | 'curso' | 'certificado';
  @Input() modalidad?: 'presencial' | 'remoto' | 'ninguno';

  @Output() navigate = new EventEmitter<number>();

  onClick() {
    this.navigate.emit(this.id);
  }
}
