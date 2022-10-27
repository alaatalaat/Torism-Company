import { Accordian } from './../../accordian';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SlidesOutputData } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-car-child',
  templateUrl: './car-child.component.html',
  styleUrls: ['./car-child.component.scss']
})
export class CarChildComponent implements OnInit {
  @Input() imgOnTop : string ;
  @Input() accorFromParent:Accordian[];

  @Output() torismCars = new EventEmitter();
  carDes = 'سائقون متمرّسون يتحدثون بلغتكم , مع سيارات حديثة وراقية بمقاسات متعددة، ضمن مجموعة واسعة من الخيارات التي تتناسب مع فترة إجازتكم'

  sendTorismCars(){
    this.torismCars.emit('https://www.imtilakgroup.com/cdn-cgi/image/format=auto,fit=contain,width=500/https://imt-assets.fra1.cdn.digitaloceanspaces.com/Safaraq/settings/d9729d49bf80bad1706617512801771c9T9_945Fgc.webp')
  }

  constructor() { }

  ngOnInit(): void { this.sendTorismCars();
  }

}


