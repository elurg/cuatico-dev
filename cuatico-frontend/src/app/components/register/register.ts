import { Component } from '@angular/core';
import { LabelInput } from '../../core/label-input/label-input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [LabelInput,RouterLink],
  templateUrl: './register.html'
})
export class Register {

}
