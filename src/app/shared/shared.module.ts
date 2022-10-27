import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports:[HeaderComponent]
})
export class SharedModule { }
