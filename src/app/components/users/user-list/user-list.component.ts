import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.users = ['Carlos', 'Paco'];
  }

  add(): void {
    this.users.push('AAA');
    console.log('ADDING');
  }
}
