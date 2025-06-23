import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type ProgressSize = 'sm' | 'md' | 'lg';
type ProgressVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress.html'
})
export class Progress {
  @Input() value: number = 0;
  @Input() max: number = 100;
  @Input() size: ProgressSize = 'md';
  @Input() variant: ProgressVariant = 'primary';
  @Input() showLabel: boolean = false;
  @Input() animated: boolean = false;
  @Input() striped: boolean = false;
  
  get percentage(): number {
    return Math.min(100, Math.max(0, (this.value / this.max) * 100));
  }
  
  get containerClasses(): string {
    const baseClasses = 'w-full bg-gray-200 rounded-full overflow-hidden';
    
    const sizeClasses = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-4'
    };
    
    return `${baseClasses} ${sizeClasses[this.size]}`;
  }
  
  get barClasses(): string {
    const baseClasses = 'h-full transition-all duration-300 ease-out';
    
    const variantClasses = {
      default: 'bg-gray-500',
      primary: 'bg-primario',
      secondary: 'bg-secundario',
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      danger: 'bg-red-500'
    };
    
    const animatedClasses = this.animated ? 'animate-pulse' : '';
    const stripedClasses = this.striped ? 'bg-gradient-to-r from-transparent to-white/20 bg-[length:20px_20px]' : '';
    
    return `${baseClasses} ${variantClasses[this.variant]} ${animatedClasses} ${stripedClasses}`;
  }
  
  get labelClasses(): string {
    const baseClasses = 'text-xs font-medium text-right';
    return baseClasses;
  }
}