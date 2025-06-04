import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mini-calendar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-2xl shadow-md overflow-hidden">
      <div class="flex items-center justify-between p-6 bg-gradient-to-r from-primario to-primario/80">
        <h2 class="text-lg font-semibold text-white">{{getCurrentMonthName()}} {{currentDate.getFullYear()}}</h2>
        <div class="flex space-x-2">
          <button class="p-1 hover:bg-white/10 rounded-full transition-colors" (click)="previousMonth()">
            <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button class="p-1 hover:bg-white/10 rounded-full transition-colors" (click)="nextMonth()">
            <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div class="p-6">
        <div class="grid grid-cols-7 gap-1 text-center mb-2">
          <div *ngFor="let day of ['D', 'L', 'M', 'M', 'J', 'V', 'S']" 
               class="text-xs font-medium text-gray-500 p-2">
            {{day}}
          </div>
        </div>
        <div class="grid grid-cols-7 gap-1">
          <button *ngFor="let date of getDaysInMonth()" 
                  [class]="getDateClass(date)"
                  [disabled]="!date"
                  type="button"
                  (click)="selectDate(date)">
            {{date || ''}}
          </button>
        </div>
      </div>
    </div>
  `
})
export class MiniCalendar {
  currentDate = new Date();
  selectedDate: Date | null = null;
  monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  getCurrentMonthName(): string {
    return this.monthNames[this.currentDate.getMonth()];
  }

  getDaysInMonth(): (number | null)[] {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
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
    
    const baseClass = 'w-8 h-8 rounded-full text-sm hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center';
    
    const isToday = this.isToday(date);
    const isSelected = this.isSelected(date);
    
    if (isSelected) {
      return `${baseClass} bg-primario text-white hover:bg-primario-600`;
    }
    
    if (isToday) {
      return `${baseClass} border-2 border-primario text-primario hover:bg-primario hover:text-white`;
    }
    
    return `${baseClass} text-gray-700`;
  }

  isToday(date: number): boolean {
    const today = new Date();
    return date === today.getDate() && 
           this.currentDate.getMonth() === today.getMonth() && 
           this.currentDate.getFullYear() === today.getFullYear();
  }

  isSelected(date: number): boolean {
    if (!this.selectedDate) return false;
    return date === this.selectedDate.getDate() && 
           this.currentDate.getMonth() === this.selectedDate.getMonth() && 
           this.currentDate.getFullYear() === this.selectedDate.getFullYear();
  }

  selectDate(date: number | null): void {
    if (!date) return;
    this.selectedDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
      date
    );
  }

  nextMonth(): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1
    );
  }

  previousMonth(): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      1
    );
  }
}



