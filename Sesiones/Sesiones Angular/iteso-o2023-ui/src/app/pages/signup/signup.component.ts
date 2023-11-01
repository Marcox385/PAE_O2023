import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'MRCH-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm: FormGroup;

  constructor(formBuilder: FormBuilder, tokenService: TokenService, router: Router) {
    this.signupForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, () => this.validateDomain()]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [Validators.required, Validators.minLength(8)]],
      terms: [false, Validators.requiredTrue]
    }, {
      // validators: [this.test.bind(this)]
      // validators: [() => this.test]
      validators: [() => this.comparePasswords()]
    });

    // if (tokenService.isLoggedin()) {
    //   router.navigate(['home']);
    // }
  }

  test() {
    if (this.signupForm)
      console.log(this.signupForm.getRawValue());
  }

  // matchError : las contraseñas no coinciden
  comparePasswords() {
    if (!this.signupForm) return null;

    const { password, confirm } = this.signupForm.getRawValue();
    return (password === confirm) ? null : { match: true };
  }

  hasError(controlName: string, errorName: string) {
    return this.signupForm.controls[controlName].errors && this.signupForm.controls[controlName].errors![errorName];
  }

  // domainError : el dominio no coincide con iteso.mx
  validateDomain() {
    if (!this.signupForm) return null;

    const { email } = this.signupForm.getRawValue();
    const domain = email.split('@')[1]
  
    if (domain !== 'iteso.mx') {
      return {
        domain: { required: 'iteso.mx', current: domain }
      }
    }
    // Alternativa: /iteso.mx$/.test(email)

    return null;

  }

  signup() {
    console.log(this.signupForm);
  }

}
