import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card2.html'
})
export class Card2 {
  @Input() id: number = 0;
  @Input() titulo: string = '';
  @Input() profesor: string = '';
  @Input() lecciones: string = '';
  @Input() duracion: string = '';
  @Input() progreso: number = 0;
  @Input() fecha: string = '';
  @Input() modalidad: string = '';
  @Output() navigate = new EventEmitter<number>();

  onNavigate() {
    this.navigate.emit(this.id);
  }
}
