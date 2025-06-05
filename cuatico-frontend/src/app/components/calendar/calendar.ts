import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface DiaCalendario {
  fecha: Date;
  esDelMesActual: boolean;
  tieneEvento: boolean;
  eventos?: string[];
  notas?: string;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calendar.html',
})
export class Calendar implements OnInit {
  @Input() size: 'small' | 'large' = 'large';
  @Output() diaSeleccionadoChange = new EventEmitter<DiaCalendario>();

  diasSemana: string[] = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  meses: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  dias: DiaCalendario[] = [];
  fechaActual: Date = new Date();
  mesActual: number = this.fechaActual.getMonth();
  anioActual: number = this.fechaActual.getFullYear();
  diaSeleccionado: DiaCalendario | null = null;
  notaActual: string = '';
  modoEdicion: boolean = false;

  notasAlmacenadas: Map<string, string> = new Map<string, string>();

  ngOnInit(): void {
    this.generarDiasCalendario();
    this.inicializarNotasEjemplo();
  }

  inicializarNotasEjemplo(): void {
    const hoy = new Date();
    this.notasAlmacenadas.set(this.formatearFechaParaLlave(hoy), 'Recordar revisar el proyecto de Angular');

    const manana = new Date();
    manana.setDate(manana.getDate() + 1);
    this.notasAlmacenadas.set(this.formatearFechaParaLlave(manana), 'Reunión con el equipo de desarrollo');
  }

  formatearFechaParaLlave(fecha: Date): string {
    return `${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDate()}`;
  }

  generarDiasCalendario(): void {
    this.dias = [];
    const primerDiaMes = new Date(this.anioActual, this.mesActual, 1);
    const ultimoDiaMes = new Date(this.anioActual, this.mesActual + 1, 0);
    const primerDiaSemana = (primerDiaMes.getDay() + 6) % 7;

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
          tieneEvento: Math.random() > 0.8,
          notas: this.notasAlmacenadas.get(fechaLlave),
        });
      }
    }

    for (let dia = 1; dia <= ultimoDiaMes.getDate(); dia++) {
      const fecha = new Date(this.anioActual, this.mesActual, dia);
      const fechaLlave = this.formatearFechaParaLlave(fecha);
      this.dias.push({
        fecha,
        esDelMesActual: true,
        tieneEvento: Math.random() > 0.8,
        notas: this.notasAlmacenadas.get(fechaLlave),
      });
    }

    const ultimoDiaSemana = (ultimoDiaMes.getDay() + 6) % 7;
    if (ultimoDiaSemana < 6) {
      for (let i = 1; i <= 6 - ultimoDiaSemana; i++) {
        const fecha = new Date(this.anioActual, this.mesActual + 1, i);
        const fechaLlave = this.formatearFechaParaLlave(fecha);
        this.dias.push({
          fecha,
          esDelMesActual: false,
          tieneEvento: Math.random() > 0.8,
          notas: this.notasAlmacenadas.get(fechaLlave),
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
    this.diaSeleccionado = null;
    this.modoEdicion = false;
  }

  seleccionarDia(dia: DiaCalendario): void {
    this.diaSeleccionado = dia;
    this.notaActual = dia.notas || '';
    this.modoEdicion = false;
    this.diaSeleccionadoChange.emit(dia);
  }

  activarEdicionNotas(): void {
    this.modoEdicion = true;
  }

  guardarNota(): void {
    if (this.diaSeleccionado) {
      const fechaLlave = this.formatearFechaParaLlave(this.diaSeleccionado.fecha);
      if (this.notaActual.trim()) {
        this.notasAlmacenadas.set(fechaLlave, this.notaActual);
      } else {
        this.notasAlmacenadas.delete(fechaLlave);
      }
      this.diaSeleccionado.notas = this.notaActual.trim() || undefined;
      this.modoEdicion = false;
    }
  }

  cancelarEdicionNota(): void {
    if (this.diaSeleccionado) {
      this.notaActual = this.diaSeleccionado.notas || '';
      this.modoEdicion = false;
    }
  }

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
