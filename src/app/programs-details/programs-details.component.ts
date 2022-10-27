import { param } from 'jquery';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SubProgComponent } from '../sub-prog/sub-prog.component';

@Component({
  selector: 'app-programs-details',
  templateUrl: './programs-details.component.html',
  styleUrls: ['./programs-details.component.scss'],
})
export class ProgramsDetailsComponent implements OnInit {
  thisYear = new Date();
  allProgDetails:any=[];
  progValue:any;
  id:any;
  constructor(
    private activeRoute:ActivatedRoute,
    private http:HttpClient,
    private router:Router) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(param=>{
    this.progValue = param.get('id');
    console.log('progVal : ',this.progValue)
    });

    this.http.get(`http://localhost:3000/posts/${this.progValue}`)
    .subscribe((data)=>{
      this.allProgDetails = data ;
      console.log('all',this.allProgDetails);
    });
    console.log('bbbbb',);
  }

  goBackToPrograms(){
    this.router.navigate(['/programs',{id:this.progValue}])
  }

  gotoSubProg(){
    this.router.navigate(['sub-prog'],{relativeTo:this.activeRoute});
  }
  overview(){
    this.router.navigate(['overview'],{relativeTo:this.activeRoute});
  }


}



/*

"cards":[
        {
          "img":"",
          "title":"",
          "numPersons":"",
          "numDays":"",
          "description":""
        },
        {
          "img":"",
          "title":"",
          "numPersons":"",
          "numDays":"",
          "description":""
        },
        {
          "img":"",
          "title":"",
          "numPersons":"",
          "numDays":"",
          "description":""
        },
        {
          "img":"",
          "title":"",
          "numPersons":"",
          "numDays":"",
          "description":""
        },
      ]

*/
