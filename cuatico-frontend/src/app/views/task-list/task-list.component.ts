import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Task {
  title: string;
  dueIn: string;
  status: 'En Progreso' | 'Pendiente';
  type: 'algorithm' | 'design' | 'research';
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-2xl shadow-md p-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-lg font-semibold text-gray-800">Próximas Tareas</h2>
        <span class="text-sm text-primario">{{tasks.length}} tareas</span>
      </div>
      <div class="space-y-4">
        <div *ngFor="let task of tasks" 
             class="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
          <div class="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
               [ngClass]="{
                 'bg-blue-100': task.type === 'algorithm',
                 'bg-purple-100': task.type === 'design',
                 'bg-green-100': task.type === 'research'
               }">
            <svg *ngIf="task.type === 'algorithm'" class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <svg *ngIf="task.type === 'design'" class="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <svg *ngIf="task.type === 'research'" class="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div class="ml-4 flex-grow">
            <h3 class="text-sm font-medium text-gray-800">{{task.title}}</h3>
            <p class="text-sm text-gray-500">Vence en {{task.dueIn}}</p>
          </div>
          <span class="text-xs font-medium px-2 py-1 rounded-full"
                [ngClass]="{
                  'text-blue-500 bg-blue-50': task.status === 'En Progreso',
                  'text-purple-500 bg-purple-50': task.status === 'Pendiente'
                }">
            {{task.status}}
          </span>
        </div>
      </div>
    </div>
  `
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
} 