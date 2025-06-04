import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer p-4"
         (click)="navigate.emit(id)">
      <div class="relative">
        <img src="assets/curso.avif" [alt]="titulo" class="w-full h-32 object-cover rounded-lg mb-4">
        <span class="absolute top-2 right-2 px-2 py-1 bg-white/90 rounded-full text-xs font-medium">
          {{modalidad}}
        </span>
      </div>
      <h3 class="text-lg font-semibold text-gray-800 mb-2">{{titulo}}</h3>
      <div class="flex items-center mb-3">
        <img src="assets/Diana.png" alt="Profesor" class="w-6 h-6 rounded-full mr-2">
        <span class="text-sm text-gray-600">{{profesor}}</span>
      </div>
      <div class="flex justify-between items-center text-sm text-gray-500 mb-3">
        <span>{{lecciones}} lecciones</span>
        <span>{{duracion}}</span>
      </div>
      <div class="relative pt-2">
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-primario rounded-full h-2" [style.width.%]="progreso"></div>
        </div>
      </div>
      <div class="flex justify-between items-center mt-3">
        <span class="text-sm text-gray-600">Inicia: {{fecha}}</span>
        <span *ngIf="tipo === 'venta'" class="text-sm font-semibold text-primario">$200</span>
      </div>
    </div>
  `
})
export class Card {
  @Input() id!: number;
  @Input() titulo!: string;
  @Input() profesor!: string;
  @Input() lecciones!: string;
  @Input() duracion!: string;
  @Input() progreso!: number;
  @Input() fecha!: string;
  @Input() modalidad!: string;
  @Input() tipo!: string;
  @Output() navigate = new EventEmitter<number>();
}
