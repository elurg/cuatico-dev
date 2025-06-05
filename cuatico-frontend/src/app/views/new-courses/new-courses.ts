import { Component } from '@angular/core';
import { Card2 } from '../../core/card2/card2';
import { Header } from '../header/header';

@Component({
  selector: 'app-new-courses',
  standalone: true,
  imports: [Card2, Header],
  templateUrl: './new-courses.html'
})
export class NewCourses {

}
