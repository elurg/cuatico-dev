import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Nota {
  id: string;
  titulo: string;
  contenido: string;
  fecha: Date;
  color: string;
  etiquetas: string[];
}

@Component({
  selector: 'app-notes',
  imports: [CommonModule, FormsModule],
  templateUrl: './notes.html'
})
export class Notes implements OnInit {
  notas: Nota[] = [];
  notaSeleccionada: Nota | null = null;
  modoEdicion: boolean = false;
  mostrarFormulario: boolean = false;
  nuevaNota: Nota = this.inicializarNuevaNota();
  etiquetaSeleccionada: string = '';
  etiquetasDisponibles: string[] = ['Estudio', 'Tarea', 'Proyecto', 'Examen', 'Recordatorio'];
  
  coloresDisponibles: {valor: string, nombre: string}[] = [
    {valor: 'bg-blue-100 border-blue-300', nombre: 'Azul'},
    {valor: 'bg-green-100 border-green-300', nombre: 'Verde'},
    {valor: 'bg-yellow-100 border-yellow-300', nombre: 'Amarillo'},
    {valor: 'bg-red-100 border-red-300', nombre: 'Rojo'},
    {valor: 'bg-purple-100 border-purple-300', nombre: 'Púrpura'},
    {valor: 'bg-pink-100 border-pink-300', nombre: 'Rosa'}
  ];

  ngOnInit(): void {
    this.inicializarNotasEjemplo();
  }

  inicializarNotasEjemplo(): void {
    this.notas = [
      {
        id: '1',
        titulo: 'Proyecto de Angular',
        contenido: 'Recordar revisar el proyecto de Angular y completar los componentes pendientes antes de la entrega final.',
        fecha: new Date(),
        color: 'bg-blue-100 border-blue-300',
        etiquetas: ['Proyecto', 'Tarea']
      },
      {
        id: '2',
        titulo: 'Examen de Matemáticas',
        contenido: 'Estudiar para el examen de cálculo diferencial. Temas: derivadas, integrales y aplicaciones.',
        fecha: new Date(new Date().setDate(new Date().getDate() + 5)),
        color: 'bg-red-100 border-red-300',
        etiquetas: ['Examen', 'Estudio']
      },
      {
        id: '3',
        titulo: 'Reunión de grupo',
        contenido: 'Reunión con el equipo de desarrollo para discutir el avance del proyecto y asignar nuevas tareas.',
        fecha: new Date(new Date().setDate(new Date().getDate() + 2)),
        color: 'bg-green-100 border-green-300',
        etiquetas: ['Recordatorio']
      }
    ];
  }

  inicializarNuevaNota(): Nota {
    return {
      id: Date.now().toString(),
      titulo: '',
      contenido: '',
      fecha: new Date(),
      color: this.coloresDisponibles[0].valor,
      etiquetas: []
    };
  }

  abrirFormulario(): void {
    this.nuevaNota = this.inicializarNuevaNota();
    this.mostrarFormulario = true;
  }

  cerrarFormulario(): void {
    this.mostrarFormulario = false;
  }

  agregarNota(): void {
    if (this.nuevaNota.titulo && this.nuevaNota.contenido) {
      // Generar nuevo ID único
      this.nuevaNota.id = Date.now().toString();
      // Crear copia de la nota
      const nuevaNota = { ...this.nuevaNota };
      // Agregar al array de notas
      this.notas.push(nuevaNota);
      // Cerrar formulario
      this.cerrarFormulario();
      // Forzar detección de cambios
      this.notas = [...this.notas];
    }
  }

  eliminarNota(id: string): void {
    this.notas = this.notas.filter(nota => nota.id !== id);
  }

  editarNota(nota: Nota): void {
    this.notaSeleccionada = { ...nota };
    this.modoEdicion = true;
  }

  guardarEdicion(): void {
    if (this.notaSeleccionada && this.notaSeleccionada.titulo && this.notaSeleccionada.contenido) {
      const index = this.notas.findIndex(n => n.id === this.notaSeleccionada!.id);
      if (index !== -1) {
        this.notas[index] = { ...this.notaSeleccionada };
        this.notas = [...this.notas]; // Forzar detección de cambios
      }
      this.cancelarEdicion();
    }
  }

  cancelarEdicion(): void {
    this.notaSeleccionada = null;
    this.modoEdicion = false;
  }

  toggleEtiqueta(etiqueta: string): void {
    if (!this.nuevaNota.etiquetas.includes(etiqueta)) {
      this.nuevaNota.etiquetas.push(etiqueta);
    } else {
      this.nuevaNota.etiquetas = this.nuevaNota.etiquetas.filter(e => e !== etiqueta);
    }
  }

  toggleEtiquetaEdicion(etiqueta: string): void {
    if (this.notaSeleccionada) {
      if (!this.notaSeleccionada.etiquetas.includes(etiqueta)) {
        this.notaSeleccionada.etiquetas.push(etiqueta);
      } else {
        this.notaSeleccionada.etiquetas = this.notaSeleccionada.etiquetas.filter(e => e !== etiqueta);
      }
    }
  }

  filtrarPorEtiqueta(etiqueta: string): void {
    this.etiquetaSeleccionada = etiqueta;
  }

  get notasFiltradas(): Nota[] {
    if (!this.etiquetaSeleccionada) return this.notas;
    return this.notas.filter(nota => nota.etiquetas.includes(this.etiquetaSeleccionada));
  }

  formatearFecha(fecha: Date): string {
    return fecha.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }
}