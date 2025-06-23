import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type AvatarStatus = 'online' | 'offline' | 'away' | 'busy' | 'none';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html'
})
export class Avatar {
  @Input() src?: string;
  @Input() alt: string = '';
  @Input() size: AvatarSize = 'md';
  @Input() status: AvatarStatus = 'none';
  @Input() fallbackText?: string;
  @Input() rounded: boolean = true;
  @Input() border: boolean = false;
  
  hasError: boolean = false;
  
  onError(): void {
    this.hasError = true;
  }
  
  get initials(): string {
    if (!this.fallbackText) return '';
    
    return this.fallbackText
      .split(' ')
      .map(word => word.charAt(0))
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }
  
  get containerClasses(): string {
    const baseClasses = 'relative inline-flex items-center justify-center';
    
    const sizeClasses = {
      xs: 'h-6 w-6 text-xs',
      sm: 'h-8 w-8 text-sm',
      md: 'h-10 w-10 text-base',
      lg: 'h-12 w-12 text-lg',
      xl: 'h-16 w-16 text-xl'
    };
    
    const roundedClasses = this.rounded ? 'rounded-full' : 'rounded-md';
    const borderClasses = this.border ? 'border-2 border-white' : '';
    
    return `${baseClasses} ${sizeClasses[this.size]} ${roundedClasses} ${borderClasses}`;
  }
  
  get statusClasses(): string {
    if (this.status === 'none') return 'hidden';
    
    const baseClasses = 'absolute bottom-0 right-0 block rounded-full ring-2 ring-white';
    
    const sizeClasses = {
      xs: 'h-1.5 w-1.5',
      sm: 'h-2 w-2',
      md: 'h-2.5 w-2.5',
      lg: 'h-3 w-3',
      xl: 'h-3.5 w-3.5'
    };
    
    const statusColorClasses = {
      online: 'bg-green-500',
      offline: 'bg-gray-400',
      away: 'bg-yellow-500',
      busy: 'bg-red-500',
      none: ''
    };
    
    return `${baseClasses} ${sizeClasses[this.size]} ${statusColorClasses[this.status]}`;
  }
  
  get fallbackClasses(): string {
    const baseClasses = 'flex items-center justify-center bg-gray-200 text-gray-600 font-medium';
    return `${baseClasses} ${this.containerClasses}`;
  }
}