import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Object[];

  constructor(userService: UserService) { 
    this.users = userService.users;
  }

  ngOnInit(): void {
    
  }

}
