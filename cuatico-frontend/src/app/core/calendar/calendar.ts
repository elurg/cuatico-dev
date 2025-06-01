import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DiaCalendario {
  fecha: Date;
  esDelMesActual: boolean;
  tieneEvento: boolean;
  eventos?: string[];
  notas?: string; // Añadido campo para notas
}

@Component({
  selector: 'app-calendar',
  imports: [CommonModule, FormsModule],
  templateUrl: './calendar.html',
  
})
export class Calendar implements OnInit {
  @Input() size: 'small' | 'large' = 'large';
  diasSemana: string[] = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  meses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  dias: DiaCalendario[] = [];
  fechaActual: Date = new Date();
  mesActual: number = this.fechaActual.getMonth();
  anioActual: number = this.fechaActual.getFullYear();
  diaSeleccionado: DiaCalendario | null = null;
  notaActual: string = ''; // Para almacenar la nota que se está editando
  modoEdicion: boolean = false; // Para controlar si estamos en modo edición de notas
  
  // Simulación de almacenamiento de notas luego a base de datos
  notasAlmacenadas: Map<string, string> = new Map<string, string>();

  ngOnInit(): void {
    this.generarDiasCalendario();
    // Simulamos algunas notas
    this.inicializarNotasEjemplo();
  }

  inicializarNotasEjemplo(): void {
    const hoy = new Date();
    const fechaHoy = this.formatearFechaParaLlave(hoy);
    this.notasAlmacenadas.set(fechaHoy, 'Recordar revisar el proyecto de Angular');
    
    const manana = new Date();
    manana.setDate(manana.getDate() + 1);
    const fechaManana = this.formatearFechaParaLlave(manana);
    this.notasAlmacenadas.set(fechaManana, 'Reunión con el equipo de desarrollo');
  }

  // Formatea una fecha como string para usar como llave en el Map
  formatearFechaParaLlave(fecha: Date): string {
    return `${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDate()}`;
  }

  generarDiasCalendario(): void {
    this.dias = [];
    
    // Primer día del mes actual
    const primerDiaMes = new Date(this.anioActual, this.mesActual, 1);
    // Último día del mes actual
    const ultimoDiaMes = new Date(this.anioActual, this.mesActual + 1, 0);
    
    // Ajustamos el día de la semana para que el lunes sea 0 y el domingo sea 6
    const primerDiaSemana = (primerDiaMes.getDay() + 6) % 7;
    
    // Días del mes anterior para completar la primera semana
    if (primerDiaSemana > 0) {
      const ultimoDiaMesAnterior = new Date(this.anioActual, this.mesActual, 0);
      const diasMesAnterior = ultimoDiaMesAnterior.getDate();
      
      for (let i = primerDiaSemana - 1; i >= 0; i--) {
        const dia = diasMesAnterior - i;
        const fecha = new Date(this.anioActual, this.mesActual - 1, dia);
        const fechaLlave = this.formatearFechaParaLlave(fecha);
        this.dias.push({
          fecha,
          esDelMesActual: false,
          tieneEvento: Math.random() > 0.8, // Simulación de eventos aleatorios
          notas: this.notasAlmacenadas.get(fechaLlave) // Recuperamos notas si existen
        });
      }
    }
    
    // Días del mes actual
    for (let dia = 1; dia <= ultimoDiaMes.getDate(); dia++) {
      const fecha = new Date(this.anioActual, this.mesActual, dia);
      const fechaLlave = this.formatearFechaParaLlave(fecha);
      this.dias.push({
        fecha,
        esDelMesActual: true,
        tieneEvento: Math.random() > 0.8, // Simulación de eventos aleatorios
        notas: this.notasAlmacenadas.get(fechaLlave) // Recuperamos notas si existen
      });
    }
    
    // Ajustamos el día de la semana para que el lunes sea 0 y el domingo sea 6
    const ultimoDiaSemana = (ultimoDiaMes.getDay() + 6) % 7;
    
    // Días del mes siguiente para completar la última semana
    if (ultimoDiaSemana < 6) {
      for (let i = 1; i <= 6 - ultimoDiaSemana; i++) {
        const fecha = new Date(this.anioActual, this.mesActual + 1, i);
        const fechaLlave = this.formatearFechaParaLlave(fecha);
        this.dias.push({
          fecha,
          esDelMesActual: false,
          tieneEvento: Math.random() > 0.8, // Simulación de eventos aleatorios
          notas: this.notasAlmacenadas.get(fechaLlave) // Recuperamos notas si existen
        });
      }
    }
  }

  cambiarMes(incremento: number): void {
    this.mesActual += incremento;
    
    if (this.mesActual > 11) {
      this.mesActual = 0;
      this.anioActual++;
    } else if (this.mesActual < 0) {
      this.mesActual = 11;
      this.anioActual--;
    }
    
    this.generarDiasCalendario();
    this.diaSeleccionado = null; // Reseteamos el día seleccionado al cambiar de mes
    this.modoEdicion = false; // Salimos del modo edición al cambiar de mes
  }

  seleccionarDia(dia: DiaCalendario): void {
    this.diaSeleccionado = dia;
    this.notaActual = dia.notas || ''; // Inicializamos la nota actual con la nota del día o vacío
    this.modoEdicion = false; // Al seleccionar un día, comenzamos en modo visualización
  }

  // Método para activar el modo edición de notas
  activarEdicionNotas(): void {
    this.modoEdicion = true;
  }

  // Método para guardar la nota del día seleccionado
  guardarNota(): void {
    if (this.diaSeleccionado) {
      const fechaLlave = this.formatearFechaParaLlave(this.diaSeleccionado.fecha);
      
      // Actualizamos el mapa de notas
      if (this.notaActual.trim()) {
        this.notasAlmacenadas.set(fechaLlave, this.notaActual);
      } else {
        // Si la nota está vacía, la eliminamos del mapa
        this.notasAlmacenadas.delete(fechaLlave);
      }
      
      // Actualizamos la nota en el objeto del día seleccionado
      this.diaSeleccionado.notas = this.notaActual.trim() || undefined;
      
      // Salimos del modo edición
      this.modoEdicion = false;
    }
  }

  // Método para cancelar la edición de notas
  cancelarEdicionNota(): void {
    if (this.diaSeleccionado) {
      this.notaActual = this.diaSeleccionado.notas || '';
      this.modoEdicion = false;
    }
  }

  // Verificar si un día tiene notas
  tieneNotas(dia: DiaCalendario): boolean {
    return !!dia.notas && dia.notas.trim().length > 0;
  }

  esDiaActual(dia: DiaCalendario): boolean {
    const hoy = new Date();
    return dia.fecha.getDate() === hoy.getDate() &&
           dia.fecha.getMonth() === hoy.getMonth() &&
           dia.fecha.getFullYear() === hoy.getFullYear();
  }
}
