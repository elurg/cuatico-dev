import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../../components/header/header';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [CommonModule, FormsModule, Header],
  templateUrl: './certificate.html'
})
export class Certificate {
  selecionado1 = false;
  selecionado2 = false;
  selecionado3 = false;

  constructor(public modalService: ModalService) {}

  descargarSelecionados() {
    const selecionados = [];
    if (this.selecionado1) selecionados.push('Diseño de experiencia');
    if (this.selecionado2) selecionados.push('Transformación digital');
    if (this.selecionado3) selecionados.push('Dirección de desarrollo');
    
    if (selecionados.length === 0) {
      alert('Por favor, selecciona al menos un certificado para descargar.');
      return;
    }

    // Aquí iría la lógica real de descarga
    console.log('Descargando certificados:', selecionados);
    alert(`Descargando certificados: ${selecionados.join(', ')}`);
  }

  descargarCertificado() {
    console.log('Descargando certificado individual...');
    // Aquí iría la lógica real de descarga
    alert('Descargando certificado...');
  }

  abrirModal(imageUrl: string) {
    console.log('Abriendo modal con imagen:', imageUrl);
    this.modalService.openModal(imageUrl);
  }

  cerrarModal() {
    this.modalService.closeModal();
  }
}

