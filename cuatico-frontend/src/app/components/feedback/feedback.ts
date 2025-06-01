import { Component } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Resource {
  title: string;
  url: string;
}

interface FeedbackItem {
  id: number;
  courseId: number;
  teacherName: string;
  teacherAvatar: string;
  date: Date;
  subject: string;
  task: string;
  message: string;
  resources?: Resource[];
  response?: string;
  rating?: number;
  expanded: boolean; // <-- Asegúrate de que siempre esté presente
}


@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './feedback.html',
  styleUrls: ['./feedback.css']
})
export class Feedback {
  allFeedbacks: FeedbackItem[] = [
    {
      id: 101,
      courseId: 1,
      teacherName: 'Diana Henao',
      teacherAvatar: 'assets/Diana.png',
      date: new Date('2025-06-01'),
      subject: 'UX Research',
      task: 'Módulo 1: Diseño de producto',
      message: '¡Muchas felicidades por tu excelente desempeño en la entrega 2 del Módulo 1: Diseño de producto! Quiero destacar especialmente la profundidad de tu análisis de usuarios, ya que demuestra una comprensión clara de las necesidades y expectativas del público objetivo. Tu trabajo refleja un gran esfuerzo por aplicar las metodologías presentadas en clase y tu enfoque es muy profesional. Además, la claridad en la presentación de tus conclusiones facilita la comprensión de los resultados y las recomendaciones propuestas. Sigue así, porque tu dedicación y atención al detalle te están llevando por el camino correcto. Si tienes alguna duda o sugerencia para próximas entregas, no dudes en consultarme. ¡Estoy muy orgullosa de tu progreso!',
      resources: [
        { title: 'Guía de entrevistas', url: 'https://ejemplo.com/guia-entrevistas' }
      ],
      response: '',
      rating: 5,
      expanded: false
    },
    {
      id: 102,
      courseId: 1,
      teacherName: 'Carlos López',
      teacherAvatar: 'https://randomuser.me/api/portraits/men/42.jpg',
      date: new Date('2025-06-02'),
      subject: 'Diseño Estratégico',
      task: 'Proyecto final: Investigación de usuarios',
      message: 'Quiero felicitarte por el esfuerzo y la dedicación que has puesto en el proyecto final de investigación de usuarios. Tu trabajo muestra un análisis sólido y una correcta aplicación de los conceptos vistos en clase. Solo te sugiero revisar la ortografía en la página 3, ya que podría mejorar la presentación final. Sigue con ese nivel de compromiso y no dudes en consultarme si necesitas apoyo para futuros proyectos.',
      resources: [],
      response: '',
      rating: 4,
      expanded: false
    },
    {
      id: 103,
      courseId: 1,
      teacherName: 'María Gómez',
      teacherAvatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      date: new Date('2025-06-03'),
      subject: 'Prototipado',
      task: 'Prototipo de alta fidelidad',
      message: 'El prototipo que has desarrollado está muy bien estructurado y refleja una excelente comprensión de los flujos de usuario. El diseño es intuitivo y fácil de navegar, lo que contribuye a una experiencia positiva. Solo te recomiendo añadir un botón de “volver” en la pantalla de confirmación para mejorar la usabilidad. Sigue trabajando con la misma atención al detalle y verás grandes resultados.',
      resources: [
        { title: 'Ejemplo de prototipo', url: 'https://ejemplo.com/prototipo' }
      ],
      response: '',
      rating: 4,
      expanded: false
    },
    {
      id: 104,
      courseId: 1,
      teacherName: 'Luis Pérez',
      teacherAvatar: 'https://randomuser.me/api/portraits/men/44.jpg',
      date: new Date('2025-06-04'),
      subject: 'Testing',
      task: 'Informe de usabilidad',
      message: 'Tu informe de usabilidad es muy completo y detallado. Has logrado identificar aspectos clave que pueden mejorar la experiencia de usuario. Presta especial atención a las recomendaciones sobre accesibilidad, ya que son fundamentales para garantizar la inclusión de todos los usuarios. Si tienes dudas sobre cómo implementar estas mejoras, puedes consultarme y te apoyaré con gusto.',
      resources: [],
      response: '',
      rating: 4,
      expanded: false
    },
    {
      id: 105,
      courseId: 1,
      teacherName: 'Ana Rodríguez',
      teacherAvatar: 'https://randomuser.me/api/portraits/women/22.jpg',
      date: new Date('2025-06-05'),
      subject: 'Cartografía Social',
      task: 'Mapa de interacciones',
      message: 'El mapa de interacciones que has presentado es claro y visualmente atractivo. Has logrado representar de manera efectiva la mayoría de las relaciones entre los actores. Te sugiero profundizar aún más en las relaciones entre los actores clave, ya que esto enriquecería el análisis y aportaría una visión más integral del contexto estudiado. Sigue explorando y desarrollando tus habilidades en cartografía social.',
      resources: [
        { title: 'Artículo sobre cartografía social', url: 'https://ejemplo.com/cartografia' }
      ],
      response: '',
      rating: 3,
      expanded: false
    },
    {
      id: 106,
      courseId: 1,
      teacherName: 'Javier Sánchez',
      teacherAvatar: 'https://randomuser.me/api/portraits/men/55.jpg',
      date: new Date('2025-06-06'),
      subject: 'Investigación Etnográfica',
      task: 'Entrevistas y observación',
      message: 'Las entrevistas que has realizado están muy bien documentadas y reflejan un buen nivel de análisis. Has logrado captar información relevante y presentarla de manera ordenada. Te recomiendo incluir más citas textuales en el informe, ya que esto aporta mayor credibilidad y permite entender mejor las perspectivas de los participantes. Sigue con ese nivel de detalle y compromiso en tus próximos trabajos.',
      resources: [],
      response: '',
      rating: 4,
      expanded: false
    }
  ];


  get uniqueSubjects(): string[] {
    const subjects = new Set<string>();
    this.allFeedbacks.forEach(fb => subjects.add(fb.subject));
    return ['Todas', ...Array.from(subjects)];
  }

  selectedSubject = 'Todas';

  get filteredFeedbacks(): FeedbackItem[] {
    if (this.selectedSubject === 'Todas') {
      return this.allFeedbacks;
    }
    return this.allFeedbacks.filter(fb => fb.subject === this.selectedSubject);
  }

  getSubjectButtonColor(idx: number): string {
    return 'text-white font-semibold';
  }

  getGradientColor(idx: number): string {
    if (idx === 0) return '#10b981, #34d399'; // verde
    const gradients = [
      '#a855f7, #ec4899', // morado a rosa
      '#3b82f6, #60a5fa', // azul
      '#f97316, #f59e0b', // naranja
      '#ef4444, #f87171', // rojo
      '#eab308, #fde047', // amarillo
      '#8b5cf6, #c084fc', // morado claro
      '#14b8a6, #2dd4bf'  // verde turquesa
    ];
    return gradients[(idx - 1) % gradients.length];
  }

  sendResponse(feedback: FeedbackItem): void {
    alert('¡Respuesta enviada! Gracias por tu participación.');
    feedback.response = '';
  }

  toggleExpand(feedback: FeedbackItem): void {
    feedback.expanded = !feedback.expanded;
  }

  solicitarTutoria(): void {
    alert('¡Tutoría solicitada! Te contactaremos pronto.');
  }

  getSubjectIndex(subject: string): number {
  // Si 'Todas' no debe aparecer en las tarjetas, puedes filtrarla del array
  // pero aquí asumimos que 'Todas' está en el array y no aparece en las tarjetas
  const index = this.uniqueSubjects.indexOf(subject);
  return index > -1 ? index : 0; // Si no se encuentra, usa el índice 0 (por defecto)
}


}
