import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Header } from 'src/app/components/header/header';

interface ForumTopic {
  id: number;
  title: string;
  author: string;
  date: string;
  replies: number;
  views: number;
  content: string;
  category: 'active' | 'popular' | 'resources';
  lastReply: string;
}

@Component({
  selector: 'app-blog',
  imports: [FormsModule, CommonModule],
  templateUrl: './blog.html',
})
export class Blog {
  showNewTopicModal = false;
  newTopic = {
    title: '',
    content: '',
    category: 'active' as 'active' | 'popular' | 'resources'
  };

  topics: ForumTopic[] = [
    {
      id: 1,
      title: '💭 Tengo dudas con el ejercicio 5 del módulo 1',
      author: 'Ana García',
      date: 'Hace 2 horas',
      replies: 5,
      views: 23,
      content: 'Necesito ayuda para entender la lógica del algoritmo de ordenamiento burbuja...',
      category: 'active',
      lastReply: 'Prof. Diana'
    },
    {
      id: 2,
      title: '🔥 Tengo dudas con el ejercicio 2 del módulo 3',
      author: 'Carlos Ruiz',
      date: 'Hace 1 día',
      replies: 12,
      views: 45,
      content: '¿Alguien puede explicarme cómo funciona la recursión en este ejercicio?',
      category: 'popular',
      lastReply: 'María López'
    },
    {
      id: 3,
      title: '❓ Recursos adicionales para UX Research',
      author: 'Prof. Diana',
      date: 'Hace 3 días',
      replies: 8,
      views: 67,
      content: 'Comparto algunos recursos útiles para profundizar en metodologías de investigación...',
      category: 'resources',
      lastReply: 'Pedro Martín'
    }
  ];

  openNewTopicModal() {
    this.showNewTopicModal = true;
  }

  closeNewTopicModal() {
    this.showNewTopicModal = false;
    this.resetNewTopic();
  }

  createNewTopic() {
    if (this.newTopic.title.trim() && this.newTopic.content.trim()) {
      const newForumTopic: ForumTopic = {
        id: this.topics.length + 1,
        title: this.newTopic.title,
        author: 'Usuario Actual', // En una app real, esto vendría del usuario logueado
        date: 'Ahora',
        replies: 0,
        views: 1,
        content: this.newTopic.content,
        category: this.newTopic.category,
        lastReply: 'Sin respuestas'
      };
      
      this.topics.unshift(newForumTopic); // Agregar al inicio
      this.closeNewTopicModal();
    }
  }

  resetNewTopic() {
    this.newTopic = {
      title: '',
      content: '',
      category: 'active'
    };
  }

  openModerationPanel() {
    alert('Panel de moderación - Funcionalidad en desarrollo');
  }

  getCategoryColor(category: string): string {
    switch(category) {
      case 'active': return 'border-blue-500';
      case 'popular': return 'border-orange-500';
      case 'resources': return 'border-purple-500';
      default: return 'border-gray-500';
    }
  }

  getCategoryBadge(category: string): { class: string, text: string } {
    switch(category) {
      case 'active': return { class: 'bg-green-100 text-green-800', text: 'Activo' };
      case 'popular': return { class: 'bg-orange-100 text-orange-800', text: 'Popular' };
      case 'resources': return { class: 'bg-purple-100 text-purple-800', text: 'Recursos' };
      default: return { class: 'bg-gray-100 text-gray-800', text: 'General' };
    }
  }
}
