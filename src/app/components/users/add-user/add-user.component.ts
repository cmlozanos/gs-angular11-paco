import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userService: UserService;

  constructor(userService: UserService) { 
    this.userService = userService;
  }

  ngOnInit(): void {
  }

  add(): void {
    this.userService.add({
      name: 'AAA',
      lastname: 'BBB',
      salary: 0
    });
    /*
    this.users.push(
      {
        name: 'AAA',
        lastname: 'BBB',
        salary: 0
      }
    );
    */
    console.log('ADDING');
  }
}
