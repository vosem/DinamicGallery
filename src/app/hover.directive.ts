import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.hoverOpacity(1);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hoverOpacity(0);
  }

  private hoverOpacity (value: number) {
    this.el.nativeElement.style.opacity = value;
  }

}