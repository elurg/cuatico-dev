import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modulo',
  imports: [CommonModule],
  templateUrl: './modulo.html'
})
export class Modulo {
  @Input() titulo!: string;
  @Input() numero!: number;
  @Input() estado!: 'habilitado'| 'deshabilitado';
}
