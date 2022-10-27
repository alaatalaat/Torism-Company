import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { TestCodeDetailsComponent } from '../test-code-details/test-code-details.component';

import { registerLocaleData } from '@angular/common';
import localAr from '@angular/common/locales/ar-EG';
registerLocaleData(localAr );
import { ajax } from 'rxjs/ajax';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test-code',
  templateUrl: './test-code.component.html',
  styleUrls: ['./test-code.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TestCodeComponent{

userImage1:string ;
userImage2:string ;
placeholder:string;
constructor(){
  setTimeout(()=>{
    this.userImage1 = 'https://assets.safaraq.com/images/160/testimonials/8f90b4f3c514c62160d458b5c457087f11.jpg';
    this.userImage2 = 'https://assets.safaraq.com/images/160/testimonials/3ac71dedde9d9ccf3edcc9fbf541be2414.jpg';
  },3000);
  this.placeholder = 'https://via.placeholder.com/150';
}


}
