import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as $ from 'jquery';
import SwiperCore, { SwiperOptions } from 'swiper';
import { SwiperComponent } from "swiper/angular";


// import Swiper core and required modules
// import { Pagination , SwiperOptions} from "swiper";
// SwiperCore.use([Pagination]);

// import Swiper core and required modules
import Swiper, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})


export class HomeComponent implements OnInit {
  userImage:string ;
  placeholder:string;

  sayAbouSafaraq = [
    {
      imgSrc:'https://assets.safaraq.com/images/160/testimonials/416e0337157c2a90f799eca79ec4d9aa13.jpg',
      name:'علي بشير ',
      saidText:'أقدم جزيل الشكر لكل العاملين في هذه الشركة، وأنصح كل السائحين الراغبين بقضاء أجمل الرحلات والأوقات السعيدة والممتعة بالتعامل مع شركة ترافيل السياحية.',
      btnID:'aliBshir',
      src:'https://www.youtube.com/embed/YIPBOTapNy4'
    },
    {
      imgSrc:'https://assets.safaraq.com/images/160/testimonials/c0d608c4598fed40736a6365ff77b7a58.png',
      name:'أحد عملاء شركة ترافيل',
      saidText:'أشكر.. أشكر شركة ترافيل لجهودها المبذولة والأكثر من رائعة',
      btnID:'oneClient',
      src:'https://www.youtube.com/embed/t8XcsL6kVKA'
    },
    {
      imgSrc:'https://assets.safaraq.com/images/160/testimonials/254a28a16017fcc3e84e53ad9bd5715c15.jpg',
      name:'أ.طارق',
      saidText:'شركة ترافيل كأنهم أسرة واحدة.. حرصوا على رفاهيتنا والاهتمام بنا للغاية',
      btnID:'tarek',
      src:'https://www.youtube.com/embed/WUJ0pRu8N9Y'
    },
    {
      imgSrc:'https://assets.safaraq.com/images/160/testimonials/3e4ef4574cad8121d8168d2bdd0df69611.jpg',
      name:'ضيف الله بن علي',
      saidText:'أنصح كل الراغبين بالسياحة في إسطنبول للتمتع بأروع الأماكن الطبيعية، التي تندرج في البرامج السياحية التي تنظمها شركة ترافيل السياحية.',
      btnID:'deif',
      src:'https://www.youtube.com/embed/BBR81tqe3zw',
    },
    {
      imgSrc:'https://assets.safaraq.com/images/160/testimonials/3ac71dedde9d9ccf3edcc9fbf541be2414.jpg',
      name:'الشيخ مختار عربي مؤمن',
      saidText:'السياحة الهادفة إلى تركيا تريح النفس، وتبعث الأمل في الإنسان، فالسياحة في اسطنبول لها مذاقها الخاص، وأنت تعيش مع عبق التاريخ وعمق الحضارة وأمل المستقبل.',
      btnID:'shikhMokhtar',
      src:'https://www.youtube.com/embed/Vn65IqTf5F4'
    },
    {
      imgSrc:'https://assets.safaraq.com/images/160/testimonials/8f90b4f3c514c62160d458b5c457087f11.jpg',
      name:'عامر الشحي',
      saidText:'ننصح كل من يرغب بالقيام برحلات سياحية، بالتواصل مع شركة ترافيل السياحية، التي تتسم بسرعة الاستجابة والبرامج السياحية المميزة.',
      btnID:'amer',
      src:'https://www.youtube.com/embed/55awcuTL5_E'
    },
    {
      imgSrc:'https://assets.safaraq.com/images/160/testimonials/3aa0008974102af4483a159452f50b105.png',
      name:'أ.سامح ابراهيم',
      saidText:'أشهد لترافيل السياحية أنهم كانوا محترمين جداً، وبذلوا مجهوداً خرافياً لتلبية طلباتنا',
      btnID:'sameh',
      src:'https://www.youtube.com/embed/ZDs4YMOwxCA'
    },
    {
      imgSrc:'https://assets.safaraq.com/images/160/testimonials/bbafa812e6ad1ffbe5096000684bae2a5.png',
      name:'المهندس - تامر سراج ',
      saidText:'نتمنى أن نأتي معكم في رحلة ثانية',
      btnID:'tamer',
      src:'https://www.youtube.com/embed/3XuaIPjPHEE',
    },
  ];

  torismPrograms:OwlOptions = {
    rtl:true,
    loop: false,
    mouseDrag: false,
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
        items: 3
      },
      1000: {
        items: 3
      }
    },
    nav: true
  }

  customOptions:OwlOptions = {
    rtl:true,
    loop: false,
    mouseDrag: false,
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
        items: 3
      },
      1000: {
        items: 3
      }
    },
    nav: true
  }


  videosSlider:OwlOptions = {
    rtl:true,
    loop: false,
    mouseDrag: false,
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
        items: 3
      },
      1000: {
        items: 3
      }
    },
    nav: true
  }


  slidesStore=[
    {id:"img-one",src:"https://assets.safaraq.com/images/800/image_gallery/8e2b01f3e455e0ba8d55432cf3280e8a13.jpg"},
    {id:"img-two",src:"https://assets.safaraq.com/images/800/image_gallery/9b5492160d56e21e31f3a683e03accca14.jpg"},
    {id:"img-three",src:"https://assets.safaraq.com/images/800/image_gallery/aa241031d3037b4bd386180ce75e161215.jpg"},
    {id:"img-four",src:"https://assets.safaraq.com/images/800/image_gallery/79118038d6614a7f5514f45d7b15bfd614.jpg"},
    {id:"img-five",src:"https://assets.safaraq.com/images/800/image_gallery/78d3cf2c9793cfb58f297a09251cdbe112.jpg"},
    {id:"img-six",src:"https://assets.safaraq.com/images/800/image_gallery/edb9a6b6dc62bc5e6e851fde02d6d77d15.jpg"},
    {id:"img-seven",src:"https://assets.safaraq.com/images/800/image_gallery/4ad035bb19d8b1bf7bda579b96564bc411.jpg"},
    {id:"img-eight",src:"https://assets.safaraq.com/images/800/image_gallery/61e484321d335f1353a0175ad697853215.jpg"},
    {id:"img-nine",src:"https://assets.safaraq.com/images/800/image_gallery/6ad7a6c4938a1ab005107182d90c205d5.jpg"},
    {id:"img-ten",src:"https://assets.safaraq.com/images/800/image_gallery/e71886e7bff9ad3329d55aa34650d2e48.jpg"},
    {id:"img-eleven",src:"https://assets.safaraq.com/images/800/image_gallery/0c10dca4b4a93662acec15a27ac56e6913.jpg"},
    {id:"img-twelve",src:"https://assets.safaraq.com/images/800/image_gallery/859ddafbbbcbe212d6a1f9154ef1229614.jpg"},
  ];

  videoStore=[
    {src:"../../assets/home/c1.jpg",link:"https://www.youtube.com/watch?v=noMbo-ekDG8"},
    {src:"../../assets/home/c2.jpg",link:"https://www.youtube.com/watch?v=XL-LjxMrtsw"},
    {src:"../../assets/home/c3.jpg",link:"https://www.youtube.com/watch?v=UYb003S0pTg"},
    {src:"../../assets/home/c6.jpg",link:"https://www.youtube.com/watch?v=9VZGQdcOsTE"},
    {src:"../../assets/home/c7.jpg",link:"https://www.youtube.com/watch?v=85qO9E7xBa8"},
    {src:"../../assets/home/c8.jpg",link:"https://www.youtube.com/watch?v=qkR_grsnt9I"},
    {src:"../../assets/home/c9.jpg",link:"https://www.youtube.com/watch?v=jcKjIVBNcjc"},
    {src:"../../assets/home/c10.jpg",link:"https://www.youtube.com/watch?v=rh6YDbYHsME"},
  ]


  constructor() {
    setTimeout(()=>{
      for(var i=0;i<this.sayAbouSafaraq.length;i++){
        this.userImage = this.sayAbouSafaraq[i].src;
        console.log(this.userImage);
      }
    },3000);
    this.placeholder = 'https://via.placeholder.com/150';
  }

  ngOnInit(): void {
    $(document).ready(function(){
      $('#img-1').click(function(){
        $('.carousel-item:first-of-type').addClass('active').siblings().removeClass('active');
      });
      $('#img-2').click(function(){
        $('.carousel-item:nth-of-type(2)').addClass('active').siblings().removeClass('active');
      });
      $('#img-3').click(function(){
        $('.carousel-item:nth-of-type(3)').addClass('active').siblings().removeClass('active');
      });
      $('#img-4').click(function(){
        $('.carousel-item:nth-of-type(4)').addClass('active').siblings().removeClass('active');
      });
      $('#img-5').click(function(){
        $('.carousel-item:nth-of-type(5)').addClass('active').siblings().removeClass('active');
      });
      $('#img-6').click(function(){
        $('.carousel-item:nth-of-type(6)').addClass('active').siblings().removeClass('active');
      });
      $('#img-7').click(function(){
        $('.carousel-item:nth-of-type(7)').addClass('active').siblings().removeClass('active');
      });

      $('#services .container .row .col-sm-12 .row a span').hover(function(){
        $(this).css("color","#Fb8D04");
      },function(){
        $(this).css("color","#000");
      });



    });

  }


  openPopup(src:string){
    let popup = document.getElementById("popup") as HTMLElement ;
    popup.classList.add("open-popup");
    console.log(popup);

    var iframe = document.querySelector("iframe") ;
    iframe.setAttribute("src",src);
  }

  closePopup(){
    let popup = document.getElementById("popup") as HTMLElement ;
    popup.classList.remove("open-popup")
  }

  config : SwiperOptions = {
    // slidesPerView: 3,
    spaceBetween: 15,
    // navigation: true,
    pagination: { clickable: true },
    // scrollbar: { draggable: true },
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 10,},
      640: {
        slidesPerView: 3,
        spaceBetween: 20, },
    },
  };
  onSwiper([swiper]:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }



}
