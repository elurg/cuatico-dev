import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';
import { Sidebar } from '../sidebar/sidebar';

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
    {
      nombre: 'UX Research',
      categoria: 'Programación',
      descripcion: 'Queremos compartir contigo las metodologías y técnicas más utilizadas actualmente que nos ayudan a entender el comportamiento humano y poner el foco en las necesidades, comportamientos y expectativas de los usuarios.Aprenderás a realizar investigaciones efectivas que informen y mejoren el diseño de productos y servicios digitales.',
      profesor: 'Diana Henao',
      lecciones: 'XX',
      duracion: '16h',
    },
    {
      nombre: 'User Experience',
      categoria: 'Diseño',
      descripcion: 'Domina los principios de UX para diseñar productos digitales atractivos y funcionales.',
      profesor: 'Ana Gómez',
      lecciones: 18,
      duracion: '7h 45m',
    },
    {
      nombre: 'Análisis de Datos',
      categoria: 'Datos',
      descripcion: 'Descubre cómo analizar e interpretar datos para tomar mejores decisiones empresariales.',
      profesor: 'Luis Martínez',
      lecciones: 24,
      duracion: '9h 10m',
    }
  ];
}
