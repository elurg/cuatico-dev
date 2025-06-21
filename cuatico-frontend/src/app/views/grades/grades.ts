import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Header } from 'src/app/components/header/header';


interface Calificacion {

  id: number;
  asignatura: string;
  fecha: string;
  nota: number;
  teacherName: string;
  teacherAvatar: string;
  task: string;
  message: string;
  response: string;
  expanded?: boolean;
  RespuestaAbierta?: boolean;
  TextoRespuesta?: string;
}

@Component({
  selector: 'app-grades',
  templateUrl: './grades.html',
  standalone: true,
  imports: [CommonModule, Header,FormsModule],
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
      expanded: false,
      RespuestaAbierta: false,
      TextoRespuesta: ''
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
      expanded: false,
      RespuestaAbierta: false,
      TextoRespuesta: ''
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
      expanded: false,
      RespuestaAbierta: false,
      TextoRespuesta: ''
    }
  ];

  toggleExpansion(calificacion: Calificacion) {
    this.calificaciones.forEach(c => {
      if (c !== calificacion) {
        c.expanded = false;
      }
    });
    calificacion.expanded = !calificacion.expanded;
  }

  enviarRespuesta(calificacion: Calificacion) {
    if (!calificacion.TextoRespuesta || calificacion.TextoRespuesta.trim() === '') {
      alert('Por favor, escribe una respuesta.');
      return;
    }

    calificacion.response = calificacion.TextoRespuesta;
    calificacion.TextoRespuesta = '';
    calificacion.RespuestaAbierta = false;
    alert('¡Respuesta enviada!');
  }

  solicitarTutoria(): void {
    alert('¡Tutoría solicitada! Te contactaremos pronto.');
  }

  abiertos: Record<number, boolean> = {};
  etiquetas: string[] = [];
  etiquetaSeleccionada: string | null = null;

  constructor() {
    this.etiquetas = [...new Set(this.calificaciones.map(c => c.asignatura))];
    this.calificaciones.forEach(c => {
      c.RespuestaAbierta = false;
      c.TextoRespuesta = '';
    });
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

  asignaturaColorIdx(asignatura: string): number {
    return this.etiquetas.indexOf(asignatura);
  }

  getGradientColorByAsignatura(asignatura: string): string {
    const gradients = [
      '#a855f7, #ec4899',
      '#3b82f6, #60a5fa',
      '#f97316, #f59e0b',
      '#ef4444, #f87171',
      '#eab308, #fde047',
      '#8b5cf6, #c084fc',
      '#14b8a6, #2dd4bf'
    ];
    const idx = this.asignaturaColorIdx(asignatura);
    return gradients[idx % gradients.length];
  }
}
