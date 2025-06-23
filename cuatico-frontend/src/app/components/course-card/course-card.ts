import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Import UI components
import { Card, Button, Badge, Progress, Avatar, Icon } from '../ui';

export interface CourseCardData {
  id: number;
  title: string;
  instructor: string;
  instructorAvatar?: string;
  price?: number;
  modality: 'online' | 'in-person';
  duration?: string;
  lessons?: number;
  startDate?: string;
  progress?: number;
  thumbnail?: string;
  description?: string;
  category?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  rating?: number;
  enrolled?: boolean;
}

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    Card,
    Button,
    Badge,
    Progress,
    Avatar,
    Icon
  ],
  templateUrl: './course-card.html'
})
export class CourseCard {
  @Input() course!: CourseCardData;
  @Input() variant: 'compact' | 'detailed' = 'detailed';
  @Input() showProgress: boolean = false;
  @Input() showPrice: boolean = true;
  
  @Output() navigate = new EventEmitter<number>();
  @Output() enroll = new EventEmitter<number>();
  @Output() favorite = new EventEmitter<number>();

  onNavigate(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.navigate.emit(this.course.id);
  }

  onEnroll(): void {
    this.enroll.emit(this.course.id);
  }

  onFavorite(): void {
    this.favorite.emit(this.course.id);
  }

  getModalityVariant(): 'primary' | 'success' {
    return this.course.modality === 'online' ? 'primary' : 'success';
  }

  getModalityText(): string {
    return this.course.modality === 'online' ? 'Remoto' : 'Presencial';
  }

  getLevelVariant(): 'default' | 'info' | 'warning' | 'danger' {
    switch (this.course.level) {
      case 'beginner': return 'info';
      case 'intermediate': return 'warning';
      case 'advanced': return 'danger';
      default: return 'default';
    }
  }

  getLevelText(): string {
    switch (this.course.level) {
      case 'beginner': return 'Principiante';
      case 'intermediate': return 'Intermedio';
      case 'advanced': return 'Avanzado';
      default: return '';
    }
  }
}