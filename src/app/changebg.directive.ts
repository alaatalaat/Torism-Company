import { Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector:'[bg-change]'
})

export class ChangebgDirective{
  @HostListener('mouseover') onMouseOver(){
    this.highLight('#Fb8D04');
  };
  @HostListener('mouseleave') onMouseLeave(){
    this.highLight('#9d1d96');
  };
  constructor(private el:ElementRef,private enderer:Renderer2){}

  highLight(color:string){
    this.enderer.setStyle(this.el.nativeElement,'backgroundColor',color);
  }
}
