import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-label-input',
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
  @Input() label = '';
  @Input() id = '';
  @Input() type: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'checkbox' | 'select' | 'tel' | 'url' = 'text';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() horizontal = false;
  @Input() options?: string[];
  @Input() model: any = '';
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
    // Implementar si necesitas soporte para disabled
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
  onInput(event: Event) {
    const value = (event.target as HTMLInputElement | HTMLTextAreaElement).value;
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


}
