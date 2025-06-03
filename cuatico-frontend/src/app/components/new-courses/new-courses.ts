import { Component } from '@angular/core';
import { Card } from '../../core/card/card';
import { Header } from '../header/header';

@Component({
  selector: 'app-new-courses',
  imports: [Card, Header],
  templateUrl: './new-courses.html'
})
export class NewCourses {

}
