import { Component } from '@angular/core';

import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'MRCH-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: User = { name: '', email: '' };

  constructor(userService: UserService) {
    // El servicio se inyecta desde el constructor y no necesita al atributo privado
    // porque solo se requiere una vez. Si se deseara usar en otros métodos, se incluye
    // el atributo privado

    userService.selectedUser.subscribe((user: User) => {
      this.user = user;
    });
  }

}
