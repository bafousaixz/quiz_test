import { Directive, Input } from '@angular/core';
import { FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { ValidatorService } from '../_service/validator.service'
@Directive({
  selector: '[appLogin]',
  providers: [{ provide: NG_VALIDATORS, useExisting: LoginDirective, multi: true }]
})
export class LoginDirective implements Validator {
  @Input('appLogin') username: string ;
  constructor(
    private validator: ValidatorService
  ) { }
  validate(formGroup: FormGroup): ValidationErrors {
    return this.validator.checkUsername(this.username)(formGroup)
  }

}
