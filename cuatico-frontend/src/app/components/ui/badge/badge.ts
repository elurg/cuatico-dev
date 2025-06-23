import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'remoto' | 'presencial';
type BadgeSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.html'
})
export class Badge {
  @Input() variant: BadgeVariant = 'default';
  @Input() size: BadgeSize = 'md';
  @Input() rounded: boolean = true;
  @Input() icon?: string;
  @Input() customClass?: string;
  @Input() isRecommended: boolean = true;
  
  get classes(): string {
    const baseClasses = 'inline-flex items-center font-medium';
    
    const variantClasses = {
      default: 'bg-gray-100 text-gray-800',
      primary: 'bg-primario/10 text-primario',
      secondary: 'bg-secundario/10 text-secundario',
      success: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-400 text-yellow-800',
      danger: 'bg-red-100 text-red-800',
      info: 'bg-blue-100 text-blue-800',
      remoto: this.isRecommended ? 'bg-yellow-400 text-yellow-800' : 'bg-primario text-white',
      presencial: 'bg-green-500 text-white'
    };
    
    const sizeClasses = {
      sm: 'text-xs px-2 py-0.5',
      md: 'text-sm px-2.5 py-0.5',
      lg: 'text-base px-3 py-1'
    };
    
    const roundedClasses = this.rounded ? 'rounded-full' : 'rounded';
    
    // Si hay una clase personalizada, la usamos en lugar de la clase de variante
    const variantClass = this.customClass || variantClasses[this.variant];
    
    return `${baseClasses} ${variantClass} ${sizeClasses[this.size]} ${roundedClasses}`;
  }
}