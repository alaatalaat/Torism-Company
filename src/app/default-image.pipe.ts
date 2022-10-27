import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'defaultImage',
})
export class DefaultImage implements PipeTransform{
  transform(imageUrl:string,plceholder:string) {
    console.log('in pipe',imageUrl,plceholder);
    return imageUrl ? imageUrl : plceholder ;
  }
}
