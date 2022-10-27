import { AlertServiceService } from './../alert-service.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import * as $ from 'jquery';


@Component({
  selector: 'app-famoushotels',
  templateUrl: './famoushotels.component.html',
  styleUrls: ['./famoushotels.component.scss']
})
export class FamoushotelsComponent implements OnInit {
  galleryDivian:string[];
  constructor(private ser:AlertServiceService) {
    this.galleryDivian=[
      '../../assets/famousHotels/c1/5.avif',
      '../../assets/famousHotels/c1/6.avif',
      '../../assets/famousHotels/c1/bigImg.avif',
      '../../assets/famousHotels/c1/7.avif',
      '../../assets/famousHotels/c1/2.webp'
    ]
  }

  ngOnInit(): void {
    $(document).ready(function(){
      $('.carousel-inner .carousel-item:first-of-type').addClass('active');
      $('#popup-content div:nth-child(3) div:nth-child(2) div img').click(function(){
        let bigImg = document.getElementById("bigImg") ;
        bigImg.setAttribute('src',$(this).attr('src'));
      });
      $("#popup-content").click(function(event){
        event.stopPropagation();
      })
    })
  }

  customOptions: OwlOptions = {
    rtl:true,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 400,
    navText: ['<i class="fa fa-chevron-right" aria-hidden="true"></i>', '<i class="fa fa-chevron-left" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 3
      }
    },
    nav: false
  }

  cards  = this.ser.cards;

  openDetails(h1:string,des:string,mapSrc:string,rate:number,img1:string,img2:string,img3:string,img4:string,img5:string){
    let head = document.getElementById("title") as HTMLElement;
    let description = document.getElementById("description") as HTMLElement ;
    let popupContent = document.getElementById("container") as HTMLElement;
    let map = document.getElementById("map") as HTMLElement ;
    let rateNum = document.getElementById("rateNum") as HTMLElement ;

    let bigImg = document.getElementById("bigImg") ;
    bigImg.setAttribute('src',img4)
    let gallery = document.getElementsByClassName("gallery") ;
    gallery[0].setAttribute('src',img1);
    gallery[1].setAttribute('src',img2);
    gallery[2].setAttribute('src',img3);
    gallery[3].setAttribute('src',img4);
    gallery[4].setAttribute('src',img5);

    popupContent.classList.remove("d-none");
    head.innerText = h1 ;
    description.innerText = des;
    map.setAttribute('href',mapSrc)
    let ra = rate.toString();
    rateNum.innerText = ra +'.0' ;


    let rateStars = document.getElementById("rate") as HTMLElement ;
    rateStars.innerText = ''

    for(let x = 0;x<rate;x++){
      console.log(x);
      var star = document.createElement('i');
      star.classList.add('bi-star-fill');
      rateStars.appendChild(star);

    }

  }

  close(){
    let container = document.getElementById("container") as HTMLElement;
    container.classList.add('d-none');
  }



}
