import { AlertServiceService } from './../alert-service.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as $ from 'jquery' ;
import { Router } from '@angular/router';
@Component({
  selector: 'app-callus',
  templateUrl: './callus.component.html',
  styleUrls: ['./callus.component.scss']
})
export class CallusComponent implements OnInit {

  contactForm : FormGroup;


  constructor(private http: HttpClient,private router:Router,
    private api:AlertServiceService,private fb:FormBuilder) {

      this.contactForm = this.fb.group({
        name :['',Validators.required],
        email : ['',[Validators.required,Validators.email,Validators.pattern('.*com$')]],
        phone : ['',[Validators.required,Validators.minLength(11)]],
        message : ['',Validators.required],
      })

      //prevent user from enter characters in phone input
      this.contactForm.valueChanges.subscribe(changes=>{
        console.log(this.email.errors)
        if(isNaN(changes.phone)){
          this.contactForm.patchValue({
            phone : changes.phone.replace(/[a-zA-Z]/g,'')
          })
        }
      })
  }

  get name(){return this.contactForm.get('name')};
  get email(){return this.contactForm.get('email')};
  get phone(){return this.contactForm.get('phone')};
  get message(){return this.contactForm.get('message')};



  send(){
    console.log(this.contactForm.value);
    this.http.post<any>('http://localhost:3000/posts/',this.contactForm.value).subscribe({
      next : (res) =>{
        alert("Successfully Send Data 👍 ");
        this.contactForm.reset();
      },
      error : (res)=>{
        alert("Error While Sending Data ❌")
      }
    })
  }

  status:string;
  delete(){
    this.http.delete<any>('http://localhost:3000/posts/2')
    .subscribe(() => this.status = 'Delete successful');
    console.log(this.status)
  }

  putData(){
    this.http.put<any>('http://localhost:3000/posts/2',{
      "city":"Zagazig",
      "region":"mitghamr",
      "state":"Egypt",
    })
    .subscribe(() => this.status = 'Delete successful');
    console.log("Done")
  }

  ngOnInit(): void {

  }


}
