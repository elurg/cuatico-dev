import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar'; 
import { Sidebar } from '../sidebar/sidebar'; // Sidebar is not exported from navbar


@Component({
  selector: 'app-courses',
  templateUrl: './courses.html',
  styleUrls: ['./courses.css'],
  standalone: true,
  imports: [CommonModule, Navbar, Sidebar]
})
export class Courses {
  title = 'Lista de Cursos';
  courses = [
    { nombre: 'Matemáticas', profesor: 'Juan Pérez' },
    { nombre: 'Historia', profesor: 'Ana Gómez' },
    { nombre: 'Ciencias', profesor: 'Luis Martínez' }
  ];
}