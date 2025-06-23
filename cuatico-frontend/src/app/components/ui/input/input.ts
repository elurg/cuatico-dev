import { Component, Input, forwardRef, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';

type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local';
type InputSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @ViewChild('inputElement') inputElement!: ElementRef;
  
  @Input() type: InputType = 'text';
  @Input() label?: string;
  @Input() placeholder: string = '';
  @Input() hint?: string;
  @Input() error?: string;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() required: boolean = false;
  @Input() size: InputSize = 'md';
  @Input() fullWidth: boolean = true;
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() clearable: boolean = false;
  
  @Output() iconClick = new EventEmitter<void>();
  @Output() cleared = new EventEmitter<void>();
  
  value: any = '';
  focused: boolean = false;
  touched: boolean = false;
  
  onChange: any = () => {};
  onTouched: any = () => {};
  
  focus(): void {
    this.inputElement.nativeElement.focus();
  }
  
  onFocus(): void {
    this.focused = true;
  }
  
  onBlur(): void {
    this.focused = false;
    this.touched = true;
    this.onTouched();
  }
  
  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
  }
  
  onIconClicked(): void {
    this.iconClick.emit();
  }
  
  onClear(): void {
    this.value = '';
    this.onChange(this.value);
    this.cleared.emit();
    this.focus();
  }
  
  writeValue(value: any): void {
    this.value = value;
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  
  get hasValue(): boolean {
    return this.value !== undefined && this.value !== null && this.value !== '';
  }
  
  get containerClasses(): string {
    const baseClasses = 'relative';
    const widthClasses = this.fullWidth ? 'w-full' : '';
    
    return `${baseClasses} ${widthClasses}`;
  }
  
  get inputClasses(): string {
    const baseClasses = 'block rounded-lg border bg-white text-gray-900 focus:outline-none focus:ring-2 transition-all';
    
    const sizeClasses = {
      sm: 'text-xs px-3 py-1.5',
      md: 'text-sm px-4 py-2',
      lg: 'text-base px-5 py-3'
    };
    
    const stateClasses = this.error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
      : 'border-gray-300 focus:border-primario focus:ring-primario/20';
    
    const disabledClasses = this.disabled ? 'bg-gray-100 cursor-not-allowed opacity-75' : '';
    const widthClasses = this.fullWidth ? 'w-full' : '';
    const paddingLeftClasses = this.icon && this.iconPosition === 'left' ? 'pl-10' : '';
    const paddingRightClasses = (this.icon && this.iconPosition === 'right') || this.clearable ? 'pr-10' : '';
    
    return `${baseClasses} ${sizeClasses[this.size]} ${stateClasses} ${disabledClasses} ${widthClasses} ${paddingLeftClasses} ${paddingRightClasses}`;
  }
  
  get labelClasses(): string {
    const baseClasses = 'block text-sm font-medium text-gray-700 mb-1';
    return baseClasses;
  }
  
  get hintClasses(): string {
    const baseClasses = 'mt-1 text-xs text-gray-500';
    return baseClasses;
  }
  
  get errorClasses(): string {
    const baseClasses = 'mt-1 text-xs text-red-500';
    return baseClasses;
  }
  
  get leftIconClasses(): string {
    const baseClasses = 'absolute left-3 top-1/2 -translate-y-1/2 text-gray-500';
    return baseClasses;
  }
  
  get rightIconClasses(): string {
    const baseClasses = 'absolute right-3 top-1/2 -translate-y-1/2 text-gray-500';
    return baseClasses;
  }
}