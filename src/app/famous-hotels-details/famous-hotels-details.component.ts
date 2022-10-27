import { AlertServiceService } from './../alert-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { param } from 'jquery';

@Component({
  selector: 'app-famous-hotels-details',
  templateUrl: './famous-hotels-details.component.html',
  styleUrls: ['./famous-hotels-details.component.scss']
})
export class FamousHotelsDetailsComponent implements OnInit{
  allDetails :any= [];
  hotelID:any ;
  constructor(private activeRoute:ActivatedRoute,private http:HttpClient
    ,private ser:AlertServiceService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(param=>{
      this.hotelID = param.get('id');
      this.getAllDetails();
      console.log(this.hotelID);
      console.log(this.ser.cards[this.hotelID])
    });

    this.excute(this.allDetails.rate);

    $(document).ready(function(){
      $('#first .row div:first-of-type div:nth-child(3) div:nth-child(2) img').click(function(){
        let bigImg = document.getElementById("bigImg") ;
        bigImg.setAttribute('src',$(this).attr('src'));
      });
    });
  }

  getAllDetails(){
    this.allDetails = this.ser.cards[this.hotelID-1];
  }

  excute(rate:any){
    let rateNum = document.getElementById("rateNum") as HTMLElement ;
    let ra = rate.toString();
    rateNum.innerText = ra +'.0' ;


    let rateStars = document.getElementById("rate") as HTMLElement ;
    for(let x = 0;x<rate;x++){
      console.log(x);
      var star = document.createElement('i');
      star.classList.add('bi-star-fill');
      rateStars.appendChild(star);

    }
  }

}
