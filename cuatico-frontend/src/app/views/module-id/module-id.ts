import { Component } from '@angular/core';
import { InputFile } from '../../components/input-file/input-file';
import { CommonModule } from '@angular/common';
import { Header } from 'src/app/components/header/header';

@Component({
  selector: 'app-module-id',
  imports: [CommonModule, InputFile, Header],
  templateUrl: './module-id.html'
})
export class ModuleId {
  selectedFileName: string = '';
  
  handleFile(file: File) {
    this.selectedFileName = file.name;
}

preguntas = [
  {
    texto: '¿Qué significa UX?',
    opciones: ['User Xperience', 'User Experience', 'Ultra Xperience'],
    correcta: 'User Experience'
  },
  {
    texto: '¿Qué herramienta es común para diseño UI?',
    opciones: ['Excel', 'Figma', 'Word'],
    correcta: 'Figma'
  },
  {
    texto: '¿Qué mide una prueba de usabilidad?',
    opciones: ['Velocidad de conexión', 'Experiencia del usuario', 'Número de clics por minuto'],
    correcta: 'Experiencia del usuario'
  },
  {
    texto: '¿Qué es un prototipo?',
    opciones: ['Un diseño final', 'Una simulación funcional', 'Una base de datos'],
    correcta: 'Una simulación funcional'
  },
  {
    texto: '¿Cuál es una buena práctica en UX?',
    opciones: ['Ignorar al usuario', 'Colores aleatorios', 'Pruebas con usuarios reales'],
    correcta: 'Pruebas con usuarios reales'
  }
];

entregas = [
    {
      titulo: 'Tarea de UX',
      descripcion: 'Análisis de usabilidad sobre la app mobile.',
      estado: 'Completada',
      estadoColor: '#6366f1, #00bfae',
      prioridad: 'Alta',
      prioridadColor: '#ef4444, #f87171'
    },
    {
      titulo: 'Tarea de UI',
      descripcion: 'Validación de contenido con usuarios reales.',
      estado: 'Pendiente',
      estadoColor: '#eab308, #fde047',
      prioridad: 'Media',
      prioridadColor: '#8b5cf6, #c084fc'
    }
  ];

respuestas: string[] = [];
resultado: number | null = null;

responder(index: number, opcion: string) {
  this.respuestas[index] = opcion;
}

enviarRespuestas() {
  let aciertos = 0;
  this.preguntas.forEach((pregunta, i) => {
    if (this.respuestas[i] === pregunta.correcta) {
      aciertos++;
    }
  });
  this.resultado = aciertos;
}


}
