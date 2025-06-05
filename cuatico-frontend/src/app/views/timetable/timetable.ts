import { Component, ViewChild } from '@angular/core';
import { Calendar } from '../../components/calendar/calendar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Notes } from '../notes/notes';
import { TeamTasks } from '../team-tasks/team-tasks';
import { DiaCalendario } from '../../components/calendar/calendar';
import { TaskList } from '../task-list/task-list';
import { Task } from '../task-list/task.interface';

interface EventoHorario {
  id: string;
  titulo: string;
  descripcion: string;
  dia: number; // 0 = Lunes, 1 = Martes, etc.
  horaInicio: string;
  horaFin: string;
  color: string;
}

interface NotaCalendario {
  fecha: string; // formato YYYY-MM-DD
  contenido: string;
}

@Component({
  selector: 'app-timetable',
  standalone: true,
  imports: [Calendar, FormsModule, CommonModule, TaskList],
  templateUrl: './timetable.html'
})
export class Timetable {
  // Referencia al componente Calendar
  @ViewChild(Calendar) calendarioComponente!: Calendar;
  
  // Control de pestañas
  tabActivo: string = 'calendario';
  
  // Información del día seleccionado
  diaSeleccionadoFecha: string = '';
  diaSeleccionadoTieneEvento: boolean = false;
  diaSeleccionadoNotas: string = '';
  
  // Notas recientes para mostrar en el panel lateral
  notasRecientes: NotaCalendario[] = [
    { fecha: '2025-06-01', contenido: 'Recordar revisar el proyecto de Angular' },
    { fecha: '2025-06-02', contenido: 'Reunión con el equipo de desarrollo' }
  ];
  
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

  tasks: Task[] = [
    {
      id: 1,
      title: 'Completar ejercicio de algoritmos',
      description: 'Resolver los problemas de programación dinámica',
      type: 'algorithm',
      status: 'Pendiente',
      priority: 'alta',
      dueIn: '2 días',
      course: 'Algoritmos Avanzados'
    },
    {
      id: 2,
      title: 'Diseñar wireframes',
      description: 'Crear los wireframes para la nueva funcionalidad',
      type: 'design',
      status: 'En Progreso',
      priority: 'media',
      dueIn: '3 días',
      course: 'Diseño UX'
    },
    {
      id: 3,
      title: 'Investigación de mercado',
      description: 'Analizar la competencia y tendencias actuales',
      type: 'research',
      status: 'Pendiente',
      priority: 'baja',
      dueIn: '5 días',
      course: 'Marketing Digital'
    }
  ];

  // Método para actualizar la información del día seleccionado
  actualizarDiaSeleccionado(dia: DiaCalendario) {
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    this.diaSeleccionadoFecha = `${dia.fecha.getDate()} de ${meses[dia.fecha.getMonth()]}, ${dia.fecha.getFullYear()}`;
    this.diaSeleccionadoTieneEvento = dia.tieneEvento;
    this.diaSeleccionadoNotas = dia.notas || '';
  }
  
  // Método para agregar una nueva nota
  agregarNota(contenido: string) {
    if (this.calendarioComponente && this.calendarioComponente.diaSeleccionado) {
      const fecha = this.calendarioComponente.diaSeleccionado.fecha;
      this.calendarioComponente.notaActual = contenido;
      this.calendarioComponente.guardarNota();
      
      // Actualizar notas recientes
      const fechaFormateada = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`;
      const notaExistente = this.notasRecientes.findIndex(n => n.fecha === fechaFormateada);
      
      if (notaExistente >= 0) {
        this.notasRecientes[notaExistente].contenido = contenido;
      } else {
        this.notasRecientes.unshift({ fecha: fechaFormateada, contenido });
        // Mantener solo las 5 notas más recientes
        if (this.notasRecientes.length > 5) {
          this.notasRecientes.pop();
        }
      }
    }
  }

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
      // Si el usuario selecciona -1 (Todos los días), agregar el evento a cada día de la semana
      if (this.nuevoEvento.dia === -1) {
        for (let d = 0; d <= 4; d++) { // 0 = Lunes, 4 = Viernes
          const nuevoEvento = { ...this.nuevoEvento, id: Date.now().toString() + '-' + d, dia: d };
          this.eventos.push(nuevoEvento);
        }
      } else {
        // Generar nuevo ID único
        this.nuevoEvento.id = Date.now().toString();
        // Crear copia del evento
        const nuevoEvento = { ...this.nuevoEvento };
        // Agregar al array de eventos
        this.eventos.push(nuevoEvento);
      }
      // Cerrar formulario
      this.cerrarFormulario();
      // Forzar detección de cambios
      this.eventos = [...this.eventos];
    }
  }

  onTaskStatusChanged(updatedTask: Task) {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  onTaskAdded(newTask: Task) {
    this.tasks = [...this.tasks, newTask];
  }
}