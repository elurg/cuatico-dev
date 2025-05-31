import { Component } from '@angular/core';
import { LabelInput } from '../../core/label-input/label-input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [LabelInput, RouterLink],
  templateUrl: './login.html'
})
export class Login {

}
