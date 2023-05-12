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
    
    const cursorSize = 60;
    const target = event.target as HTMLElement;
    // const isLink = target.tagName === 'P';

    // if (isLink) {
    //   this.circle.style.width = cursorSize + -13 + 'px';
    //   this.circle.style.height = cursorSize + -10+'px';
    //   this.circle.style.top = y + -23+ 'px';
    //   this.circle.style.left = x + -20+'px';
    //   this.circle.style.border = '3px solid white';
    //   this.circle.style.mixBlendMode = 'difference';
    // } else {
    //   this.circle.style.width = '20px';
    //   this.circle.style.height = '20px';
    //   this.circle.style.border = 'none';
    //   this.circle.style.mixBlendMode = 'normal';
    // }

  
  }
  ngOnInit(): void {
    const circleElement = document.querySelector('.circle');
    if (circleElement) {
      this.circle = circleElement as HTMLDivElement;
    }}
}
