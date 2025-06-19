import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface CourseData {
  id: number;
  titulo: string;
  profesor: string;
  precio?: number;
  modalidad: 'presencial' | 'remoto';
  duracion?: string;
  lecciones?: string;
  fecha?: string;
  progreso?: number;
  thumbnail?: string;
  descripcion?: string;
}

@Component({
  selector: 'app-course-card-hybrid',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './course-card-hybrid.html'
})
export class CourseCardHybrid {
  @Input() course!: CourseData;
  @Input() showProgress: boolean = false;
  @Input() showPrice: boolean = true;
  @Input() variant: 'compact' | 'detailed' = 'detailed';
  
  @Output() navigate = new EventEmitter<number>();
  @Output() enroll = new EventEmitter<number>();

  onNavigate() {
    this.navigate.emit(this.course.id);
  }

  onEnroll() {
    this.enroll.emit(this.course.id);
  }

  getModalidadColor(): string {
    return this.course.modalidad === 'remoto' ? 'bg-blue-500' : 'bg-green-500';
  }

  getModalidadText(): string {
    return this.course.modalidad === 'remoto' ? 'Remoto' : 'Presencial';
  }

  getPriceModalidadText(): string {
    const modalidad = this.course.modalidad === 'remoto' ? 'Remoto' : 'Presencial';
    const precio = this.course.precio ? `€${this.course.precio}` : '';
    return precio ? `${modalidad} - ${precio}` : modalidad;
  }
}