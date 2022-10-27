import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public translate:TranslateService) { }

  ngOnInit(): void {
    $(document).ready(function(){


      $(window).on('scroll',function(){
        var scroll:any = $(window).scrollTop()
        if(scroll > 0){
          $('nav').css('background','#fff')
          $('nav ul li a').css('color','#9D1D96')
          $('svg g').attr('fill','#9D1D96')
        }else{
          $('nav').css('background','#9D1D96')
          $('nav ul li a').css('color','#fff')
          $('svg g').attr('fill','#fff')
        }
      })
    });
    console.log(scroll);
  }

}
