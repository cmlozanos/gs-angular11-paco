import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Object[] = [];

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

   add(user: { name: string; lastname: string; salary: number; }) {
    this.users.push(user);
  }
}
