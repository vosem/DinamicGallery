import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.hoverOpacity(1, '55%', 1.15);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hoverOpacity(0, '65%', 1);
  }

  private hoverOpacity (valueOpacity: number, valuePadding: string, valueScale: number) {
    this.el.nativeElement.style.opacity = valueOpacity;
    this.el.nativeElement.style.paddingTop = valuePadding;
    this.el.nativeElement.nextSibling.style.transform = 'scale(' + valueScale + ')';
  }

}