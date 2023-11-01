import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/shared/interfaces/user';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'MRCH-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: User = { name: '', email: '' };
  loginStatus: boolean = false;

  constructor(userService: UserService, private tokenService: TokenService, private router: Router) {
    // El servicio se inyecta desde el constructor y no necesita al atributo privado
    // porque solo se requiere una vez. Si se deseara usar en otros métodos, se incluye
    // el atributo privado

    userService.selectedUser.subscribe((user: User) => {
      this.user = user;
    });

    this.tokenService.loginStatus.subscribe((status: boolean) => {
      this.loginStatus = status;
    });

    // this.loginStatus = this.tokenService.isLoggedin();
  }

  logout() {
    this.tokenService.remove();
    this.router.navigate(['login']);
  }

}
