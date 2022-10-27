import { HttpClient } from '@angular/common/http';
import { ElementRef } from '@angular/core';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customNameValidate } from '../custom.validator';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  constructor(private http:HttpClient) {
    this.initFormControls();
    this.creatform();
   }

  ngOnInit(): void {
  }

  activeBtn1(){
    var btn1 = document.getElementsByClassName("btn")[0];
    var btn2 = document.getElementsByClassName("btn")[1];
    var searchRoom = document.getElementById("searchRoom");
    var call = document.getElementById("call");

    btn1.classList.add('active-btn');
    btn2.classList.remove('active-btn')
    searchRoom.style.display = "block";
    call.style.display = "none"
  }

  activeBtn2(){
    var btn1 = document.getElementsByClassName("btn")[0];
    var btn2 = document.getElementsByClassName("btn")[1];
    var call = document.getElementById("call");
    var searchRoom = document.getElementById("searchRoom");

    btn2.classList.add('active-btn');
    btn1.classList.remove('active-btn')
    call.style.display = "block"
    searchRoom.style.display = "none";

  }

  call:FormGroup;
  clientName:FormControl;
  clientTel:FormControl;
  clientMail:FormControl;

  initFormControls(){
    this.clientName = new FormControl('',[Validators.required,customNameValidate]);
    this.clientTel  = new FormControl('',Validators.required);
    this.clientMail = new FormControl('',Validators.required);
  }
  creatform(){
    this.call = new FormGroup({
      clientName : this.clientName,
      clientTel : this.clientTel ,
      clientMail : this.clientMail
    });
  }

  submit(){
    console.log(this.call.value);
    this.http.post<any>('http://localhost:3000/posts/',this.call.value).subscribe({
      next : (res)=>{
        alert("Successfully Send Data 👍 ");
        //this.call.reset();
        this.clientName.setValue(' ');
        this.clientTel.setValue(' ');
        this.clientMail.setValue(' ');
      },
      error: (res)=>{
        alert("Faild Send Data");
      }
    });
  }

  @ViewChild('searchForm') searchForm:any;
  search(form:any){
    console.log(form);
    this.http.post('http://localhost:3000/posts/',form).subscribe({
      next:  (res)=>{
        alert('Successfully Send Data');
        this.searchForm.reset();
      },
      error: (res)=>{
        alert('Failed Send Data ');
      }
    });
  }

}
