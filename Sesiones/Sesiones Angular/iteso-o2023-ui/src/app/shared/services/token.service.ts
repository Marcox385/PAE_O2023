import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  /* Considerar optimizaciones posteriores
      - Atributo LocalStorage con alias de variable
      - Nombre de la propiedad (token) definida como variable dentro del ambiente
  */

  loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.loginStatus.next(this.isLoggedin());
  }

  save(token: string) {
    localStorage.setItem('token', token);
    this.loginStatus.next(true);
  }

  get(): string {
    return localStorage.getItem('token') || '';
  }

  isLoggedin(): boolean {
    return !!this.get();
  }

  remove() {
    localStorage.removeItem('token');
    this.loginStatus.next(false);
  }
}
