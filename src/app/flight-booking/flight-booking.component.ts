import { Images } from './../interfaces/images';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.scss']
})
export class FlightBookingComponent implements OnInit {
  plus = '+' ;
  code = '20';
  symbol='eg';

  child = 0 ;
  rashed = 0 ;
  student = 0 ;

  y = 0;
  z = 0;
  s = 0;

  images:Array<Images> =[
    {id:1,src:'../../assets/bookingFlight/1.png',alt:'delta air kines'},
    {id:2,src:'../../assets/bookingFlight/2.png',alt:'qatar air ways'},
    {id:3,src:'../../assets/bookingFlight/3.png',alt:'turkish air lines'},
    {id:4,src:'../../assets/bookingFlight/4.png',alt:'united'},
    {id:5,src:'../../assets/bookingFlight/5.png',alt:'emirates'},
    {id:6,src:'../../assets/bookingFlight/6.png',alt:'united'},
    {id:7,src:'../../assets/bookingFlight/7.png',alt:'lufthansa'},
  ]

  //to check and add the last element added only
  track(index:number,image:Images){
    return image.id ;
  }

  reservationForm = new FormGroup({
    name : new FormControl(),
    phone :new FormControl(),
    countPassenger: new FormControl(),
    degree : new FormControl(),
    // cityTo :new FormControl(),
    startDate : new FormControl(),
    endDate : new FormControl(),
  });
  submiReservationForm(){
    console.log(this.reservationForm.value,this.formCityFrom.value);
  }
  updateReservationForm(){
    this.reservationForm.setValue({
      name : '',
      phone : '' ,
      countPassenger:'',
      degree : '',
      // cityTo : '',
      startDate : new FormControl(),
      endDate : new FormControl(),
    });
  }

  form!:FormGroup;
  formCityFrom!:FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      cityArr: null
    });
    this.formCityFrom = this.formBuilder.group({
      cityTo : null
    });
  }

  Options:OwlOptions = {
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
        items: 4
      },
      1000: {
        items: 5
      }
    },
    nav: false
  }

  ngOnInit(){
    $(document).ready(function(){
      $("#inputTwo .col-3").click(function(){
        $(".codes").toggleClass("d-none");
      });
      $("#inputThree").click(function(){
        $(".gender").toggleClass("d-none");
      });
      $("#select").on("change", function() {
        let x = document.getElementById("select") as HTMLSelectElement | null ;
        console.log(x!.value)
      });


      $(".fromCity").toggleClass("d-none");
      $("#inputFive input").focus(function(){
        $(".fromCity").toggleClass("d-none");
      });
      $("#inputFive input").blur(function(){
        $(".fromCity").toggleClass("d-none");
      });

      $(".toCity").addClass("d-none");
      $("#inputSix input").focus(function(){
        $(".toCity").toggleClass("d-none");
      });
      $("#inputSix input").blur(function(){
        $(".toCity").toggleClass("d-none");
      });



    });
  }
  incrementChild(child:any){
    let x = document.getElementById("passenger") as HTMLInputElement | null;
    if(this.child < 9)
      this.child++;
    else if(this.child == 9)
      this.child = 9 ;
    else if(this.child = 0)
      this.child = 0 ;

    let y = parseInt(x!.value);
    this.y = this.child ;
  }

  decrementChild(child:any){
    let x = document.getElementById("passenger") as HTMLInputElement | null;
    if(this.child <= 9 && this.child > 0)
      this.child--;
    else if(this.child = 0)
      this.child = 0 ;

    let y = parseInt(x!.value);
    this.y = this.child ;
  }

  incrementRashed(rashed:any){
    let x = document.getElementById("passenger") as HTMLInputElement | null;
    if(this.rashed < 9)
      this.rashed++;
    else if(this.rashed == 9)
      this.rashed = 9 ;
    else if(this.rashed = 0)
      this.rashed = 0 ;
    let z = parseInt(x!.value);
    this.z = this.rashed ;
  }

  decrementRashed(rashed:any){
    let x = document.getElementById("passenger") as HTMLInputElement | null;
    if(this.rashed <= 9 && this.rashed > 0)
      this.rashed--;
    else if(this.rashed = 0)
      this.rashed = 0 ;
    let z = parseInt(x!.value);
    this.z = this.rashed ;
  }

  incrementStudent(student:any){
    let x = document.getElementById("passenger") as HTMLInputElement | null;
    if(this.student < 9)
      this.student++;
    else if(this.student == 9)
      this.student = 9 ;
    else if(this.student = 0)
      this.student = 0 ;
    let s = parseInt(x!.value);
    this.s= this.student ;
  }

  decrementStudent(student:any){
    let x = document.getElementById("passenger") as HTMLInputElement | null;
    if(this.student <= 9 && this.student > 0)
      this.student--;
    else if(this.student = 0)
      this.student = 0 ;
    let s = parseInt(x!.value);
    this.s = this.student ;
  }



  changeFlagToSD(){
    let x = document.getElementById('flagImg') as HTMLImageElement | null ;
    let y =  document.getElementById('sdImg') as HTMLImageElement  | null ;
        x!.src =  y!.src;
    let code = document.getElementById("code") ;
    let codeOne = document.getElementById("codeOne") ;
        code!.innerHTML = codeOne!.innerHTML ;

        console.log('code  =' , code);
        console.log('code One =' , codeOne);

  }

  changeFlagToQA(){
    let x = document.getElementById('flagImg') as HTMLImageElement | null ;
    let y =  document.getElementById('qaImg') as HTMLImageElement  | null ;
        x!.src =  y!.src;
    let code = document.getElementById("code") ;
    let codeOne = document.getElementById("codeTwo") ;
        code!.innerHTML = codeOne!.innerHTML ;
  }

  changeFlagToTU(){
    let x = document.getElementById('flagImg') as HTMLImageElement | null ;
    let y =  document.getElementById('tuImg') as HTMLImageElement  | null ;
        x!.src =  y!.src;
    let code = document.getElementById("code") ;
    let codeOne = document.getElementById("codeThree") ;
        code!.innerHTML = codeOne!.innerHTML ;
  }

  cityfrom  = [
    {id:'arish',city:'El Arish'},
    {id:'cairo',city:'Cairo'},
    {id:'m.allam',city:'Marsa Alam'},
    {id:'luxor',city:'Luxor'},
    {id:'alex',city:'Alexandria'},
  ];
  fromCity(id:any){
    let x = document.getElementById('fromCity') as HTMLInputElement | null ;
    let y =  document.getElementById('"'+ this.cityfrom[id] +'"') as HTMLElement  | null ;
        x!.value =  y!.innerHTML;

        console.log('x =' , x);
        console.log('y =', y)
  }

  cityArrived = ["Aleknagik","Allentown","Abilene Regional","Albuquerque"]
  reserve(x:any){
    console.log('Reserve Value :',x);
    this.form.get('cityArr').setValue(x);
  }
  reserveFrom(x:any){
    this.formCityFrom.get('cityTo').setValue(x);
  }

  fillColor =`rgb(
    ${Math.floor(Math.random()*256)},
    ${Math.floor(Math.random()*256)},
    ${Math.floor(Math.random()*256)}
  )`;
  changeColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    this.fillColor = `rgb(${r},${g},${b})`;
  }
}
