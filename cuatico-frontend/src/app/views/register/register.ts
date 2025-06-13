import { LabelInput } from '../../components/label-input/label-input';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LabelInput, RouterLink],
  templateUrl: './register.html'
})
export class Register implements AfterViewInit {

  // -- Llamada API Backend -- 
 formData = {
    name: '',
    surnames: '',
    email: '',
    passwordHash: '',
    username: '',
    phone: ''
  };

  constructor(private http: HttpClient) {}

  onRegister() {
    const { } = this.formData;
    this.http.post('http://localhost:8080/api/students/register', this.formData)
    // TODO: Ver si necesitamos cachear el error
  }


  // Estrellitas del fondo
  @ViewChild('starCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    this.drawStars();
  }

  @HostListener('window:resize')
  onResize() {
    this.drawStars();
  }

  private drawStars() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const r = Math.random() * 1.5 + 0.5;
      const opacity = Math.random() * 0.5 + 0.5;

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fill();
    }
  }
}
