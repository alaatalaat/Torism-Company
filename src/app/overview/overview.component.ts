import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  id:any;
  overviewDetails:any = [] ;
  constructor(private router:Router,private http:HttpClient,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param=>{
      this.id = this.activatedRoute.parent.snapshot.paramMap.get('id');
    })


    this.http.get(`http://localhost:3000/posts/${this.id}`).subscribe((data)=>{
      this.overviewDetails = data ;
    })
  }

}
