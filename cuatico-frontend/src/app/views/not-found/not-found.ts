import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  templateUrl: './not-found.html',
  styleUrls: ['./not-found.css']
})
export class NotFound implements AfterViewInit {
  @ViewChild('aestheticCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private stars: any[] = [];
  private starCount = 120;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.ctx = canvas.getContext('2d')!;
    if (!this.ctx) {
      console.error('No se pudo obtener el contexto 2D');
      return;
    }

    // Crear estrellas
    for (let i = 0; i < this.starCount; i++) {
      this.stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        delta: (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? -1 : 1)
      });
    }

    const draw = () => {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const star of this.stars) {
        this.ctx.beginPath();
        this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = '#bb86fc';
        this.ctx.fill();
        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta *= -1;
      }

      requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }
}
