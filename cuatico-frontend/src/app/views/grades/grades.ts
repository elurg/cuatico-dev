import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from 'src/app/components/header/header';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.html',
  standalone: true,
  imports: [CommonModule, Header],
})
export class Grades {
  calificaciones = [
    {
      id: 1,
      asignatura: 'Desarolla tu creatividad',
      fecha: 'May 15, 2025',
      nota: 100,
      estado: 'Cuatico!',
      teacherName: 'Diana Henao',
      teacherAvatar: 'assets/Diana.png',
      task: 'Módulo 1: Diseño de producto',
      message: '¡Muchas felicidades por tu excelente desempeño en la entrega 2 del Módulo 1: Diseño de producto! Quiero destacar especialmente la profundidad de tu análisis de usuarios, ya que demuestra una comprensión clara de las necesidades y expectativas del público objetivo. Tu trabajo refleja un gran esfuerzo por aplicar las metodologías presentadas en clase y tu enfoque es muy profesional. Además, la claridad en la presentación de tus conclusiones facilita la comprensión de los resultados y las recomendaciones propuestas. Sigue así, porque tu dedicación y atención al detalle te están llevando por el camino correcto. Si tienes alguna duda o sugerencia para próximas entregas, no dudes en consultarme. ¡Estoy muy orgullosa de tu progreso!',
      response: '',
      expanded: false
    },
    {
      id: 2,
      asignatura: 'Ux Research',
      fecha: 'Apr 20, 2025',
      nota: 68,
      estado: 'En proceso',
      teacherName: 'Diana Henao',
      teacherAvatar: 'assets/Diana.png',
      task: 'Módulo 1: Diseño de producto',
      message: '¡Muchas felicidades por tu excelente desempeño en la entrega 2 del Módulo 1: Diseño de producto! Quiero destacar especialmente la profundidad de tu análisis de usuarios, ya que demuestra una comprensión clara de las necesidades y expectativas del público objetivo. Tu trabajo refleja un gran esfuerzo por aplicar las metodologías presentadas en clase y tu enfoque es muy profesional. Además, la claridad en la presentación de tus conclusiones facilita la comprensión de los resultados y las recomendaciones propuestas. Sigue así, porque tu dedicación y atención al detalle te están llevando por el camino correcto. Si tienes alguna duda o sugerencia para próximas entregas, no dudes en consultarme. ¡Estoy muy orgullosa de tu progreso!',
      response: '',
      expanded: false
    },
    {
      id: 3,
      asignatura: 'Introduccion a la inteligencia artificial',
      fecha: 'Mar 10, 2025',
      nota: 48,
      estado: 'Suspenso',
     teacherName: 'Diana Henao',
      teacherAvatar: 'assets/Diana.png',
      task: 'Módulo 1: Diseño de producto',
      message: '¡Muchas felicidades por tu excelente desempeño en la entrega 2 del Módulo 1: Diseño de producto! Quiero destacar especialmente la profundidad de tu análisis de usuarios, ya que demuestra una comprensión clara de las necesidades y expectativas del público objetivo. Tu trabajo refleja un gran esfuerzo por aplicar las metodologías presentadas en clase y tu enfoque es muy profesional. Además, la claridad en la presentación de tus conclusiones facilita la comprensión de los resultados y las recomendaciones propuestas. Sigue así, porque tu dedicación y atención al detalle te están llevando por el camino correcto. Si tienes alguna duda o sugerencia para próximas entregas, no dudes en consultarme. ¡Estoy muy orgullosa de tu progreso!',
      response: '',
      expanded: false
    }
  ];

  abiertos: Record<number, boolean> = {};

  etiquetas: string[] = [];
  etiquetaSeleccionada: string | null = null;

  constructor() {
    // Extrae las asignaturas únicas para las burbujas de filtro
    this.etiquetas = [...new Set(this.calificaciones.map(c => c.asignatura))];
  }

  seleccionarEtiqueta(etiqueta: string | null) {
    this.etiquetaSeleccionada = etiqueta;
  }

  get calificacionesFiltradas() {
    if (!this.etiquetaSeleccionada) return this.calificaciones;
    return this.calificaciones.filter(c => c.asignatura === this.etiquetaSeleccionada);
  }

  toggleModulos(id: number) {
    this.abiertos[id] = !this.abiertos[id];
  }

  // Asocia color a cada asignatura
  asignaturaColorIdx(asignatura: string): number {
    return this.etiquetas.indexOf(asignatura);
  }

  getGradientColorByAsignatura(asignatura: string): string {
  const gradients = [
      '#a855f7, #ec4899', // morado a rosa
      '#3b82f6, #60a5fa', // azul
      '#f97316, #f59e0b', // naranja
      '#ef4444, #f87171', // rojo
      '#eab308, #fde047', // amarillo
      '#8b5cf6, #c084fc', // morado claro
      '#14b8a6, #2dd4bf'  // verde turquesa
  ];
  const idx = this.asignaturaColorIdx(asignatura);
  return gradients[idx % gradients.length];
}
}
