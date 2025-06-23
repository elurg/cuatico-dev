import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html'
})
export class Card {
  @Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
  @Input() border: boolean = true;
  @Input() shadow: 'none' | 'sm' | 'md' | 'lg' = 'md';
  @Input() rounded: 'none' | 'sm' | 'md' | 'lg' | 'full' = 'md';
  @Input() hover: boolean = true;
  @Input() clickable: boolean = false;
  
  get containerClasses(): string {
    const baseClasses = 'bg-white overflow-hidden';
    
    const paddingClasses = {
      none: '',
      sm: 'p-3',
      md: 'p-5',
      lg: 'p-7'
    };
    
    const borderClasses = this.border ? 'border border-gray-200' : '';
    
    const shadowClasses = {
      none: '',
      sm: 'shadow-sm',
      md: 'shadow',
      lg: 'shadow-lg'
    };
    
    const roundedClasses = {
      none: '',
      sm: 'rounded-sm',
      md: 'rounded-lg',
      lg: 'rounded-xl',
      full: 'rounded-3xl'
    };
    
    const hoverClasses = this.hover ? 'transition-all duration-300 hover:shadow-md' : '';
    const clickableClasses = this.clickable ? 'cursor-pointer' : '';
    
    return `${baseClasses} ${paddingClasses[this.padding]} ${borderClasses} ${shadowClasses[this.shadow]} ${roundedClasses[this.rounded]} ${hoverClasses} ${clickableClasses}`;
  }
}