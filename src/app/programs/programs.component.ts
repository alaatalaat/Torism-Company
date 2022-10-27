import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { FormControl , FormGroup} from '@angular/forms';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  searchForProg = new FormGroup({
    state :  new FormControl(),
    city  :  new FormControl(),
  });
  states= [
    {value:'turkey', viewValue: 'تركيا'},
  ];
  cities:any=[]
  thisYear = new Date();
  constructor(
    private router:Router,
    private http:HttpClient,
    private activatedRoute:ActivatedRoute) { }

  selectedID:any;
  ngOnInit(): void {
    this.http.get('../../assets/json/allprograms.json').subscribe((data)=>{
      this.cities = data ;
    });

    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      if(params.get('id') != null){
        this.selectedID = params.get('id');
        console.log('=>',this.selectedID);
      }
    });
  }

  displayContent(eleOne:HTMLElement,eleTwo:HTMLElement,btnOne:HTMLElement,btnTwo:HTMLElement){
    eleOne.style.display = "block";
    eleTwo.style.display = "none";
    btnOne.classList.add('active-btn');
    btnTwo.classList.remove('active-btn');
  }


  search(){
    console.log(this.searchForProg.value);

    var city = this.searchForProg.get('city').value;
    console.log('City : ',city);
    this.router.navigate(['programs',city]);
  }

  isSelected(){
    return this.searchForProg.get('city').value !== this.selectedID;
  }

}
