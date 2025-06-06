import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface UserStats {
  completedLessons: string;
  studyTime: string;
  overallProgress: string;
}

@Component({
  selector: 'app-user-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white/10 backdrop-blur-lg rounded-xl p-4 transform hover:scale-105 transition-transform duration-300">
        <div class="flex items-center">
          <div class="p-2 rounded-full bg-emerald-500/20 mr-3">
            <svg class="w-6 h-6 text-emerald-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p class="text-emerald-50 text-sm">Lecciones Completadas</p>
            <p class="text-2xl font-bold mt-1">{{stats.completedLessons}}</p>
          </div>
        </div>
      </div>
      <div class="bg-white/10 backdrop-blur-lg rounded-xl p-4 transform hover:scale-105 transition-transform duration-300">
        <div class="flex items-center">
          <div class="p-2 rounded-full bg-blue-500/20 mr-3">
            <svg class="w-6 h-6 text-emerald-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p class="text-emerald-50 text-sm">Tiempo de Estudio</p>
            <p class="text-2xl font-bold mt-1">{{stats.studyTime}}</p>
          </div>
        </div>
      </div>
      <div class="bg-white/10 backdrop-blur-lg rounded-xl p-4 transform hover:scale-105 transition-transform duration-300">
        <div class="flex items-center">
          <div class="p-2 rounded-full bg-purple-500/20 mr-3">
            <svg class="w-6 h-6 text-emerald-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <p class="text-emerald-50 text-sm">Progreso General</p>
            <p class="text-2xl font-bold mt-1">{{stats.overallProgress}}</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class UserStatsComponent {
  @Input() stats!: UserStats;
} 