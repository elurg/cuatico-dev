import { Component } from '@angular/core';
import { InputFile } from '../../core/input-file/input-file';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';

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
