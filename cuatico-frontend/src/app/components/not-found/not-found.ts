import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  templateUrl: './not-found.html',
  styleUrls: ['./not-found.css']
})
export class NotFound implements AfterViewInit {
  @ViewChild('starsContainer', { static: false }) starsContainer!: ElementRef;

  ngAfterViewInit() {
    if (!this.starsContainer?.nativeElement) return;
    const container = this.starsContainer.nativeElement;
    container.innerHTML = '';
    for (let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(star);
    }
  }
}
