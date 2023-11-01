import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'MRCH-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private tokenService: TokenService, private router: Router) { 
    // if (tokenService.isLoggedin()) {
    //   router.navigate(['home']);
    // }
  }

  login() {
    setTimeout(() => {
      this.tokenService.save('1231231232');
      this.router.navigate(['']);
    });
  }
}
