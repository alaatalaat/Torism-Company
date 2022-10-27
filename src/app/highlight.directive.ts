import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective{

  @HostBinding('class.active') isHovering:boolean;
  @HostListener('mouseover') onmouseover(){
    this.el.nativeElement.style.color = '#fb8d04';
    this.isHovering = true
  }
  @HostListener('mouseleave') onmouseleave(){
    this.el.nativeElement.style.color = '#9d1d96';
    this.isHovering = false ;
  }


  constructor(private el:ElementRef,private renderer:Renderer2){
    el.nativeElement.style.fontSize= '1.5rem';
    el.nativeElement.style.marginBottom  = '2rem';
    el.nativeElement.style.color  = '#9d1d96';
    el.nativeElement.style.fontWeight = '700';
    el.nativeElement.style.lineHeight = '40px';

  }

}
