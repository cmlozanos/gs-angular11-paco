import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  name: string = '';
  lastname: string = '';
  salary: number= 0;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  add(): void {
    this.userService.add(new User(this.name, this.lastname, this.salary));
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
