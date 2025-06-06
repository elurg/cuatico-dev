import { Component } from '@angular/core';
import { Card2 } from '../../components/card2/card2';
import { Header } from 'src/app/components/header/header';

@Component({
  selector: 'app-new-courses',
  standalone: true,
  imports: [Card2, Header],
  templateUrl: './new-courses.html'
})
export class NewCourses {

}
