import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CarChildComponent } from './car-child/car-child.component';

@Component({
  selector: 'app-car-with-driver',
  templateUrl: './car-with-driver.component.html',
  styleUrls: ['./car-with-driver.component.scss']
})
export class CarWithDriverComponent implements OnInit ,AfterViewInit{
  thisYear = new Date();
  imgInHeader='../../assets/car-with-driver/headerImg.avif';
  carKinds=[
    {'id':1,'des':'مرسيدس فيتو 6 اشخاص','src':'../../assets/car-with-driver/1.avif',dispalyCls:false},
    {'id':2,'des':'مرسيدس سبرينتر 10 اشخاص','src':'../../assets/car-with-driver/2.avif',dispalyCls:false},
    {'id':3,'des':'مرسيدس سبرينتر 16 اشخاص','src':'../../assets/car-with-driver/3.avif',dispalyCls:false},
    {'id':4,'des':'باص صغير 25 راكب','src':'../../assets/car-with-driver/4.avif',dispalyCls:false},
    {'id':5,'des':'باص كبير 45 راكب','src':'../../assets/car-with-driver/5.avif',dispalyCls:false},
  ]
  valueFromChild ="";
  @ViewChild(CarChildComponent) childComp :CarChildComponent ;
  carDes :String ;
  constructor() { }

  ngOnInit(): void {
    //  this.carDes = this.childComp.carDes
  }
  ngAfterViewInit(){
    this.carDes = this.childComp.carDes
  }


  setImg(imgInLeft:HTMLElement,img:string,eleClicked:HTMLElement){
    imgInLeft.setAttribute('src',img);
    console.log('done');
    // eleClicked.classList.add("box-shadow");
    console.log(eleClicked.nextElementSibling);
  }
  mouseEnterList(ele:HTMLElement){
    ele.classList.add("box-shadow")
  }
  mouseLeaveList(ele:HTMLElement){
    ele.classList.remove("box-shadow");
  }

  login:boolean = true


  accordians=[
    {'id':'collapseOne','head':'headingOne','btnText':'كم تكلفة استئجار سيارة في تركيا اليوم؟!','bodyText':'يمكن أن نقدم لكم رقما وسطيا وهو 220 دولار أمريكي'},
    {'id':'collapseTwo','head':'headingTwo','btnText':'هل الرخصة الدولية معتمدة في تركيا ؟!','bodyText':'نعم الرخصة الدولية في تركيا معتمدة'},
    {'id':'collapseThree','head':'headingThree','btnText':'أيهما أفضل استئجار سيارة مع سائق أو سيارة بدون سائق في تركيا؟','bodyText':'تنصح شركة ترافيل السياح باستئجار سيارة مع سائق'},
    {'id':'collapseFour','head':'headingFour','btnText':'هل توفر شركة ترافيل سيارة مع سائق عربي؟','bodyText':'نعم يتوفر لدى شركة سفرك سيارة مع سائق يتكلم اللغة العربية.'},
    {'id':'collapseFive','head':'headingFive','btnText':'ما هي أجمل الأماكن السياحية التي يمكن زيارتها في تركيا؟','bodyText':`بعد أن تحولت تركيا لبوابة سياحة عالمية نظرا لما حباها الله من مدن ساحرة تتداخل فيها الغابات مع البحيرات مع الشواطئ الرائعة، يمكن أن نذكر أبرز المدن التي تعلو قائمة السياحة في تركيا وهي:
    مدينة أنطاليا: تتميز بمناظر طبيعية وأماكن سياحية متنوعة من شواطئ نظيفة ومنتجعات فاخرة ومطاعم تقدم أشهى الوجبات.
    إسطنبول وما حولها: تحتوي على أماكن جميلة ومنتزهات ومعالم تاريخية وأثرية ومتاحف ومنتجعات ومطاعم والفنادق وشواطئ.
   بودروم: تُعد وجهة عشاق الشواطئ الساحرة.
   موغلا: طبيعة جغرافية خلابة كونها تمتد على ساحل بحر إيجه، وفيها منطقة فتحية السياحية التي تعتبر قبلة مفضلة للسياح.
   طرابزون: هناك حيث يخال لك أن قطعا من الجنة منزلة على الأرض حيث الهواء النقي والغابات المذهلة والمساحات الخضراء وحيث بحيرة أوزنجول ذات الجمال الفريد.
   وتطول القائمة في ذكر المدن السياحية لكن يمكن أن نجمل لكم أشهرها وهي (بورصة، وكابادوكيا، وإزمير، ويلوا، سامسون، الانيا.. الخ).`},
  ];

}
