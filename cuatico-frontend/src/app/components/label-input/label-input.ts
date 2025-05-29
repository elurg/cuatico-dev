import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-label-input',
  standalone: true,
  templateUrl: './label-input.html',
  styleUrls: ['./label-input.css']
})
export class LabelInput {
  @Input() label = '';
  @Input() id = '';
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() required = false;

  @Input() horizontal = false;

  @Input() model: any = '';
  @Output() modelChange = new EventEmitter<any>();

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.modelChange.emit(value);
  }
}
