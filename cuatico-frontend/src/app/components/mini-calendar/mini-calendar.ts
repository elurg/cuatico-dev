import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'mini-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mini-calendar.html',
  host: {
    'class': 'block w-full max-w-full transition-all duration-300'
  }
})
export class MiniCalendar {
  @Input() size: 'small' | 'large' = 'large';
  @Output() dateSelected = new EventEmitter<Date>();
  
  // Propiedades para el HTML externo
  mesActual: number = new Date().getMonth();
  anioActual: number = new Date().getFullYear();
  diaSeleccionado: any = null;
  dias: any[] = [];
  modoEdicion = false;
  notaActual = '';
  
  // Propiedades internas
  currentDate = new Date();
  selectedDate: Date | null = null;
  editMode = false;
  currentNote = '';
  
  // Propiedades para animaciones
  animacionCambioMes = false;
  
  // Datos del calendario
  meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  monthNames = this.meses; // Para compatibilidad
  diasSemana: string[] = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
  
  // Almacenamiento de eventos y notas
  events: {[key: string]: string[]} = {};
  notes: {[key: string]: string} = {};
  
  constructor() {
    this.generarDiasCalendario();
  }
  
  // Métodos para el HTML externo
  generarDiasCalendario(): void {
    const primerDiaMes = new Date(this.anioActual, this.mesActual, 1).getDay();
    const diasEnMes = new Date(this.anioActual, this.mesActual + 1, 0).getDate();
    
    // Ajustar para que la semana comience en lunes (1)
    // Si primerDiaMes es 0 (domingo), entonces necesitamos 6 días del mes anterior
    // Si no, necesitamos primerDiaMes - 1 días
    const diasAntesMes = primerDiaMes === 0 ? 6 : primerDiaMes - 1;
    
    // Calcular días del mes anterior
    const diasMesAnterior = new Date(this.anioActual, this.mesActual, 0).getDate();
    
    this.dias = [];
    
    // Días del mes anterior
    for (let i = diasMesAnterior - diasAntesMes + 1; i <= diasMesAnterior; i++) {
      const fecha = new Date(this.anioActual, this.mesActual - 1, i);
      this.dias.push({
        fecha: fecha,
        esDelMesActual: false,
        tieneEvento: this.hasEvent(i)
      });
    }
    
    // Días del mes actual
    for (let i = 1; i <= diasEnMes; i++) {
      const fecha = new Date(this.anioActual, this.mesActual, i);
      this.dias.push({
        fecha: fecha,
        esDelMesActual: true,
        tieneEvento: this.hasEvent(i)
      });
    }
    
    // Calcular el número de semanas necesarias para este mes
    // Dividimos el total de días (días del mes anterior + días del mes actual) por 7
    // y redondeamos hacia arriba para obtener el número de semanas completas
    const totalDiasActuales = this.dias.length;
    let semanasNecesarias = Math.ceil(totalDiasActuales / 7);
    
    // Optimización: Limitar a 5 semanas cuando sea posible para reducir espacio vacío
    // Solo completamos 6 semanas si realmente es necesario
    const ultimoDiaMes = new Date(this.anioActual, this.mesActual + 1, 0).getDay();
    const diasUltimaSemana = ultimoDiaMes === 0 ? 7 : ultimoDiaMes;
    
    // Si el último día del mes cae en viernes o antes, y tenemos 6 semanas, podemos reducir a 5
    if (semanasNecesarias > 5 && diasUltimaSemana <= 5) {
      semanasNecesarias = 5;
    }
    
    // Calculamos cuántos días del mes siguiente necesitamos para completar las semanas necesarias
    const diasSiguienteMes = (semanasNecesarias * 7) - totalDiasActuales;
    
    // Días del mes siguiente (solo los necesarios para completar las semanas requeridas)
    for (let i = 1; i <= diasSiguienteMes; i++) {
      const fecha = new Date(this.anioActual, this.mesActual + 1, i);
      this.dias.push({
        fecha: fecha,
        esDelMesActual: false,
        tieneEvento: false
      });
    }
    
    // Actualizar también currentDate para mantener sincronizados ambos modelos
    this.currentDate = new Date(this.anioActual, this.mesActual, 1);
  }
  
  cambiarMes(incremento: number): void {
    // Evitar múltiples clics rápidos que puedan causar comportamiento errático
    if (this.animacionCambioMes) return;
    
    // Activar animación de transición
    this.animacionCambioMes = true;
    
    // Calcular nueva fecha
    let nuevaFecha = new Date(this.anioActual, this.mesActual + incremento, 1);
    this.mesActual = nuevaFecha.getMonth();
    this.anioActual = nuevaFecha.getFullYear();
    
    // Generar el calendario con breve retraso para permitir la animación
    setTimeout(() => {
      this.generarDiasCalendario();
      
      // Si hay un día seleccionado y cambiamos de mes, lo deseleccionamos
      if (this.diaSeleccionado) {
        this.diaSeleccionado = null;
        this.selectedDate = null;
      }
      
      // Desactivar la animación después de completar la transición
      setTimeout(() => {
        this.animacionCambioMes = false;
      }, 200);
    }, 100);
  }
  
  seleccionarDia(dia: any): void {
    if (!dia) return;
    
    // Aseguramos que la fecha seleccionada sea correcta
    this.selectedDate = new Date(dia.fecha);
    
    // Emitimos el evento de selección
    this.dateSelected.emit(this.selectedDate);
    
    // Efecto visual de selección temporal
    this.diaSeleccionado = dia;
    setTimeout(() => {
      this.diaSeleccionado = null;
    }, 300);
  }
  
  // Método para ir al mes actual
  irAlMesActual(): void {
    // Evitar múltiples clics rápidos
    if (this.animacionCambioMes) return;
    
    // Activar animación
    this.animacionCambioMes = true;
    
    const fechaActual = new Date();
    this.mesActual = fechaActual.getMonth();
    this.anioActual = fechaActual.getFullYear();
    
    setTimeout(() => {
      this.generarDiasCalendario();
      
      // Desactivar animación después de un breve retraso
      setTimeout(() => {
        this.animacionCambioMes = false;
      }, 200);
    }, 100);
  }
  
  esDiaActual(dia: any): boolean {
    const hoy = new Date();
    return dia.fecha.getDate() === hoy.getDate() && 
           dia.fecha.getMonth() === hoy.getMonth() && 
           dia.fecha.getFullYear() === hoy.getFullYear();
  }
  
  tieneNotas(dia: any): boolean {
    if (!dia) return false;
    const key = `${dia.fecha.getFullYear()}-${dia.fecha.getMonth()}-${dia.fecha.getDate()}`;
    return !!this.notes[key] && this.notes[key].trim().length > 0;
  }
  
  activarEdicionNotas(): void {
    this.modoEdicion = true;
    this.editMode = true;
    
    if (this.diaSeleccionado) {
      const key = `${this.diaSeleccionado.fecha.getFullYear()}-${this.diaSeleccionado.fecha.getMonth()}-${this.diaSeleccionado.fecha.getDate()}`;
      this.notaActual = this.notes[key] || '';
      this.currentNote = this.notaActual;
    }
  }
  
  cancelarEdicionNota(): void {
    this.modoEdicion = false;
    this.editMode = false;
    this.notaActual = '';
    this.currentNote = '';
  }
  
  guardarNota(): void {
    if (this.diaSeleccionado) {
      const key = `${this.diaSeleccionado.fecha.getFullYear()}-${this.diaSeleccionado.fecha.getMonth()}-${this.diaSeleccionado.fecha.getDate()}`;
      
      if (this.notaActual.trim()) {
        this.notes[key] = this.notaActual.trim();
        this.diaSeleccionado.notas = this.notaActual.trim();
      } else {
        delete this.notes[key];
        delete this.diaSeleccionado.notas;
      }
    }
    
    this.modoEdicion = false;
    this.editMode = false;
    this.notaActual = '';
    this.currentNote = '';
  }

  getCurrentMonthName(): string {
    return this.meses[this.mesActual];
  }

  getCurrentYear(): number {
    return this.anioActual;
  }

  getDaysInMonth(): (number | null)[] {
    // Este método se mantiene para compatibilidad, pero ahora usamos this.dias
    const year = this.anioActual;
    const month = this.mesActual;
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days: (number | null)[] = Array(42).fill(null); // 6 semanas x 7 días
    
    for (let i = 0; i < daysInMonth; i++) {
      days[i + firstDay] = i + 1;
    }
    
    return days;
  }

  getDateClass(date: number | null): string {
    if (!date) return 'text-transparent p-2';
    
    const baseClass = 'relative w-8 h-8 rounded-full text-sm hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center';
    
    const isToday = this.isToday(date);
    const isSelected = this.isSelected(date);
    const hasEvent = this.hasEvent(date);
    
    if (isSelected) {
      return `${baseClass} bg-primario text-white hover:bg-primario-600 shadow-md`;
    }
    
    if (isToday) {
      return `${baseClass} border-2 border-primario text-primario hover:bg-primario hover:text-white`;
    }
    
    if (hasEvent) {
      return `${baseClass} text-gray-700 font-medium`;
    }
    
    return `${baseClass} text-gray-700`;
  }

  isToday(date: number): boolean {
    const today = new Date();
    return date === today.getDate() && 
           this.mesActual === today.getMonth() && 
           this.anioActual === today.getFullYear();
  }

  isSelected(date: number): boolean {
    if (!this.selectedDate) return false;
    return date === this.selectedDate.getDate() && 
           this.mesActual === this.selectedDate.getMonth() && 
           this.anioActual === this.selectedDate.getFullYear();
  }

  selectDate(date: number | null): void {
    if (!date) return;
    this.selectedDate = new Date(
      this.anioActual,
      this.mesActual,
      date
    );
    
    // Buscar el día correspondiente en this.dias
    const diaSeleccionado = this.dias.find(dia => 
      dia.fecha.getDate() === date && 
      dia.fecha.getMonth() === this.mesActual && 
      dia.fecha.getFullYear() === this.anioActual
    );
    
    if (diaSeleccionado) {
      this.seleccionarDia(diaSeleccionado);
    } else {
      this.dateSelected.emit(this.selectedDate);
    }
  }

  nextMonth(): void {
    // Implementación independiente para evitar recursión con cambiarMes
    if (this.animacionCambioMes) return;
    
    let nuevaFecha = new Date(this.anioActual, this.mesActual + 1, 1);
    this.mesActual = nuevaFecha.getMonth();
    this.anioActual = nuevaFecha.getFullYear();
    this.generarDiasCalendario();
    
    if (this.diaSeleccionado) {
      this.diaSeleccionado = null;
      this.selectedDate = null;
    }
  }

  previousMonth(): void {
    // Implementación independiente para evitar recursión con cambiarMes
    if (this.animacionCambioMes) return;
    
    let nuevaFecha = new Date(this.anioActual, this.mesActual - 1, 1);
    this.mesActual = nuevaFecha.getMonth();
    this.anioActual = nuevaFecha.getFullYear();
    this.generarDiasCalendario();
    
    if (this.diaSeleccionado) {
      this.diaSeleccionado = null;
      this.selectedDate = null;
    }
  }
  // Métodos para gestionar eventos
  hasEvent(date: number | null): boolean {
    if (!date) return false;
    const key = this.getDateKey(date);
    return !!this.events[key] && this.events[key].length > 0;
  }

  viewEventDetails(): void {
    // Implementación para ver detalles de eventos
    console.log('Ver detalles de eventos para', this.selectedDate);
  }

  addEvent(): void {
    // Implementación para añadir un evento
    console.log('Añadir evento para', this.selectedDate);
  }

  // Métodos para gestionar notas
  hasNote(date: number | null): boolean {
    if (!date) return false;
    const key = this.getDateKey(date);
    return !!this.notes[key] && this.notes[key].trim().length > 0;
  }

  getNoteContent(date: number | null): string {
    if (!date) return '';
    const key = this.getDateKey(date);
    return this.notes[key] || '';
  }

  activateNoteEdit(): void {
    // Llamar al método equivalente para mantener sincronizados ambos modelos
    this.activarEdicionNotas();
  }

  cancelNoteEdit(): void {
    // Llamar al método equivalente para mantener sincronizados ambos modelos
    this.cancelarEdicionNota();
  }

  // Este método ya no se usa directamente, se usa guardarNota() en su lugar
  // Se mantiene por compatibilidad
  saveNote(): void {
    // Llamar al método equivalente para mantener sincronizados ambos modelos
    this.guardarNota();
  }

  // Método auxiliar para generar claves de fecha
  private getDateKey(date: number): string {
    return `${this.anioActual}-${this.mesActual}-${date}`;
  }
  
  // Método para verificar si un día tiene eventos (para el HTML externo)
  tieneEvento(dia: any): boolean {
    if (!dia) return false;
    const key = `${dia.fecha.getFullYear()}-${dia.fecha.getMonth()}-${dia.fecha.getDate()}`;
    return !!this.events[key] && this.events[key].length > 0;
  }
  
  // Método para ver detalles de eventos (para el HTML externo)
  verDetallesEvento(): void {
    this.viewEventDetails();
  }
  
  // Método para añadir un evento (para el HTML externo)
  agregarEvento(): void {
    this.addEvent();
  }
}



