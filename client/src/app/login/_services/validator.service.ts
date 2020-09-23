import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  checkUsername(user: string){
    return(formGroup: FormGroup) =>{
      if(user){
        const username = formGroup.controls.user;
        let t = username.value
        if(t){
          const tam: string[] = t.split('@');
          const domain: string = tam[tam.length - 1]
          if(!username){
            return null
          }
          if(domain.toLowerCase() !== 'botstar.com'){
            username.setErrors({usernameMiss: true})
          }
          else{
            username.setErrors(null)
          }
        }
      }
    }     
  }
}
