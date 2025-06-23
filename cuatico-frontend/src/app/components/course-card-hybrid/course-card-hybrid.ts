import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Import UI components
import { Card, Button, Badge, Avatar, Icon } from '../../components/ui';

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
  imports: [
    CommonModule, 
    RouterModule,
    Card,
    Button,
    Badge,
    Avatar,
    Icon
  ],
  templateUrl: './course-card-hybrid.html'
})
export class CourseCardHybrid {
  @Input() course!: CourseData;
  @Input() showProgress: boolean = false;
  @Input() showPrice: boolean = true;
  @Input() variant: 'compact' | 'detailed' = 'detailed';
  
  @Output() navigate = new EventEmitter<number>();
  @Output() enroll = new EventEmitter<number>();

  onNavigate(): void {
    this.navigate.emit(this.course.id);
  }

  onEnroll(): void {
    this.enroll.emit(this.course.id);
  }

  getModalidadVariant(): 'primary' | 'success' {
    // Mantenemos los colores originales: remoto es primary, presencial es success
    return this.course.modalidad === 'remoto' ? 'primary' : 'success';
  }

  getModalidadText(): string {
    return this.course.modalidad === 'remoto' ? 'Remoto' : 'Presencial';
  }

  getPriceModalidadText(): string {
    const modalidad = this.course.modalidad === 'remoto' ? 'Remoto' : 'Presencial';
    const precio = this.course.precio ? `${this.course.precio}€` : '';
    return precio ? `${modalidad}/${precio}` : modalidad;
  }
}