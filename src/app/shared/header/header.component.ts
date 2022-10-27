import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  footer:OwlOptions = {
    rtl:true,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 400,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 4
      },
      760: {
        items: 6
      },
      1000: {
        items: 7
      }
    },
    nav: false
  }
  constructor(private meta:Meta) {
    this.meta.addTag({name:'twitter:card',content:'Hello World'})
  }

  ngOnInit(): void {
  }

}
