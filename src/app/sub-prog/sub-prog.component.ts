import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-prog',
  templateUrl: './sub-prog.component.html',
  styleUrls: ['./sub-prog.component.scss']
})
export class SubProgComponent implements OnInit {
  subProgDetails:any =[];
  idBeforeSubRoutingInURL:any;

  constructor(private router:Router,private http:HttpClient,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(param=>{
      this.idBeforeSubRoutingInURL = this.activeRoute.parent.snapshot.paramMap.get('id')
      console.log('ID Before SubR:',this.activeRoute.parent.snapshot.paramMap.get('id'));
      });

      this.http.get(`http://localhost:3000/posts/${this.idBeforeSubRoutingInURL}`)
      .subscribe((data)=>{
        this.subProgDetails = data ;
        console.log(this.subProgDetails)
      });
  }

  enter(ele:HTMLElement){
    ele.style.background = "#fb8d04";
  }

  leave(ele:HTMLElement){
    ele.style.background = "#9d1d96";
  }


}
