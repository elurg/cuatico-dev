import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Card } from '../card/card';
import { LabelInput } from '../label-input/label-input';

@Component({
  selector: 'app-certificate',
  imports: [CommonModule, Card, Header, LabelInput],
  templateUrl: './certificate.html'
})
export class Certificate {


  selecionado1 = false;
  selecionado2 = false;
  selecionado3= false;
    descargarSelecionados(){
    const selecionados = [];
    if (this.selecionado1) selecionados.push('Direccion de producto');
    if (this.selecionado2) selecionados.push('Direcion de diseño');
    if (this.selecionado3) selecionados.push('Direccion de desarrollo');
    if (selecionados.length === 0) { 
      alert('Por favor, selecciona al menos un certificado para descargar.');
      return;
    }
    alert(`Descargando certificados: ${selecionados.join(', ')}`);
  }


  descargarCertificado() {
    console.log('Descargando certificado...');
    alert('Descargando certificado...');

  }

  

}

