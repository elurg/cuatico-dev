import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Card } from '../card/card';

@Component({
  selector: 'app-certificate',
  imports: [CommonModule, Card, Header],
  templateUrl: './certificate.html'
})
export class Certificate {

  descargarCertificado() {
    console.log('Descargando certificado...');
    alert('Descargando certificado...');

  }
}

