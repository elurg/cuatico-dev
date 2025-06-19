import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ForumTopic {
  id?: number;
  title: string;
  author: string;
  date: string;
  replies: number;
  views: number;
  content: string;
  category: 'active' | 'popular' | 'resources';
  lastReply: string;
  authorId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ForumReply {
  id?: number;
  topicId: number;
  author: string;
  content: string;
  date: string;
  authorId?: number;
  createdAt?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private apiUrl = 'http://localhost:8080/api/forum';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // Obtener todos los temas del foro
  getTopics(): Observable<ForumTopic[]> {
    return this.http.get<ForumTopic[]>(`${this.apiUrl}/topics`);
  }

  // Obtener un tema específico por ID
  getTopic(id: number): Observable<ForumTopic> {
    return this.http.get<ForumTopic>(`${this.apiUrl}/topics/${id}`);
  }

  // Crear un nuevo tema
  createTopic(topic: Partial<ForumTopic>): Observable<ForumTopic> {
    return this.http.post<ForumTopic>(`${this.apiUrl}/topics`, topic, this.httpOptions);
  }

  // Actualizar un tema existente
  updateTopic(id: number, topic: Partial<ForumTopic>): Observable<ForumTopic> {
    return this.http.put<ForumTopic>(`${this.apiUrl}/topics/${id}`, topic, this.httpOptions);
  }

  // Eliminar un tema
  deleteTopic(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/topics/${id}`);
  }

  // Obtener respuestas de un tema
  getTopicReplies(topicId: number): Observable<ForumReply[]> {
    return this.http.get<ForumReply[]>(`${this.apiUrl}/topics/${topicId}/replies`);
  }

  // Crear una nueva respuesta
  createReply(reply: Partial<ForumReply>): Observable<ForumReply> {
    return this.http.post<ForumReply>(`${this.apiUrl}/replies`, reply, this.httpOptions);
  }

  // Incrementar vistas de un tema
  incrementViews(topicId: number): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/topics/${topicId}/views`, {});
  }

  // Buscar temas por categoría
  getTopicsByCategory(category: string): Observable<ForumTopic[]> {
    return this.http.get<ForumTopic[]>(`${this.apiUrl}/topics?category=${category}`);
  }

  // Buscar temas por texto
  searchTopics(query: string): Observable<ForumTopic[]> {
    return this.http.get<ForumTopic[]>(`${this.apiUrl}/topics/search?q=${encodeURIComponent(query)}`);
  }
}