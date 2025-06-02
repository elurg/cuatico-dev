import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html'
})
export class Header {
  @Input() titulo: string = 'Título por defecto';
  @Input() iconoD: string = '';
}