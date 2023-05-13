import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'artsy';
  circle!: HTMLDivElement;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;

    this.circle.style.top = y + -13+ 'px';
    this.circle.style.left = x + -10+'px';
    
    const cursorSize = 80;
    const target = event.target as HTMLElement;
    const isLink = target.className === 'Expand';
    const isLink2 = target.className === 'Expand-small';
    const isHeader = target.className === 'header__item';
    
    switch (true) {
      case isLink:
        this.circle.style.width = cursorSize - 13 + 'px';
        this.circle.style.height = cursorSize - 10 + 'px';
        this.circle.style.top = y - 23 + 'px';
        this.circle.style.left = x - 20 + 'px';
        this.circle.style.backgroundColor = 'rgb(255, 255, 255)';
        this.circle.style.mixBlendMode = 'difference';
        break;
    
      case isHeader:
        this.circle.style.width = cursorSize - 43 + 'px';
        this.circle.style.height = cursorSize - 40 + 'px';
        this.circle.style.top = y - 23 + 'px';
        this.circle.style.left = x - 20 + 'px';
        this.circle.style.backgroundColor = 'rgb(255, 255, 255)';
        this.circle.style.mixBlendMode = 'difference';
        break;
    
      case isLink2:
        this.circle.style.width = cursorSize - 53 + 'px';
        this.circle.style.height = cursorSize - 50 + 'px';
        this.circle.style.top = y - 23 + 'px';
        this.circle.style.left = x - 20 + 'px';
        this.circle.style.backgroundColor = 'rgb(255, 255, 255)';
        this.circle.style.mixBlendMode = 'exclusion';
        break;
    
      default:
        this.circle.style.width = '20px';
        this.circle.style.height = '20px';
        this.circle.style.border = 'none';
        this.circle.style.backgroundColor = 'rgb(129, 135, 255)';
        this.circle.style.mixBlendMode = 'normal';
        break;
    }
  
  }
  ngOnInit(): void {
    const circleElement = document.querySelector('.circle');
    if (circleElement) {
      this.circle = circleElement as HTMLDivElement;
    }}
}
