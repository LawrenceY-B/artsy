import { Directive,ElementRef, AfterViewChecked, HostListener  } from '@angular/core';

@Directive({
  selector: '[appAutoScroll]'
})
export class AutoScrollDirective implements AfterViewChecked {
  private shouldScrollToBottom = true;

  constructor(
    private el: ElementRef,
  ) { }
  ngAfterViewChecked(): void {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();

    }
    
  }
  private scrollToBottom(): void {
    try {
      this.el.nativeElement.scrollTop = this.el.nativeElement.scrollHeight;
    } catch (err) { 
      console.log(err)
    }
  }
  @HostListener('scroll')
  onScroll() {
    // Check if the user manually scrolls up
    this.shouldScrollToBottom = this.el.nativeElement.scrollTop + this.el.nativeElement.clientHeight >= this.el.nativeElement.scrollHeight;
  }

}
