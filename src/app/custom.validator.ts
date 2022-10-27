import { AbstractControl } from "@angular/forms";

export function customNameValidate(control:AbstractControl){
  console.log(control);
  if(control.value.match(/[0-9]/g)){
    return {invalidName:true}
  }
  return undefined ;
}
