import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = this.userService.users;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    
  }

  delete(name: string): void {
    this.userService.delete(name);
    this.users = this.userService.users;
  }
}
