import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from './task.interface';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.html'
})
export class TaskList {
  @Input() tasks: Task[] = [];
  @Output() taskStatusChanged = new EventEmitter<Task>();
  @Output() taskAdded = new EventEmitter<Task>();

  currentFilter: 'all' | 'Pendiente' | 'En Progreso' = 'all';
  expandedTaskId: number | null = null;
  showAddTaskForm = false;

  newTask: Partial<Task> = {
    title: '',
    description: '',
    type: 'algorithm',
    status: 'Pendiente',
    priority: 'media',
    dueIn: '',
    course: ''
  };

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

  addTask() {
    if (this.newTask.title && this.newTask.course && this.newTask.dueIn) {
      const task: Task = {
        id: this.tasks.length + 1,
        title: this.newTask.title,
        description: this.newTask.description || '',
        type: this.newTask.type || 'algorithm',
        status: 'Pendiente',
        priority: this.newTask.priority || 'media',
        dueIn: this.newTask.dueIn,
        course: this.newTask.course
      };

      this.taskAdded.emit(task);
      this.showAddTaskForm = false;
      this.resetNewTaskForm();
    }
  }

  private resetNewTaskForm() {
    this.newTask = {
      title: '',
      description: '',
      type: 'algorithm',
      status: 'Pendiente',
      priority: 'media',
      dueIn: '',
      course: ''
    };
  }
} 