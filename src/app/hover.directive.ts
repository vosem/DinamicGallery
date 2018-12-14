import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el: ElementRef) { }

    @HostListener('touchstart') onTouchStart(e) {
      // e.preventDefault();
      this.hoverOpacity(0, '65%', 1);

    }
    @HostListener('touchend') onTouchEnd(e) {
      // e.preventDefault();
      this.hoverOpacity(0, '65%', 1);
      this.el.nativeElement.childNodes[1].classList.toggle('hidden');
    }

    @HostListener('mouseenter') onMouseEnter() {
    this.hoverOpacity(1, '55%', 1.15);
    if(window.matchMedia('(max-width: 768px)').matches){
      this.el.nativeElement.childNodes[1].style.display = 'none';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hoverOpacity(0, '65%', 1);
    if(window.matchMedia('(max-width: 768px)').matches){
      var el = this.el.nativeElement.childNodes[1];
      setTimeout(function(){el.style.display = 'block'}, 100);
    }
  }

  private hoverOpacity (valueOpacity: number, valuePadding: string, valueScale: number) {
    this.el.nativeElement.style.opacity = valueOpacity;
    this.el.nativeElement.style.paddingTop = valuePadding;
    this.el.nativeElement.nextSibling.style.transform = 'scale(' + valueScale + ')';
  }

}