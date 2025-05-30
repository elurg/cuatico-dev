import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';
import { Sidebar } from '../sidebar/sidebar';
import { Card } from '../card/card';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.html',
  imports: [CommonModule, Navbar, Sidebar, Card]
})
export class Courses {
}
