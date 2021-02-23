import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userService: UserService;

  name: string = '';
  lastname: string = '';
  salary: number= 0;

  constructor(userService: UserService) { 
    this.userService = userService;
  }

  ngOnInit(): void {
  }

  add(): void {
    this.userService.add({
      name: this.name,
      lastname: this.lastname,
      salary: this.salary
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
