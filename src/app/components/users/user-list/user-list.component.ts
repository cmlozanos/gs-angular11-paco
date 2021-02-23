import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Object[] = [];

  constructor() { }

  ngOnInit(): void {
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

  add(): void {
    this.users.push(
      {
        name: 'AAA',
        lastname: 'BBB',
        salary: 0
      }
    );
    console.log('ADDING');
  }
}
