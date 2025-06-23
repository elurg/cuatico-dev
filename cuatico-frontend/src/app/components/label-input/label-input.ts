import { Component, Input as InputDecorator, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Import UI components
import { InputComponent } from '../../components/ui';

@Component({
  selector: 'app-label-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputComponent],
  templateUrl: './label-input.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LabelInput),
      multi: true
    }
  ]
})
export class LabelInput implements ControlValueAccessor {
  @InputDecorator() label = '';
  @InputDecorator() id = '';
  @InputDecorator() type: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'checkbox' | 'select' | 'tel' | 'url' = 'text';
  @InputDecorator() placeholder = '';
  @InputDecorator() required = false;
  @InputDecorator() horizontal = false;
  @InputDecorator() options?: string[];
  @InputDecorator() model: any = '';
  @InputDecorator() hint?: string;
  @InputDecorator() error?: string;
  @InputDecorator() disabled = false;
  @InputDecorator() readonly = false;
  
  @Output() modelChange = new EventEmitter<any>();
  @Output() change = new EventEmitter<any>(); // Opcional, para mayor flexibilidad

  isSelectOpen = false;
  selectedOption: string | null = null;

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.model = value;
    this.selectedOption = value;
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggleSelect() {
    this.isSelectOpen = !this.isSelectOpen;
  }

  selectOption(option: string) {
    this.model = option;
    this.selectedOption = option;
    this.onChange(option);
    this.onTouched();
    this.modelChange.emit(option);
    this.change.emit(option);
    this.isSelectOpen = false;
  }

  // Para input, textarea, etc.
  onInput(event: any) {
    const value = event;
    this.model = value;
    this.onChange(value);
    this.onTouched();
    this.modelChange.emit(value);
    this.change.emit(value);
  }

  onCheckboxChange(event: Event): void {
    this.model = (event.target as HTMLInputElement).checked;
    this.modelChange.emit(this.model);
    this.onChange(this.model);
    this.onTouched();
  }

  onIconClick(): void {
    if (this.type === 'password') {
      this.togglePasswordVisibility();
    }
  }

  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  get currentInputType(): 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' {
    if (this.type === 'password' && this.showPassword) {
      return 'text';
    }
    
    // Asegurarse de que solo se devuelvan tipos compatibles con InputType
    const validTypes: Record<string, boolean> = {
      'text': true, 'email': true, 'password': true, 'number': true, 'tel': true, 
      'url': true, 'search': true, 'date': true, 'time': true, 'datetime-local': true
    };
    
    return validTypes[this.type] ? this.type as any : 'text';
  }

  get passwordIcon(): string {
    return this.showPassword ? 'fas fa-eye' : 'fas fa-eye-slash';
  }
}
