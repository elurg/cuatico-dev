import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from './task.interface';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.html'
})
export class TaskList {
  @Input() tasks: Task[] = [];
  @Output() taskStatusChanged = new EventEmitter<Task>();

  currentFilter: 'all' | 'Pendiente' | 'En Progreso' = 'all';
  expandedTaskId: number | null = null;

  get filteredTasks(): Task[] {
    if (this.currentFilter === 'all') {
      return this.tasks;
    }
    return this.tasks.filter(task => task.status === this.currentFilter);
  }

  filterByStatus(status: 'all' | 'Pendiente' | 'En Progreso') {
    this.currentFilter = status;
    this.expandedTaskId = null; // Cerrar detalles al cambiar filtro
  }

  toggleTaskDetails(task: Task) {
    this.expandedTaskId = this.expandedTaskId === task.id ? null : task.id;
  }

  toggleTaskStatus(task: Task) {
    const newStatus: 'Pendiente' | 'En Progreso' | 'Completada' = 
      task.status === 'Completada' ? 'Pendiente' : 'Completada';
    
    const updatedTask: Task = {
      ...task,
      status: newStatus
    };
    
    this.taskStatusChanged.emit(updatedTask);
  }
} 