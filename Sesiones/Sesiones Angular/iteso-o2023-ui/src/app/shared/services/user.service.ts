import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    {
      id: '1',
      name: 'Juan Pérez',
      email: 'juan.perez@iteso.mx'
    },
    {
      id: '2',
      name: 'John Smith',
      email: 'john.smith@iteso.mx'
    },
    {
      id: '3',
      name: 'Jane Doe',
      email: 'jane.doe@iteso.mx'
    }
  ]

  constructor(private httpClient: HttpClient) { }

  getUsersSync(): User[] {
    return this.users;
  }

  getUsers(): Observable<User[]> {
    const url = environment.apiUrl + 'users';
    return this.httpClient.get<User[]>(url);
  }

}
