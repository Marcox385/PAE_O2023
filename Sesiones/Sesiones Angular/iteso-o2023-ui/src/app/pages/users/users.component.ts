import { Component, OnInit, OnDestroy } from '@angular/core';

import { User } from 'src/app/shared/interfaces/user';
import {UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'MRCH-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  users: User[] = [];
  // private userService: UserService;

  constructor(private userService: UserService) {
    console.log(userService);
    this.userService = userService;
  }  

  ngOnInit(): void {
      console.log('Users component initialized!');
      // this.users = this.userService.getUsersSync();

      this.userService.getUsers().subscribe((response: User[]) => {
        this.users = response;
      });
  }

  ngOnDestroy(): void {
      console.log('Users component destroyed!');
  }

}
