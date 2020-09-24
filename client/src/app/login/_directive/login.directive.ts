import { Directive, Input } from '@angular/core';
import { FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appLogin]',
  providers: [{ provide: NG_VALIDATORS, useExisting: LoginDirective, multi: true }]
})
export class LoginDirective implements Validator {
  @Input('appLogin') username: string = '';
  constructor() { }

  validate(formGroup: FormGroup): ValidationErrors {
    if(this.username) {
      const username = formGroup.controls.user;
      if(username) {
        let t = username.value;
        if(t) {
          const tam: string[] = t.split('@');
          const domain: string = tam[tam.length - 1];
          if(!username) {
            return null
          }
          if(domain.toLowerCase() !== 'botstar.com') {
            username.setErrors({usernameMiss: true});
          }
          else {
            username.setErrors(null);
          }
        }
      }
    }
  }

}
