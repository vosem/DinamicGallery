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
    this.el.nativeElement.childNodes[0].classList.toggle('zoom');
    this.el.nativeElement.childNodes[1].classList.toggle('hoverActivated');
    this.el.nativeElement.childNodes[1].childNodes[1].classList.toggle('activated');
    // var a = this.el.nativeElement.childNodes[1].childNodes[1];
    // var activatedOn = setTimeout( function(){
    //   a.classList.add('activated');
    // }, 500);
    // var fadedInOn = setTimeout( function(){
    //   a.classList.add('fadedIn');
    // }, 600);
    // var fadedInOut = setTimeout( function(){
    //   a.classList.remove('fadedIn');
    // }, 3500);
    // var activatedOut = setTimeout( function(){
    //   a.classList.remove('activated');
    // }, 4000);
    e.preventDefault();
    e.stopPropagation();
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.el.nativeElement.childNodes);
    this.el.nativeElement.childNodes[0].classList.add('zoom');
    this.el.nativeElement.childNodes[1].classList.add('hoverActivated');
    // this.el.nativeElement.childNodes[1].childNodes[1].classList.add('fadedIn');
    this.el.nativeElement.childNodes[1].childNodes[1].classList.add('activated');
    // var a = this.el.nativeElement.childNodes[1].childNodes[1];
    // setTimeout( function(){
    //   a.classList.add('activated');
    // }, 500);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.childNodes[0].classList.remove('zoom');
    this.el.nativeElement.childNodes[1].classList.remove('hoverActivated');
    // this.el.nativeElement.childNodes[1].childNodes[1].classList.remove('fadedIn');
    this.el.nativeElement.childNodes[1].childNodes[1].classList.remove('activated');
  }
}