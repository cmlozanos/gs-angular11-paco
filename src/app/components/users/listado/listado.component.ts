import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

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
