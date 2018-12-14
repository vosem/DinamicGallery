import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el: ElementRef) { }

  @HostListener('touchstart') onTouchStart(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  @HostListener('touchend') onTouchEnd(e) {
    e.preventDefault();
    e.stopPropagation();
    this.el.nativeElement.childNodes[0].classList.toggle('zoom');
    this.el.nativeElement.childNodes[1].classList.toggle('hoverActivated');
    this.el.nativeElement.childNodes[1].childNodes[1].classList.toggle('hidden');
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.el.nativeElement.childNodes);
    this.el.nativeElement.childNodes[0].classList.add('zoom');
    this.el.nativeElement.childNodes[1].classList.add('hoverActivated');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.childNodes[0].classList.remove('zoom');
    this.el.nativeElement.childNodes[1].classList.remove('hoverActivated');
  }

}