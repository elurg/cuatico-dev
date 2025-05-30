import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../core/navbar/navbar';
import { Sidebar } from '../../core/sidebar/sidebar';
import { Card } from '../../core/card/card';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.html',
  imports: [CommonModule, Navbar, Sidebar, Card]
})
export class Courses {
}
