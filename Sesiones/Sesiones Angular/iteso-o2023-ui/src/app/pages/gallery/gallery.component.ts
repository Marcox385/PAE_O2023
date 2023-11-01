import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'MRCH-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  constructor (tokenService: TokenService, router: Router) {
    // if (!tokenService.isLoggedin()) {
    //   router.navigate(['login']);
    // }
  }

}
