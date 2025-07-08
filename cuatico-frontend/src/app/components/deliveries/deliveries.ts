import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputFile } from '../input-file/input-file';

interface EntregaUsuario {
  id: number;
  tareaId: number;
  titulo: string;
  descripcion: string;
  respuesta: string;
  archivoUrl?: string;
  nota?: number;
  feedback?: string;
  fechaEntrega: Date;
}

@Component({
  selector: 'app-deliveries',
  imports: [CommonModule, FormsModule, InputFile],
  templateUrl: './deliveries.html',
})
export class Deliveries implements OnInit {
  entrega: EntregaUsuario | undefined;
  titulo: string = '';
  descripcion: string = '';
  respuesta: string = '';
  archivo: File | null = null;
  archivoUrl: string = '';
  submitted: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtener los datos pasados a través de la navegación
    const state = history.state as { titulo?: string; descripcion?: string };
    this.titulo = state.titulo || '';
    this.descripcion = state.descripcion || '';

    const entregaId = Number(this.route.snapshot.paramMap.get('id'));
    
    this.entrega = {
      id: entregaId,
      tareaId: entregaId,
      titulo: this.titulo,
      descripcion: this.descripcion,
      respuesta: this.respuesta,
      archivoUrl: this.archivoUrl,
      nota: undefined,
      feedback: '',
      fechaEntrega: new Date()
    };
  }

  handleFile(file: File) {
    this.archivo = file;
    this.archivoUrl = URL.createObjectURL(file);
    if (this.entrega) {
      this.entrega = {
        id: this.entrega.id,
        tareaId: this.entrega.tareaId,
        titulo: this.entrega.titulo,
        descripcion: this.entrega.descripcion,
        respuesta: this.entrega.respuesta,
        archivoUrl: this.archivoUrl,
        nota: this.entrega.nota,
        feedback: this.entrega.feedback,
        fechaEntrega: this.entrega.fechaEntrega
      };
    }
  }

  enviarEntrega() {
    if (this.entrega) {
      // Aquí iría la lógica para enviar la entrega al backend
      // Por ahora solo actualizamos la entrega con los datos actuales
      this.entrega = {
        id: this.entrega.id,
        tareaId: this.entrega.tareaId,
        titulo: this.entrega.titulo,
        descripcion: this.entrega.descripcion,
        respuesta: this.respuesta,
        archivoUrl: this.archivoUrl,
        nota: this.entrega.nota,
        feedback: this.entrega.feedback,
        fechaEntrega: new Date()
      };
    }
  }
}