import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-famous-places',
  templateUrl: './famous-places.component.html',
  styleUrls: ['./famous-places.component.scss']
})
export class FamousPlacesComponent implements OnInit {

  customOptions: OwlOptions = {
    rtl:true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true,
    navText: [ '<i class="bi bi-chevron-double-right"></i>','<i class="bi bi-chevron-double-left"></i>' ]
  }
  constructor() { }

  ngOnInit(): void {
  }

  famousPlaces=[
    {'src':'../../assets/famousPlaces/1.avif','location':'اسطنبول'},
    {'src':'../../assets/famousPlaces/2.avif','location':'انطاليا'},
    {'src':'../../assets/famousPlaces/3.avif','location':'بورصة'},
    {'src':'../../assets/famousPlaces/4.avif','location':'نوشهر'},
    {'src':'../../assets/famousPlaces/5.avif','location':'سكاريا'},
    {'src':'../../assets/famousPlaces/6.avif','location':'موغلا'},
    {'src':'../../assets/famousPlaces/7.avif','location':'طرابزون'},

  ]

  mouseEnter(ele:HTMLElement){
    ele.style.background = "#9D1D96";
    ele.style.color="#fff";
  }

  mouseLeave(ele:HTMLElement){
    ele.style.background = "#000";
    ele.style.color="#fff";
  }




}



