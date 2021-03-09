import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  users: User[] = [];

  constructor() {
    this.users = [{
        name: 'Carlos',
        lastname: 'Lozano',
        salary: 1
      }, {
        name: 'Paco',
        lastname: 'Garcia',
        salary: 1
      }
    ]
   }

   add(user: User) {
    this.users.push(user);
  }

  delete(name: string) {
    this.users = this.users.filter(u => u.name !== name);
  }
}
