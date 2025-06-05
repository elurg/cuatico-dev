import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tarea {
  id: string;
  titulo: string;
  responsable: string;
  progreso: number;
  estado: 'Listo' | 'En curso' | 'Detenido';
  prioridad: 'Alta' | 'Media' | 'Baja';
}

@Component({
  selector: 'app-team-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './team-tasks.html'
})
export class TeamTasks {
  tareas: Tarea[] = [
    {
      id: '1',
      titulo: 'Trabajo ux',
      responsable: 'Ana',
      progreso: 80,
      estado: 'Listo',
      prioridad: 'Alta'
    },
    {
      id: '2',
      titulo: 'Ajustar los mensajes',
      responsable: 'Carlos',
      progreso: 45,
      estado: 'En curso',
      prioridad: 'Media'
    },
    {
      id: '3',
      titulo: 'Analisis modulo 1',
      responsable: 'David',
      progreso: 100,
      estado: 'Listo',
      prioridad: 'Baja'
    },
    {
      id: '4',
      titulo: 'Realizar investigación',
      responsable: 'Elena',
      progreso: 20,
      estado: 'Detenido',
      prioridad: 'Alta'
    }
  ];

  proximasTareas: Tarea[] = [
    {
      id: '5',
      titulo: 'Lanzar la app para iOS',
      responsable: 'Ana',
      progreso: 30,
      estado: 'En curso',
      prioridad: 'Alta'
    },
    {
      id: '6',
      titulo: 'Rediseñar la página de inicio',
      responsable: 'Carlos',
      progreso: 100,
      estado: 'Listo',
      prioridad: 'Media'
    },
    {
      id: '7',
      titulo: 'Estrategia de contenido ',
      responsable: 'David',
      progreso: 10,
      estado: 'Detenido',
      prioridad: 'Baja'
    },
    {
      id: '8',
      titulo: 'Desarrollar el plan de comunicación',
      responsable: 'Elena',
      progreso: 60,
      estado: 'En curso',
      prioridad: 'Alta'
    }
  ];

  getEstadoColor(estado: string): string {
    switch (estado) {
      case 'Listo': return 'bg-emerald-500';
      case 'En curso': return 'bg-orange-400';
      case 'Detenido': return 'bg-rose-500';
      default: return 'bg-gray-500';
    }
  }

  getPrioridadColor(prioridad: string): string {
    switch (prioridad) {
      case 'Alta': return 'bg-violet-600';
      case 'Media': return 'bg-violet-400';
      case 'Baja': return 'bg-violet-300';
      default: return 'bg-gray-400';
    }
  }

  getProgresoClase(progreso: number): string {
    return `w-[${progreso}%]`;
  }

  nuevaTarea: Tarea = {
    id: '',
    titulo: '',
    responsable: '',
    progreso: 0,
    estado: 'En curso',
    prioridad: 'Media'
  };
  mostrarFormulario: boolean = false;

  agregarTarea() {
    if (this.nuevaTarea.titulo && this.nuevaTarea.responsable) {
      const nueva = { ...this.nuevaTarea, id: (Date.now()).toString() };
      this.tareas.push(nueva);
      this.nuevaTarea = {
        id: '', titulo: '', responsable: '', progreso: 0, estado: 'En curso', prioridad: 'Media'
      };
      this.mostrarFormulario = false;
    }
  }

  eliminarTarea(id: string) {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }
}