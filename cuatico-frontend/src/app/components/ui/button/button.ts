import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html'
})
export class Button {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Output() clicked = new EventEmitter<void>();

  onClick(event: Event): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }

  get classes(): string {
    const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
    
    const sizeClasses = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 py-2',
      lg: 'h-12 px-6 py-3 text-base'
    };
    
    const variantClasses = {
      primary: 'bg-primario text-white hover:bg-primario/90 focus-visible:ring-primario',
      secondary: 'bg-secundario text-white hover:bg-secundario/90 focus-visible:ring-secundario',
      outline: 'border border-primario/30 text-primario hover:bg-primario/10 focus-visible:ring-primario',
      ghost: 'text-primario hover:bg-primario/10 focus-visible:ring-primario',
      link: 'text-primario underline-offset-4 hover:underline focus-visible:ring-primario p-0 h-auto',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600'
    };
    
    const disabledClasses = this.disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';
    const widthClasses = this.fullWidth ? 'w-full' : '';
    
    return `${baseClasses} ${sizeClasses[this.size]} ${variantClasses[this.variant]} ${disabledClasses} ${widthClasses}`;
  }
}