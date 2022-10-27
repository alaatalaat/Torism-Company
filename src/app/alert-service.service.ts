import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})


export class AlertServiceService {

  // constructor(private snackBar:MatSnackBar) { }
  // success(message:string,duration=3000){
  //   this.snackBar.open(message,'',{
  //     duration : duration ,
  //     horizontalPosition:'center',
  //     verticalPosition:'bottom',
  //     panelClass :['alert','alert-success']
  //   })
  // }

  // error(message:string,duration=3000){
  //   this.snackBar.open(message,'',{
  //     duration : duration ,
  //     horizontalPosition:'center',
  //     verticalPosition:'bottom',
  //     panelClass :['alert','alert-error']
  //   })
  // }

  // message(message:string,duration=3000){
  //   this.snackBar.open(message,'',{
  //     duration : duration ,
  //     horizontalPosition:'center',
  //     verticalPosition:'bottom',
  //     panelClass :['alert']
  //   })
  // }

  cards=[
    {
      'id':1,
      'carouselImg':[
        '../../assets/famousHotels/c1/1.avif',
        '../../assets/famousHotels/c1/2.webp',
        '../../assets/famousHotels/c1/3.avif',
        '../../assets/famousHotels/c1/4.avif',
        '../../assets/famousHotels/c1/7.avif',
      ],
      'rate':5.0,
      'description':'فندق ديفيان اسطنبول',
      'city':'اسطنبول',
      'map':'https://www.google.com/maps/place/Divan+%C4%B0stanbul/@41.0411428,28.9848311,17z/data=!3m1!4b1!4m8!3m7!1s0x14cab76576852ec9:0x1fb1daea1c0bea10!5m2!4m1!1i2!8m2!3d41.0411388!4d28.9870198?hl=en-',
      'bigImg':'../../assets/famousHotels/c1/bigImg.avif',
      'infoAbout':'فندق ديفيان اسطنبول هو واحد من أكثر الفنادق تميزًا في اسطنبول بغرفه المفروشة بأناقة والخدمة الدافئة واليقظة التي تجمع بين أفضل ما في الشرق والغرب وتراثها الذي يزيد عن نصف قرن.',
      'wifi': true,
      'coffe':false,
      'parking':true,
      'pool':true
    },
    {
      'id':2,
      'carouselImg':[
        '../../assets/famousHotels/c2/1.avif',
        '../../assets/famousHotels/c2/2.avif',
        '../../assets/famousHotels/c2/3.avif',
        '../../assets/famousHotels/c2/4.avif',
        '../../assets/famousHotels/c2/5.avif'
      ],
      'rate':4.0,
      'description':'فندق سي في كاي تقسيم - اسطنبول',
      'city':'اسطنبول',
      'map':'https://www.google.com/maps/place/%D9%81%D9%86%D8%AF%D9%82+%D9%88%D9%8A%D8%B4+%D9%85%D9%88%D8%B1+%D8%A7%D8%B3%D8%B7%D9%86%D8%A8%D9%88%D9%84%E2%80%AD/@41.04894,28.8971083,17z/data=!4m8!3m7!1s0x14caba83f2073afd:0x3b632972b7c56a7d!5m2!4m1!1i2!8m2!3d41.0490365!4d28.8995335',
      'infoAbout':'مع موقعه في قلب تقسيم ، المركز الثقافي والتسوقي والترفيهي في اسطنبول ، يوفر فندق CVK Taksim Hotel Istanbul لضيوفه أجواء دافئة ومريحة. تطل الغرف والأجنحة على المدينة ، وتوفر أماكن إقامة فسيحة بتصميم بسيط وأنيق.',
      'bigImg':'../../assets/famousHotels/c2/3.avif',
      'wifi': true,
      'coffe':true,
      'parking':false,
      'pool':false
    },
    {
      'id':3,
      'carouselImg':[
        '../../assets/famousHotels/c3/1.avif',
        '../../assets/famousHotels/c3/2.avif',
        '../../assets/famousHotels/c3/3.avif',
        '../../assets/famousHotels/c3/4.avif',
        '../../assets/famousHotels/c3/5.avif'
      ],
      'rate':4.0,
      'description':'فندق رمادا في اسطنبول - تقسيم',
      'city':'اسطنبول',
      'map':'https://www.google.com/maps/place/%D8%B1%D8%A7%D9%85%D8%A7%D8%AF%D8%A7+%D8%A7%D8%B3%D8%B7%D9%86%D8%A8%D9%88%D9%84+%D8%AA%D9%82%D8%B3%D9%8A%D9%85%E2%80%AD/@41.0406096,28.9849906,17z/data=!3m1!4b1!4m8!3m7!1s0x14cab76faa1cd239:0x39fd8c658d01b359!5m2!4m1!1i2!8m2!3d41.0406312!4d28.9850546',
      'bigImg':'../../assets/famousHotels/c3/3.avif',
      'infoAbout':'فندق رمادا اسطنبول تقسيم ، يقع في قلب اسطنبول الحديثة بشارع الاستقلال. مع سهولة الوصول إلى المترو و مواصلات المطار ، وعلى بعد خمس دقائق فقط سيرًا على الأقدام من ميدان تقسيم ، مما يضعك في موقع مثالي لاستكشاف كل ما تقدمه المدينة.',
      'wifi': true,
      'coffe':true,
      'parking':true,
      'pool':false
    },
    {
      'id':4,
      'carouselImg':[
        '../../assets/famousHotels/c4/1.avif',
        '../../assets/famousHotels/c4/2.avif',
        '../../assets/famousHotels/c4/3.avif',
        '../../assets/famousHotels/c4/4.avif',
        '../../assets/famousHotels/c4/5.avif'
      ],
      'rate':4.0,
      'description':'فندق جرين بارك تقسيم',
      'city':'اسطنبول',
      'map':'https://www.google.com/maps?q=the+green+park+taksim&rlz=1C1CHBD_enTR940TR941&um=1&ie=UTF-8&sa=X&ved=2ahUKEwi8t7D44IzxAhXqsYsKHZdIAIkQ_AUoAXoECAEQAw',
      'bigImg':'../../assets/famousHotels/c4/3.avif',
      'infoAbout':'يقع فندق جرين بارك في منطقة الفنادق في تقسيم ، التي تُعتبر قلب إسطنبول ، وتوفر للضيوف وصلات عمل سهلة ويمكنهم المشي إلى الشوارع الرئيسية في المدينة.',
      'wifi': true,
      'coffe':true,
      'parking':false,
      'pool':false
    },
    {
      'id':5,
      'carouselImg':[
        '../../assets/famousHotels/c5/1.avif',
        '../../assets/famousHotels/c5/2.avif',
        '../../assets/famousHotels/c5/3.webp',
        '../../assets/famousHotels/c5/4.avif',
        '../../assets/famousHotels/c5/5.avif'
      ],
      'rate':3.0,
      'description':'منتجع النورس',
      'city':'سكاريا',
      'map':'https://www.google.com/maps/place/Al+Nawras+Resort/@40.6773878,30.2389847,17z/data=!3m1!4b1!4m5!3m4!1s0x14cca61d81e9a8e5:0xf711dd3bfaae18f8!8m2!3d40.6773878!4d30.236796',
      'bigImg':'../../assets/famousHotels/c5/3.webp',
      'infoAbout':'منتجع النورس ، الذي يقع في منطقة المحمودية ، هو خيار شائع للمسافرين. من هنا ، يمكن للضيوف الاستفادة القصوى من كل ما تقدمه المدينة النابضة بالحياة. بفضل موقعه المناسب ، يوفر مكان الإقامة وصولاً سهلاً إلى الوجهات التي يجب زيارتها في المدينة.',
      'wifi': true,
      'coffe':false,
      'parking':true,
      'pool':true,
    }
  ]


}
