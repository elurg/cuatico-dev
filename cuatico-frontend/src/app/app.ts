import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Card } from './components/card/card';
import { Sidebar } from './components/sidebar/sidebar';
import { LabelInput } from './components/label-input/label-input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Card, Sidebar, LabelInput, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  usuario = { nombre: '' , email: '', telefono: ''};
  protected title = 'cuatico-frontend';
}

