import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../header/header';

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
      modulos: [
        { nombre: 'Introducion a la creatividad', nota: 100 },
        { nombre: 'Procesos creativos', nota: 100 },
        { nombre: 'Tecnicas de generacion de ideas', nota: 100 }
      ]
    },
    {
      id: 2,
      asignatura: 'Ux Research',
      fecha: 'Apr 20, 2025',
      nota: 68,
      estado: 'En proceso',
      modulos: [
        { nombre: 'Diseño de experiencia, intertaz y estrategia de contenido', nota: 100 },
        { nombre: 'Edad Trasnformacion digital', nota: 0 },
        { nombre: 'Direcion de producto', nota: 0 }
      ]
    },
    {
      id: 3,
      asignatura: 'Introduccion a la inteligencia artificial',
      fecha: 'Mar 10, 2025',
      nota: 48,
      estado: 'Suspenso',
      modulos: [
        { nombre: 'Fundamentos de la inteligencia artificial', nota: 35 },
        { nombre: 'Redes neuronales y deep learning', nota: 45 },
        { nombre: 'Vision por computador', nota: 65 }
      ]
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
