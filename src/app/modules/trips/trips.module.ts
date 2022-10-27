import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule  } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { CarouselModule, OwlOptions} from 'ngx-owl-carousel-o';


import { TripsRoutingModule } from './trips-routing.module';
import { HomeComponent } from 'src/app/home/home.component';



@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    TripsRoutingModule,

    ReactiveFormsModule,
    FormsModule,

    SwiperModule ,
    CarouselModule,


  ]
})
export class TripsModule { }
