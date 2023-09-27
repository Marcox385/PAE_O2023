import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Example app';
  name = 'Usuario';

  constructor() {
    setTimeout(() => {
      this.name = 'Usuari@'
    }, 3000);
  }
}
