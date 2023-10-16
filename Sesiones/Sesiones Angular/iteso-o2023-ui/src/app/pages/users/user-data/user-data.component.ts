import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'MRCH-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  user: User = { name: '', email: '' };

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.user = this.userService.getUser();
      if (!this.user.id) {
        this.router.navigate(['..'], {
          queryParams: { error: true },
          relativeTo: this.activatedRoute
        })
      }
  }

}
