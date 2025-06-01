import { Component } from '@angular/core';
import { Calendar } from '../../core/calendar/calendar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Notes } from '../notes/notes';
import { TeamTasks } from '../team-tasks/team-tasks';

interface EventoHorario {
  id: string;
  titulo: string;
  descripcion: string;
  dia: number; // 0 = Lunes, 1 = Martes, etc.
  horaInicio: string;
  horaFin: string;
  color: string;
}

@Component({
  selector: 'app-timetable',
  imports: [Calendar, FormsModule, CommonModule, Notes, TeamTasks],
  templateUrl: './timetable.html'
})
export class Timetable {
  // Control de pestañas
  tabActivo: string = 'calendario';
  
  // Array de horas para el horario
  horas: string[] = [
    '8:00 AM',
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM'
  ];

  // Array de días de la semana
  diasSemana: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  // Colores disponibles para eventos
  coloresDisponibles: {valor: string, nombre: string}[] = [
    {valor: 'bg-blue-200', nombre: 'Azul'},
    {valor: 'bg-green-200', nombre: 'Verde'},
    {valor: 'bg-yellow-200', nombre: 'Amarillo'},
    {valor: 'bg-red-200', nombre: 'Rojo'},
    {valor: 'bg-purple-200', nombre: 'Púrpura'}
  ];

  // Control del formulario modal
  mostrarFormulario: boolean = false;
  nuevoEvento: EventoHorario = this.inicializarNuevoEvento();

  // Array de eventos del horario
  eventos: EventoHorario[] = [
    {
      id: '1',
      titulo: 'Matemáticas',
      descripcion: 'Clase de Cálculo Diferencial',
      dia: 0, // Lunes
      horaInicio: '8:00 AM',
      horaFin: '10:00 AM',
      color: 'bg-blue-200'
    },
    {
      id: '2',
      titulo: 'Programación',
      descripcion: 'Laboratorio de Programación',
      dia: 2, // Miércoles
      horaInicio: '2:00 PM',
      horaFin: '4:00 PM',
      color: 'bg-green-200'
    }
  ];

  // Método para obtener eventos de una hora y día específicos
  getEventos(hora: string, dia: number): EventoHorario | null {
    return this.eventos.find(evento => 
      evento.dia === dia && 
      evento.horaInicio === hora
    ) || null;
  }

  // Método para eliminar un evento
  eliminarEvento(id: string) {
    this.eventos = this.eventos.filter(evento => evento.id !== id);
  }

  // Método para cerrar el formulario y reiniciar el nuevo evento
  cerrarFormulario() {
    this.mostrarFormulario = false;
    this.nuevoEvento = this.inicializarNuevoEvento();
  }

  // Método para inicializar un nuevo evento vacío
  inicializarNuevoEvento(): EventoHorario {
    return {
      id: Date.now().toString(),
      titulo: '',
      descripcion: '',
      dia: 0,
      horaInicio: this.horas[0],
      horaFin: this.horas[1],
      color: this.coloresDisponibles[0].valor
    };
  }

  // Método para abrir el formulario
  abrirFormulario() {
    this.nuevoEvento = this.inicializarNuevoEvento();
    this.mostrarFormulario = true;
  }

  // Método para agregar evento desde formulario
  agregarEventoDesdeFormulario() {
    if (this.nuevoEvento.titulo && this.nuevoEvento.dia >= 0 && this.nuevoEvento.horaInicio) {
      // Generar nuevo ID único
      this.nuevoEvento.id = Date.now().toString();
      // Crear copia del evento
      const nuevoEvento = { ...this.nuevoEvento };
      // Agregar al array de eventos
      this.eventos.push(nuevoEvento);
      // Cerrar formulario
      this.cerrarFormulario();
      // Forzar detección de cambios
      this.eventos = [...this.eventos];
    }
  }
}