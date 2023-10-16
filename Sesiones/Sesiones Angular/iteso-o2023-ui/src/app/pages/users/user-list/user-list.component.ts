import { Component, OnInit, OnDestroy } from '@angular/core';

import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'MRCH-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  error: boolean = false;
  users: User[] = [];

  activeUser: User = { name: '', email: '' };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
      this.getUsers();
  }

  ngOnDestroy(): void {
    console.log('Users component destroyed!');
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (response: User[]) => {
        this.error = false;
        this.users = response;
      },
      error: () => {
        this.error = true;
      }
    });
  }

  selectUser(user: User) {
    // this.userService.setUser(user);
    this.activeUser = user;
  }
}
