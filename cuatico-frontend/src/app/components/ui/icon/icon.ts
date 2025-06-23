import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.html'
})
export class Icon {
  @Input() name!: string;
  @Input() size: IconSize = 'md';
  @Input() color?: string;
  
  get classes(): string {
    const baseClasses = this.name;
    
    const sizeClasses = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl'
    };
    
    // Verificar si el color ya incluye el prefijo 'text-'
    const colorClass = this.color 
      ? this.color.startsWith('text-') 
        ? this.color 
        : `text-${this.color}` 
      : '';
    
    return `${baseClasses} ${sizeClasses[this.size]} ${colorClass}`;
  }
}