import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'MRCH-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnChanges {

  @Input() user: User = {
    name: 'John Doe',
    email: 'john.doe@gmail.com'
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('CHANGES DETECTED ON USER\n', this.user);
  }

}
